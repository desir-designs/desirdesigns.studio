import type { CallToActionProps } from "@typings/CallToAction"
import type { ImageProps } from "@typings/Image"

export type LinkProps = {
    url?: string,
    name?: string,
    icon?: string,
}

export type FaviconProps = {
    image?: ImpageProps,
    url?: string,
}

export type HeaderProps = {
    favicon?: FaviconProps,
    links?: LinkProps[],
}