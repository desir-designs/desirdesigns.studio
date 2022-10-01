import type { IConfiguration } from "@typings/Configuration"
import type { LayoutProps } from "@typings/Layout"

import header from "@configs/header"
import footer from "@configs/footer"


const layout: IConfiguration<LayoutProps> = () => {

    const layoutObject = {
        header: {...header()},
        footer: {...footer()}
    }

    return { ...layoutObject } ?? null

}

export default layout