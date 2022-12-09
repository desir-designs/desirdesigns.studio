import type { BannerProps } from "@typings/Banner"
import type { LinkProps } from "@typings/Link"


export type HeaderProps = {
    favicon?: FaviconProps,
    links?: LinkProps[],
    banner?: BannerProps
}