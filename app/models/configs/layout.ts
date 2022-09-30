import type { IConfiguration } from "@typings/Configuration"
import type { LayoutProps } from "@typings/Layout"

const layout: IConfiguration<LayoutProps> = () => {

    const layoutObject = {
        header: {},
        footer: {}
    }

    return { ...layoutObject } ?? null

}