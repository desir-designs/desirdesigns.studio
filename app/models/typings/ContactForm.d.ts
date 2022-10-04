
export type SocialProps = {
    name?: string,
    url:? string,
    icon?: string
}


export type ConactFormProps = {
    title?: string,
    description?: string,
    address?: any,
    email?: string,
    phone?: string,
    socials: SocialProps[]
}
