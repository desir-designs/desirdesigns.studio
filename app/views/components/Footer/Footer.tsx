import type { IComponent } from "@models/typings/Component";
import type { FooterProps } from "@models/typings/Footer";

const Footer: IComponent<FooterProps> = ({ ...props }: FooterProps) => {

    const { copyright, links } = props ?? null

    const CopyRight = () => {

        return (
            copyright ? <>
                <div className="border-b border-gray-100" />
                <p className="text-gray-100 text-center py-8 text-md">
                    {copyright ? copyright : "COPYRIGHT_NOT_FOUND"}
                </p>
            </> : <></>
        )
    }

    const Links = () => {
        return (
            links ? <ul className="flex flex-wrap justify-center -m-5 pb-8">
                {links.map((link, index) => {
                    return (
                        <li key={index} className="p-5">
                            <a
                                className="font-heading text-base text-gray-200 hover:text-blue-700"
                                href={link.url ? link.url : "LINK_URL_NOT_FOUND"}
                            >
                                {link.name}
                            </a>
                        </li>
                    )
                })}

            </ul> : <></>
        )
    }


    return (
        <section className="pt-24 overflow-hidden text-white">
            <div className="container mx-auto px-4">
                <img
                    className="mx-auto mb-16 h-16"
                    src="/assets/images/logo-transparent.png"
                    alt=""
                />
                <Links />
                <CopyRight />
            </div>
        </section>

    )
}

export default Footer