/* eslint-disable */
/* prettier-ignore */
import type { TadaDocumentNode, $tada } from 'gql.tada';

declare module 'gql.tada' {
 interface setupCache {
    "\n  query GithubViewer {\n    viewer {\n      avatarUrl\n      bio\n      email\n      followers {\n        totalCount\n      }\n      following {\n        totalCount\n      }\n      location\n      login\n      name\n      url\n    }\n  }\n":
      TadaDocumentNode<{ viewer: { avatarUrl: unknown; bio: string | null; email: string; followers: { totalCount: number; }; following: { totalCount: number; }; location: string | null; login: string; name: string | null; url: unknown; }; }, {}, void>;
  }
}
