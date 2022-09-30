import { IConfiguration } from "@typings/Configuration"
import type { MetaProps } from "@typings/Meta"

const meta: IConfiguration<MetaProps> = () => {

    const metaObject: MetaProps = {
        title: 'Desir Designs'
    }

    return metaObject ?? null
}

export default meta
