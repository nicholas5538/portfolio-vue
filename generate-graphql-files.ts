import process from "node:process";
import console from "node:console";
import {
  ExecaError,
  type ExecaMethod,
  type TemplateExpression,
  execa as execa_,
} from "execa";

const CONFIG = {
  accessToken: process.env.NUXT_GITHUB_SECRET,
  graphqlUrl: "https://api.github.com/graphql",
  schemaFile: "./src/data/types/github-schema.graphql",
};

if (!CONFIG.accessToken) {
  console.error(
    "\x1b[31m❌ $NUXT_GITHUB_SECRET is not set in the .env file\x1b[0m"
  );
  process.exit(1);
}

const execa: ExecaMethod = execa_({
  preferLocal: true,
  reject: true,
  stdio: "pipe",
});
async function pnpmCommand(
  args: TemplateExpression | readonly string[],
  successMessage: string
) {
  try {
    const { stdout, stderr } = await execa`pnpm run ${args}`;

    if (stdout) console.info(stdout);
    if (stderr) console.error(`\x1b[31m❌${stderr} \x1b[0m\n`);
    else {
      console.info(`\x1b[32m✅ ${successMessage} \x1b[0m\n`);
    }
  } catch (error) {
    if (error instanceof ExecaError) {
      throw new Error(error.message);
    }
    throw new Error("An unknown error occurred.");
  }
}

console.info(
  "\x1b[33m⏳ Generating the schema from the GitHub GraphQL API...\x1b[0m"
);

await pnpmCommand(
  [
    "graphql:schema",
    CONFIG.graphqlUrl,
    "--output",
    CONFIG.schemaFile,
    "--header",
    `Authorization: Bearer ${CONFIG.accessToken}`,
  ],
  "GitHub GraphQL introspection is successful."
);

console.info(
  "\x1b[33m⏳ Generating the necessary gql.tada output files...\x1b[0m"
);
const [outputResult, turboResult] = await Promise.allSettled([
  pnpmCommand(
    "graphql:type",
    "gql.tada output typings file has been generated."
  ),
  pnpmCommand(
    "graphql:cache",
    "The cache for all GraphQL document types has been generated."
  ),
]);

if (outputResult.status === "rejected") {
  console.error(`\x1b[31m❌${outputResult.reason} \x1b[0m\n`);
  process.exit(1);
}

// Please run pnpm graphql:cache if this fails, development can still work without the cache file
if (turboResult.status === "rejected") {
  console.error(`\x1b[31m❌${turboResult.reason} \x1b[0m\n`);
}

console.info("\x1b[33m⏳ Checking the GraphQL configuration...\x1b[0m");
await pnpmCommand(
  "graphql:doctor",
  "No mistakes found in the GraphQL configuration and schema."
);
