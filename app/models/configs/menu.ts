import type { DrawerMenuProps } from "@models/typings/DrawerMenu"


const menu = ({ links }: DrawerMenuProps) => {

    const defaultObject = {
        links: []

    }


    const menuObject = {
        links: links ?? defaultObject?.links

    }

    return { ...menuObject } as DrawerMenuProps ?? null
}

export default menu