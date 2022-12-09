

import type { HeaderProps } from "@typings/Header"

const header = ({ favicon, links, banner }: HeaderProps) => {

    const defaultObject = {
        favicon: [],
        links: [],
        banner: {
            message: "[Server]: BANNER_MESSAGE_PROP_FAILED"
        }
    }

    const headerObject = {
        favicon: favicon,
        links: links ?? defaultObject?.links,
        banner: banner ??defaultObject?.banner
    }

    return { ...headerObject }
}



export default header