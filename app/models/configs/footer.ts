import meta from "@configs/meta"
import links from "@configs/links"


import type { IConfiguration } from "@typings/Configuration"
import type { FooterProps } from "@typings/Footer"

const footer: IConfiguration<FooterProps> = () => {

    const siteLinks = links().filter(link => link.type !== 'internal')

    const { copyright, email, phone, favicon, impressum } = meta()


    const footerObject = {
        copyright,
        email,
        phone,
        favicon,
        impressum,
        links: siteLinks
    }

    return { ...footerObject } ?? null
}


export default footer