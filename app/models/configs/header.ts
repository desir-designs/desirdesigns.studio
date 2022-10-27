

import type { HeaderProps } from "@typings/Header"

const header = ({ favicon, links }: HeaderProps) => {

    const defaultObject = {
        favicon: [],
        links: []
    }

    const headerObject = {
        favicon: favicon,
        links: links ?? defaultObject?.links
    }

    return { ...headerObject }
}



export default header