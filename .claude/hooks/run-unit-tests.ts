// Claude Code hook that runs the unit tests after a turn that changed code.
//   snapshot (UserPromptSubmit): fingerprint the watched files
//   check    (Stop): run `pnpm run test` if the fingerprint changed
import { createHash } from "node:crypto";
import { existsSync } from "node:fs";
import { mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join, relative, resolve, sep } from "node:path";
import { text } from "node:stream/consumers";

const WATCHED_DIRS = ["app", "server"];
const WATCHED_FILE = /\.(ts|js|vue)$/;
const IGNORED_PATHS = ["app/tests/e2e", "app/coverage", "app/app.config.ts"];
const TEST_TIMEOUT_MS = 120_000;
const MAX_OUTPUT_CHARS = 6_000;

interface State {
  fingerprint: string;
  // True once a failing run has blocked Claude in the current turn
  blocked: boolean;
}

type TestResult =
  | { status: "passed" }
  | { status: "failed"; output: string }
  | { status: "unavailable"; reason: string };

const projectDir =
  process.env.CLAUDE_PROJECT_DIR ?? resolve(import.meta.dirname, "../..");

const respond = (response: Record<string, string>) =>
  console.log(JSON.stringify(response));

const hash = (data: string | Uint8Array) =>
  createHash("sha256").update(data).digest("hex");

async function listWatchedFiles(dir: string): Promise<string[]> {
  if (!existsSync(dir)) return [];

  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const path = join(dir, entry.name);
      const projectPath = relative(projectDir, path).split(sep).join("/");

      if (entry.name === "node_modules") return [];
      if (IGNORED_PATHS.includes(projectPath)) return [];
      if (entry.isDirectory()) return listWatchedFiles(path);
      return entry.isFile() && WATCHED_FILE.test(entry.name) ? [path] : [];
    })
  );

  return files.flat();
}

async function takeFingerprint() {
  const files = (
    await Promise.all(
      WATCHED_DIRS.map((dir) => listWatchedFiles(join(projectDir, dir)))
    )
  )
    .flat()
    .sort();
  const hashes = await Promise.all(
    files.map(
      async (file) =>
        `${relative(projectDir, file)}:${hash(await readFile(file))}`
    )
  );

  return hash(hashes.join("\n"));
}

async function readState(path: string): Promise<State | undefined> {
  try {
    return JSON.parse(await readFile(path, "utf8"));
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return undefined;
    throw error;
  }
}

async function writeState(path: string, state: State) {
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, JSON.stringify(state));
}

async function runTests(): Promise<TestResult> {
  const unavailable = (reason: string): TestResult => ({
    status: "unavailable",
    reason,
  });

  if (!existsSync(join(projectDir, "node_modules", ".bin", "vitest"))) {
    return unavailable("dependencies are missing, run `pnpm install`");
  }

  // Loaded lazily so that missing dependencies produce a warning, not a crash
  let execa: typeof import("execa").execa;
  try {
    ({ execa } = await import("execa"));
  } catch {
    return unavailable("execa could not be loaded, run `pnpm install`");
  }

  const result = await execa("pnpm", ["run", "test"], {
    cwd: projectDir,
    all: true,
    reject: false,
    stdin: "ignore",
    timeout: TEST_TIMEOUT_MS,
    killDescendants: true,
    env: { NO_COLOR: "1", FORCE_COLOR: "0" },
  });

  if (!result.failed) return { status: "passed" };
  if (result.timedOut) {
    return unavailable(
      `the run exceeded ${TEST_TIMEOUT_MS / 1000} seconds and was stopped`
    );
  }
  if (result.exitCode === undefined)
    return unavailable(String(result.shortMessage));

  const output = String(result.all ?? "").slice(-MAX_OUTPUT_CHARS);
  return { status: "failed", output };
}

async function main() {
  const mode = process.argv[2];
  const input: { session_id: string } = JSON.parse(await text(process.stdin));
  const statePath = join(
    tmpdir(),
    "claude-unit-test-hook",
    `${hash(`${projectDir}:${input.session_id}`)}.json`
  );
  const state = await readState(statePath);

  if (mode === "snapshot") {
    // A leftover fingerprint means the last turn was interrupted before its
    // check, so keep it to cover those changes too
    await writeState(statePath, {
      fingerprint: state?.fingerprint ?? (await takeFingerprint()),
      blocked: false,
    });
    return;
  }

  if (mode !== "check") throw new Error(`unknown mode "${mode}"`);
  if (!state) return;

  if (!state.blocked && state.fingerprint === (await takeFingerprint())) {
    await rm(statePath, { force: true });
    return;
  }

  const result = await runTests();

  if (result.status === "failed" && !state.blocked) {
    await writeState(statePath, { ...state, blocked: true });
    respond({
      decision: "block",
      reason: `\`pnpm run test\` failed after the code changes in this turn. Fix the failures. End of the output:\n\n${result.output}`,
    });
    return;
  }

  await rm(statePath, { force: true });

  if (result.status === "failed") {
    respond({
      systemMessage: `Unit tests are still failing after one fix attempt. End of the output:\n\n${result.output}`,
    });
  } else if (result.status === "unavailable") {
    respond({
      systemMessage: `Unit tests could not run: ${result.reason}.`,
    });
  }
}

// A broken hook should warn, never block Claude
try {
  await main();
} catch (error) {
  respond({
    systemMessage: `Unit test hook error: ${error instanceof Error ? error.message : error}`,
  });
}
