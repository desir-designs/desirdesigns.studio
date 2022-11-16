import type { ImageProps } from "@typings/Image"

export type ContentProps = {
    cover?: ImageProps,
    date?: string,
    title?: string,
    url?: string,
    description?: string,
    heading?: string,
    tags?: any[]
}