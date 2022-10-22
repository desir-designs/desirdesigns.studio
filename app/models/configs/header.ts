

import type { HeaderProps } from "@typings/Header"

const header = ({ favicon, links }: HeaderProps) => {


    const defaultObject = {
        favicon: []
    }


    const headerObject = {
        favicon: {},
        links: links
    }

    return { ...headerObject } ?? null
}



export default header