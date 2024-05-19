ARG NODE_VERSION
FROM node:${NODE_VERSION} AS base
LABEL authors="nicholas5538"
LABEL version="1.0"

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable pnpm
COPY . /app
WORKDIR /app

FROM base AS dev
ENV NODE_ENV=development
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm i --frozen-lockfile

EXPOSE 5173
ENV PORT 5173

CMD ["pnpm", "run", "dev"]

FROM base AS build
FROM base AS build
ENV NODE_ENV=production
COPY --from=dev /app/node_modules ./node_modules

RUN pnpm run build

FROM base AS prod
EXPOSE 3000
ENV PORT 3000
ENV HOST "0.0.0.0"
ENV NODE_ENV=production

RUN deluser --remove-home node \
  && addgroup -S node --gid 1001 \
  && adduser -S -g node -u 1001 node \
  && chown -R node:node .

COPY --from=build --chown=node:node /app/.amplify-hosting .amplify-hosting
COPY --from=build /app/node_modules ./node_modules

USER node

CMD ["node", ".amplify-hosting/compute/default/server.js"]