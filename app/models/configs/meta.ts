import { IConfiguration } from "@typings/Configuration"
import type { MetaProps } from "@typings/Meta"

const meta: IConfiguration<MetaProps> = () => {

    const metaObject: MetaProps = {
        title: 'Desir Designs',
        pageTitle: 'Home',
        phone: '678-826-7321',
        email: 'joshua@informandinspire.llc',
        copyright: '©️ 2022 Desir Designs. All Rights Reserved.'
    }

    return { ...metaObject } ?? null
}

export default meta
