

import type { FooterProps } from "@typings/Footer"

const footer = ({ copyright, email, phone, }: FooterProps) => {


    const defaultObject = {}

    const footerObject = {
        copyright: copyright ?? defaultObject?.copyright,
        email,
        phone,
    }

    return { ...footerObject } ?? null
}


export default footer