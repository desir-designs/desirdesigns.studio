export type LinkProps = {
    url?: string,
    name?: string,
    icon?: string,
}

export type FaviconProps = {
    src?: string,
    url?: string,
    alt?: string
}


export type CallToActionProps = {
    name?: string,
    url?: string,
}

export type HeaderProps = {
    [key: string]: any,
    favicon?: FaviconProps,
    cta?: CallToActionProps
    links?: LinkProps[],
}