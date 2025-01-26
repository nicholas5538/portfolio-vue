#!/bin/bash

if [ -f .env ]; then
  source .env
fi

if [ -z "${NUXT_GITHUB_SECRET}" ]; then
  echo "Error: Required environment variable is not set, \
   please check whether NUXT_GITHUB_SECRET is set"
  exit 1
fi

gql.tada generate-schema "https://api.github.com/graphql" \
  --header "Authorization: Bearer ${NUXT_GITHUB_SECRET}" \
  -o ./src/data/types/github-schema.graphql

gql.tada generate-output
gql.tada turbo
gql.tada doctor
