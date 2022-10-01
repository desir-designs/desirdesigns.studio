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

export type HeaderProps = {
    favicon?: FaviconProps,
    links?: LinkProps[],
}