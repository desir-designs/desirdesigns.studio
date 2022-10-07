import type { ImageProps } from "@typings/Image"
export type LinkProps = {
    name?: string,
    url?: string,
}


export type FaviconProps = {
    url?: string,
    image: ImageProps
}

export type FooterProps = {
    copyright?: string,
    email?: string,
    phone?: string,
    contact?: any[],
    favicon?: FaviconProps,
    impressum?: string,
    links?: LinkProps[]
}
