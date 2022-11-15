import type { ContentProps } from "@typings/Content";

export type ActionProps = {
    name?: string,
    url?: string
}

export type ContentRowProps = {
    title?: string,
    heading?: string,
    description?: string,
    action?: ActionProps,
    content?: ContentProps[]
}
