import type { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { print } from "graphql";
import type { AsyncDataOptions } from "#app";

type ExecuteParams<TResult, TVariables> = {
  key: string;
  query: TypedDocumentNode<TResult, TVariables>;
  variables?: TVariables;
  options?: AsyncDataOptions<TResult>;
};

export async function useExecute<TResult, TVariables>({
  key,
  query,
  variables,
  options,
}: ExecuteParams<TResult, TVariables>) {
  const {
    public: { githubBaseUrl },
    githubSecret,
  } = useRuntimeConfig();

  return useAsyncData<{ data: TResult }>(key, () =>
    $fetch(githubBaseUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${githubSecret}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: print(query),
        variables,
      }),
      ...options,
    })
  );
}
