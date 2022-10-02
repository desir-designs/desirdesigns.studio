import type { IConfiguration } from "@typings/Configuration"
import type { ImageProps } from "@typings/Image"


const images: IConfiguration<ImageProps[]> = () => {

    const imageData = [
        {
            name: 'logo-transparent',
            alt: 'desir-designs-logo',
            src: '/assets/images/logo.svg',
        },
        {
            name: 'logo-alt',
            alt: 'desir-designs-logo',
            src: '/assets/images/logo-alt.png',
        }
    ]

    return imageData ?? []
}


export default images