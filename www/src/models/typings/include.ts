import type { FaviconProps, LinkProps, CallToActionProps } from "./index"

export type FooterProps = {
  favicon?: FaviconProps,
  links?: LinkProps[],
  copyright?: string,
  cta?: CallToActionProps
};