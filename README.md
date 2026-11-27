# [My Portfolio site](https://www.nicholasyong.dev "My portfolio page")

![NuxtJS](https://img.shields.io/badge/nuxt.js-000000?style=for-the-badge&logo=nuxtdotjs&logoColor=white)

[![Node Version](https://img.shields.io/badge/Node-LTS-brightgreen.svg)](https://github.com/nicholas5538/portfolio/blob/main/.nvmrc)

## 💪 Objective

It's a great opportunity to showcase my frontend skills, and to explore new frameworks and libraries such as **[Tailwind CSS](https://tailwindcss.com "tailwindcss homepage")** and **[Nuxt.js](https://nuxt.com/ "Nuxt.js homepage")**.

## Table Of Contents

- [Getting Started](#getting-started)
  - [Environment Setup](#environment-setup)
    - [How to run the application](#how-to-run-the-application)
  - [Repository Setup](#repository-setup)
    - [Obtaining environment variables](#obtaining-environment-variables)
    - [GraphQL setup](#graphql-setup)
- [Developing](#developing)
- [Developing with Claude Code](#developing-with-claude-code)
- [Frequently Used Scripts](#frequently-used-scripts)
- [Additional Documentations](#additional-documentations)

### Getting Started

#### Environment Setup

##### How to run the application

1. Install [Docker Desktop](https://www.docker.com/products/docker-desktop/)

2. OR with package manager **[pnpm](https://pnpm.io/installation)**
   - Install LTS node version.

   > 💁 **Tip:** You can use [nvm](https://github.com/nvm-sh/nvm "nvm repo") to easily manage multiple versions of node.
   > Once installed, run `nvm use` in the project directory.
   - Install [pnpm](https://pnpm.io/installation)

   > 💁 `corepack enable pnpm` (Installed Node.js without Homebrew)

   > 💁 `brew install corepack` (Installed Node.js using Homebrew)

### Repository Setup

Once you have your environment setup, you can clone the repository.

```zsh
git clone https://github.com/nicholas5538/fp-voucher-BE.git
cd fp-voucher-BE
```

#### Obtaining environment variables

- Create a `.env.local` and/or `.env.production` file to store environment variables, please request secret keys
  from [@nicholas5538](https://github.com/nicholas5538 "nicholas5538 GitHub profile").

```sh
NUXT_CLOUDFLARE_R2_ACCESS_KEY=<Insert access key here>
NUXT_CLOUDFLARE_R2_ACCOUNT_ID=<Insert account ID here>
NUXT_CLOUDFLARE_R2_REGION=<Insert region here>
NUXT_CLOUDFLARE_R2_SECRET_ACCESS_KEY=<Insert secret access key here>
NUXT_GITHUB_SECRET=<Insert token here>
```

#### GraphQL setup

1. Install the GraphQL plugins for your preferred IDE

- [Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql "VSCode GraphQL feature support")
- [JetBrains IDE](https://plugins.jetbrains.com/plugin/8097-graphql "JetBrains IDE GraphQL feature support")

2. Generate the GraphQL schema and its relevant type files for GraphQL TypeScript support with the following command(s):

```
pnpm run graphql
# OR use this command if you prefer using node.
# node version has to be >= 22.6.0 due to the --experimental-strip-types flag
node --env-file=.env --experimental-strip-types generate-graphql-files.ts
```

### Developing

Once you have [set up the repository](#repo-setup), you're ready to start developing. Starting the development environment is managed by the following command(s).

- With **Docker Compose or Docker** (recommended)

```sh
# With Docker compose, you're able
# to see live changes after refreshing
docker compose up development -d --build

# Or build your own image
docker build --build-arg="NODE_VERSION=lts-alpine" -t <image name> --target development .
docker run -d --rm --env-file .env -p 5173:5173 \
  --mount type=bind,source="$(pwd)",target=/portfolio-vue \
  --mount type=volume,target=/portfolio-vue/node_modules \
  <image>
```

- With **_pnpm_**

```sh
pnpm run dev
```

The `dev` command will start the application in your local environment.

### Developing with Claude Code

This repository ships with a shared [Claude Code](https://code.claude.com/docs "Claude Code documentation") configuration.

#### Unit test hook

The [hook](.claude/hooks/run-unit-tests.ts) registered in [`.claude/settings.json`](.claude/settings.json) runs `pnpm run test` when Claude finishes a turn in which the watched code changed. It requires installed dependencies and a Node.js version that Vitest supports (`^22.12.0 || ^24.0.0 || >=26.0.0`).

- **Watched files:** `.ts`, `.js` and `.vue` files under `app/` and `server/`, except `app/tests/e2e/`, `app/coverage/` and `app/app.config.ts`. Root-level files, such as `package.json`, are not watched.
- **Failing tests:** Claude is asked once to fix them. If they still fail, you get a warning.
- **Tests that cannot run:** missing dependencies or `pnpm`, and runs longer than 120 seconds, only produce a warning.

> 💁 **Tip:** run `/hooks` in Claude Code to check that the hooks are loaded.

#### Agent skills

[`CLAUDE.md`](CLAUDE.md) and [`docs/agents/`](docs/agents) tell [Matt Pocock's skills](https://github.com/mattpocock/skills "mattpocock/skills repo") where issues are tracked, which triage labels to use and where domain docs live. The skills are optional and are installed separately as a Claude Code plugin.

### Frequently Used Scripts

In addition to the `pnpm run dev` command, there are other scripts available in the [package.json](https://github.com/nicholas5538/portfolio-vue/blob/main/package.json#L6-L33). Some of the most common you might get to use are:

- `pnpm run test` - Runs unit tests.

  > 💁 **Tip:** use `pnpm run test:watch` or `pnpm run test:cov` to explicitly specify the desired mode

- `pnpm run test-e2e` - Runs E2E tests.

  > 💁 **Tip:** use `pnpm run test-e2e:desktop` or `pnpm run test:mobile` to explicitly specify the desired viewport

- `pnpm run format` - Check prettier formatting through all the codes

  > 💁 **Tip:** use `pnpm run format:fix` to run auto prettier formatting across all the codes

- `pnpm run lint` - Runs TS linter through all the codes

## Additional Documentations

- [Nuxt.js documentation](https://nuxt.com/docs/getting-started/installation "Nuxt.js documentation")
- [Tailwind CSS styling](https://tailwindcss.com/docs/installation "Tailwind CSS documentation")
- [Vue.js documentation](https://vuejs.org/guide/introduction.html "Vue 3 documentation")
