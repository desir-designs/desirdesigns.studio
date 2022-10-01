import type { IConfiguration } from "@typings/Configuration"
import type { ImageProps } from "@typings/Image"


const images: IConfiguration<ImageProps[]> = () => {

    const imageData = [
        {
            name: 'logo-transparent',
            alt: 'desir-designs-logo',
            src: '/assets/images/logo-transparent.png',
        }
    ]

    return imageData ?? []
}


export default images