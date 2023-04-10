import type { FaviconProps } from "@typings/favicon";
import type { LinkProps } from "@typings/link";
import type { FaviconProps } from "@typings/favicon";
import type { CallToActionProps } from "@typings/cta";

export type FooterProps = {
  favicon?: FaviconProps;
  copyright?: string | string[];
  email?: string;
  links?: LinkProps[];
};

export type NavBarProps = {
  links?: LinkProps[];
  favicon?: FaviconProps;
  cta?: CallToActionProps;
};
