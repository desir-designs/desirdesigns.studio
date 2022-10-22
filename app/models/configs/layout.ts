import { default as footerConfig } from "@configs/footer"
import { default as headerConfig } from "@configs/header"
import { default as menuConfig } from "@configs/menu"

import type { LayoutProps } from "@typings/Layout"

const layout = ({ header, footer, menu, metaData }: LayoutProps) => {

    const defaultObject: LayoutProps = {
        header: headerConfig({}),
        footer: footerConfig({}),
        menu: menuConfig({}),
        metaData: {}

    }

    const layoutObject: LayoutProps = {
        header: headerConfig({ ...header }),
        footer: footerConfig({ ...footer }),
        menu: menuConfig({ ...menu }),
        metaData: metaData ?? defaultObject?.metaData
    }

    return { ...layoutObject } as LayoutProps ?? null

}

export default layout