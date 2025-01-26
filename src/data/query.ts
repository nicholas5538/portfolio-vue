import { graphql } from "~/data/graphql";

export const GithubViewerQuery = graphql(`
  query GithubViewer {
    viewer {
      avatarUrl
      bio
      email
      followers {
        totalCount
      }
      following {
        totalCount
      }
      location
      login
      name
      url
    }
  }
`);
