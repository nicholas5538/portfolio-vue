import type { ComponentPublicInstance } from "vue";

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
