import meta from "@configs/meta"
import links from "@configs/links"


import type { IConfiguration } from "@typings/Configuration"
import type { FooterProps } from "@typings/Footer"

const footer: IConfiguration<FooterProps> = () => {

    const siteLinks = links().filter(link => link.type !== 'internal')

    const footerObject = {
        copyright: meta().copyright,
        email: meta().email,
        phone: meta().phone,
        links: siteLinks
    }

    return { ...footerObject } ?? null
}


export default footer