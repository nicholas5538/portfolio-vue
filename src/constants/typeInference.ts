import type { ComponentPublicInstance } from "vue";

export interface gitUserSchema {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string | null;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  susbscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string | null;
  company: string | null;
  location: string | null;
  email: string | null;
  hireable: boolean | null;
  blog: string | null;
  bio: string | null;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export type TElement = Element | ComponentPublicInstance | null | undefined;

export type TIcon = {
  icon: string;
  width?: number;
  height?: number;
};

export type IconNames =
  | "externalLink"
  | "github"
  | "instagram"
  | "linkedin"
  | "location"
  | "mail"
  | "moon"
  | "resume"
  | "profile"
  | "sun"
  | "youtube";
