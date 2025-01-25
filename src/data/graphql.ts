import { initGraphQLTada } from "gql.tada";
import type { introspection } from "./types/github-graphql-env";

export const graphql = initGraphQLTada<{
  introspection: introspection;
}>();
