import { useExecute } from "~/composables/execute";
import { GithubViewerQuery } from "~/data/query";
import type { AsyncDataOptions } from "#app";

import type { ResultOf } from "gql.tada";

export async function getGithubViewer(
  options?: AsyncDataOptions<ResultOf<typeof GithubViewerQuery>>
) {
  return await useExecute({
    key: "Viewer",
    query: GithubViewerQuery,
    options,
  });
}
