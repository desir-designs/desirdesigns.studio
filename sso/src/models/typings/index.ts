export type ImageProps = {
    src?: string,
    className?: string
  }
  export type FaviconProps = {
    image?: ImageProps,
    url?: string
  }
  export type AuthenticatorProps = {
    title?: string,
    subTitle?: string,
    favicon?: FaviconProps
  }
  