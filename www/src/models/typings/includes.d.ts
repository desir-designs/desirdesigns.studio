import type { FaviconProps } from "@typings/favicon";
import type { LinkProps } from "@typings/link";
import type { FaviconProps } from "@typings/favicon";

export type FooterProps = {
  favicon?: FaviconProps;
  copyright?: string | string[];
};

export type NavBarProps = {
  links?: LinkProps[];
  favicon?: FaviconProps;
};
