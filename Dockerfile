ARG NODE_VERSION=lts-alpine
FROM node:${NODE_VERSION} AS base
LABEL authors="nicholas5538"
LABEL version="1.0"

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV HUSKY="0"
RUN corepack enable pnpm
WORKDIR /portfolio-vue
COPY . /portfolio-vue

FROM base AS development
ENV NODE_ENV=development
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm i --frozen-lockfile

EXPOSE 5173
ENV PORT=5173

CMD ["pnpm", "run", "dev"]

FROM base AS build
ENV NODE_ENV=production
COPY --from=development /portfolio-vue/node_modules /portfolio-vue/node_modules

RUN pnpm run build

FROM base AS production
EXPOSE 3000
ENV PORT=3000
ENV HOST="0.0.0.0"
ENV NODE_ENV=production

RUN deluser --remove-home node \
  && addgroup -S node --gid 1001 \
  && adduser -S -g node -u 1001 node \
  && chown -R node:node .

COPY --from=development /portfolio-vue/node_modules /portfolio-vue/node_modules
COPY --from=build --chown=node:node /portfolio-vue/.amplify-hosting /portfolio-vue/.amplify-hosting

USER node

WORKDIR /portfolio-vue/.amplify-hosting/compute/default

CMD ["node", "server.js"]