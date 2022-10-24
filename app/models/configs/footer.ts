

import type { FooterProps } from "@typings/Footer"

const footer = ({ copyright, email, phone, contact, favicon, impressum, links }: FooterProps) => {


    const defaultObject = {
        copyright: "COPYRIGHT_NOT_FOUND",
        email: "EMAIL_NOT_FOUND",
        phone: "PHONE_NOT_FOUND",
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
        favicon: favicon ?? defaultObject?.favicon
    }

    return { ...footerObject } ?? null
}


export default footer