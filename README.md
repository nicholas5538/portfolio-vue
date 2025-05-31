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

- Using [dotenv-vault](https://github.com/dotenv-org/dotenv-vault#pull "dotenv-vault GitHub repository"), please
  request `vault_id` from [@nicholas5538](https://github.com/nicholas5538) (recommended)

```zsh
npx dotenv-vault@latest new <vault_id>
npx dotenv-vault@latest pull development .env
```

- OR Create a `.env` file to store environment variables, please request secret keys
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
docker build --build-arg="NODE_VERSION=lts-alpine" --compress -t <image name> --target dev .
docker run -d --env-file .env -p 5173:5173 -v .:/app -v /app/node_modules --name <container name> <image name>
```

- With **_pnpm_**

```sh
pnpm run dev
```

The `dev` command will start the application in your local environment.

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
