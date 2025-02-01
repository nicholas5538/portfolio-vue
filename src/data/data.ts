import type { ResultOf } from "gql.tada";
import { useExecute } from "~/composables/execute";
import { GithubViewerQuery } from "~/data/query";
import type { AsyncDataOptions } from "#app";

export async function getGithubViewer(
  options?: AsyncDataOptions<ResultOf<typeof GithubViewerQuery>>
) {
  return await useExecute({
    key: "Viewer",
    query: GithubViewerQuery,
    options,
  });
}
