/* eslint-disable */
/* prettier-ignore */
import type { TadaDocumentNode, $tada } from 'gql.tada';

declare module 'gql.tada' {
 interface setupCache {
    "\n  query GithubViewer {\n    viewer {\n      avatarUrl\n      bio\n      email\n      followers {\n        totalCount\n      }\n      following {\n        totalCount\n      }\n      location\n      login\n      name\n      url\n    }\n  }\n":
      import("/Users/nick/IdeaProjects/portfolio-vue/node_modules/.pnpm/gql.tada@1.8.12_@gql.tada+vue-support@1.0.1_typescript@5.8.3__graphql@16.11.0_typescript@5.8.3/node_modules/gql.tada/dist/gql-tada").TadaDocumentNode<{ viewer: { avatarUrl: unknown; bio: string | null; email: string; followers: { totalCount: number; }; following: { totalCount: number; }; location: string | null; login: string; name: string | null; url: unknown; }; }, {}, void>;
  }
}
