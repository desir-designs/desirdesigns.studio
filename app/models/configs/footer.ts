import meta from "@configs/meta"
import type { IConfiguration } from "@typings/Configuration"

export type FooterProps = {}


const footer: IConfiguration<FooterProps> = () => {

    const footerObject = {}

    return { ...footerObject } ?? null
}


export default footer