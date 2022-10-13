import { IConfiguration } from "@typings/Configuration"
import type { MetaProps } from "@typings/Meta"

const meta: IConfiguration<MetaProps> = () => {

    const metaObject: MetaProps = {
        title: 'Desir Designs',
        pageTitle: 'Home',
        phone: '678-826-7321',
        email: 'joshua@informandinspire.llc',
        impressum: 'Measure twice, cut once',
        copyright: '©️ 2022 Desir Designs. All Rights Reserved.',
        favicon: {
            url: 'https://desir-designs.vercel.app/',
            image: {
                src: 'https://desir-designs.vercel.app/favicon.ico',
                alt: 'Desir Designs Favicon'
            }
        }
    }

    return { ...metaObject } ?? null
}

export default meta
