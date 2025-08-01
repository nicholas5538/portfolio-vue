import type { ResultOf } from "gql.tada";
import { useExecute } from "~/composables/execute";
import { GithubViewerQuery } from "~/graphql/query";
import type { AsyncDataOptions } from "#app";

export async function getGithubViewer(
  options?: AsyncDataOptions<ResultOf<typeof GithubViewerQuery>>
) {
  return await useExecute({
    key: "GitHub profile",
    query: GithubViewerQuery,
    options,
  });
}
