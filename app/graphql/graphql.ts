import { initGraphQLTada } from "gql.tada";
import type { introspection } from "~/graphql/types/github-graphql-env";

export const graphql = initGraphQLTada<{
  introspection: introspection;
}>();
