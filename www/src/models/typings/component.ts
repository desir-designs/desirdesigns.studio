
export type FaviconProps = {
    url?: string;
    image?: ImageProps;
};

export type ImageProps = {
    src?: string;
    alt?: string;
};

export type LinkProps = { url?: string, name?: string };

export type ActionType = LinkProps | any

export type CallToActionProps = any;