

import type { FooterProps } from "@typings/Footer"

const footer = ({ copyright, email, phone, socials, favicon, impressum, secondaryLinks, primaryLinks }: FooterProps) => {


    const defaultObject = {
        copyright: "COPYRIGHT_NOT_FOUND",
        email: "EMAIL_NOT_FOUND",
        socials: [{ url: "URL_NOT_FOUND", name: "NAME_NOT_FOUND" }],
        phone: "PHONE_NOT_FOUND",
        primaryLinks: {},
        secondaryLinks: {},
        impressum: "IMPRESSUM_NOT_FOUND",
        favicon: {
            image: {
                src: "FAVICON_NOT_FOUND"
            }
        }
    }

    const footerObject = {
        copyright: copyright ?? defaultObject?.copyright,
        email: email ?? defaultObject?.email,
        phone: phone ?? defaultObject?.phone,
        socials: socials ?? defaultObject?.socials,
        primaryLinks: primaryLinks ?? defaultObject?.primaryLinks,
        secondaryLinks: secondaryLinks ?? defaultObject?.secondaryLinks,
        impressum: impressum ?? defaultObject?.impressum,
        favicon: favicon ?? defaultObject?.favicon
    }

    return { ...footerObject } ?? null
}


export default footer