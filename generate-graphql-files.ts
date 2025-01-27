import {
  generateSchema,
  generateOutput,
  generateTurbo,
} from "@gql.tada/cli-utils";
import { spawn } from "node:child_process";
import process from "node:process";

const token = process.env.NUXT_GITHUB_SECRET;

if (!token) {
  console.error("$NUXT_GITHUB_SECRET is not set in the .env file.");
  process.exit(1);
}

console.info("Generating the schema from GitHub GraphQL API...\n");
await generateSchema({
  input: "https://api.github.com/graphql",
  output: "./src/data/types/github-schema.graphql",
  headers: {
    Authorization: `Bearer ${token}`,
  },
  tsconfig: undefined,
});

const outputFn = generateOutput({
  output: "./src/data/types/github-graphql-env.d.ts",
  disablePreprocessing: false,
  tsconfig: undefined,
});

const turboFn = generateTurbo({
  output: "./src/data/types/github-graphql-cache.d.ts",
  failOnWarn: true,
  tsconfig: undefined,
});

console.info("Generating the necessary gql.tada output files...\n");
await Promise.all([outputFn, turboFn]);

console.info("Running pnpm exec gql-tada doctor...");
function runPnpmExec(command: string, args: string[] = []): Promise<void> {
  return new Promise((resolve, reject) => {
    const child = spawn("pnpm", ["exec", command, ...args], {
      stdio: "inherit",
      shell: true,
    });

    child.on("close", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Command failed with exit code ${code}`));
      }
    });
  });
}

try {
  await runPnpmExec("gql-tada", ["doctor"]);
  console.info("'pnpm exec gql-tada doctor' executed successfully!");
} catch (error) {
  if (error instanceof Error) {
    console.error(
      "Error executing `pnpm exec gql-tada doctor`:",
      error.message
    );
  } else {
    console.error("An unknown error occurred.");
  }
  process.exit(1);
}
