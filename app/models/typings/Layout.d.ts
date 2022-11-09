import type { HeaderProps } from "@typings/Header"
import type { FooterProps } from "@typings/Footer"
import type { DrawerMenuProps } from "@typings/DrawerMenu"
import type { MetaProps } from "@typings/Menu"

export type LayoutProps = {
    header?: HeaderProps,
    menu?: DrawerMenuProps,
    footer?: FooterProps,
    metaData?: MetaProps,
    children?: any,
}
