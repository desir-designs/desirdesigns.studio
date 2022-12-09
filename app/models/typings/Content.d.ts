import type { ImageProps } from "@typings/Image"
import { CallToActionProps } from "@typings/CallToAction"

export type ContentProps = {
    cover?: ImageProps,
    date?: string,
    title?: string,
    url?: string,
    cta?: CallToActionProps,
    description?: string,
    heading?: string,
    tags?: any[]
}