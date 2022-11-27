import type { ImageProps } from "@typings/Image"

export type LogoProps = {
    image?: ImageProps,
}

export type LogoCloudProps = {
    heading?: string,
    title?: string,
    logos?: LogoProps[]
}
