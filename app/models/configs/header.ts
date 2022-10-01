import type { IConfiguration } from "@typings/Configuration"

export type HeaderProps = {

}
const header: IConfiguration<HeaderProps> = () => {

    const headerObject = {
        links: [
            {
                name: 'Portfolio',
                url: '/portfolio',
            }
        ]
    }

    return { ...headerObject }
}



export default header