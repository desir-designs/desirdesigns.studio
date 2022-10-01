
import links from "@configs/links"
import images from "@configs/images"

import type { IConfiguration } from "@typings/Configuration"
import type { HeaderProps } from "@typings/Header"


const header: IConfiguration<HeaderProps> = () => {

    const logoTransparent = images().find(image => image.name === 'logo-transparent')
    const homeLinkRelative = links().find(link => link.name === 'Home')

    const headerObject = {
        links: [...links()],
        favicon: { ...logoTransparent, url: homeLinkRelative.url }
    }

    return { ...headerObject }
}



export default header