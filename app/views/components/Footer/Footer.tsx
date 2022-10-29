
import type { IComponent } from "@models/typings/Component"
import type { FooterProps } from "@models/typings/Footer"
import { SocialIcon } from 'react-social-icons';

const Footer: IComponent<FooterProps> = ({ socials, copyright, primaryLinks, secondaryLinks, email, phone, favicon, impressum }: FooterProps) => {


    const Copyright = () => {
        return (
            <p className="text-black text-md font-bold">
                {copyright ? copyright : "COPYRIGHT_NOT_FOUND"}
            </p>
        )
    }



    const Impressum = () => {

        return (
            <p className="mb-14 text-gray-800 text-lg">
                {impressum ? impressum : "IMPRESSUM_NOT_FOUND"}
            </p>

        )
    }

    const Socials = () => {

        return (
            <div className="flex flex-wrap items-center -ml-5">
                {
                    socials ? socials.map((social, index) => {
                        return (
                            <div key={index} className="w-auto p-2">
                                <SocialIcon bgColor="#0D15E3" url={social?.url} />
                            </div>
                        )
                    }) : <>SOCIALS_NOT_FOUND</>

                }

            </div>
        )
    }

    const SecondaryLinks = () => {
        return (
            secondaryLinks ? <div className="w-full md:w-1/2 lg:w-2/12 p-6">
                <div className="h-full">
                    <h3 className="mb-7 font-heading font-medium text-2xl text-black tracking-px">
                        {secondaryLinks.title}
                    </h3>
                    <ul>
                        {
                            secondaryLinks.links.map((link, index) => {
                                return (
                                    <li key={index} className="mb-4">
                                        <a
                                            className="font-heading font-medium text-xl transition-all   hover:bg-black hover:rounded-full py-2 px-1 ease-in text-black hover:text-blue-200"
                                            href={link?.url}
                                        >
                                            {link?.name}
                                        </a>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </div>
            </div> : <>SECONDARY_LINKS_NOT_FOUND</>

        )
    }

    const PrimaryLinks = () => {
        return (
            primaryLinks ? <div className="w-full md:w-1/2 lg:w-2/12 p-6">
                <div className="h-full">
                    <h3 className="mb-7 font-heading font-medium text-2xl text-black tracking-px">
                        {primaryLinks.title}
                    </h3>
                    <ul>
                        {
                            primaryLinks.links.map((link, index) => {
                                return (
                                    <li key={index} className="mb-4">
                                        <a
                                            className="font-heading font-medium text-xl transition-all   hover:bg-black hover:rounded-full py-2 px-1 ease-in text-black hover:text-blue-200"
                                            href={link?.url}
                                        >
                                            {link?.name}
                                        </a>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </div>
            </div> : <>PRIMARY_LINKS_NOT_FOUND</>
        )
    }

    const ContactLinks = () => {

        return (
            <div className="w-full md:w-1/2 lg:w-3/12 p-6">
                <div className="flex flex-col justify-between h-full">

                    <div>
                        <h3 className="mb-7 font-heading  font-medium text-2xl text-black tracking-px">
                            Contact Info
                        </h3>

                        <ul className="mb-6">
                            <li className="mb-4 font-heading font-medium text-xl text-black">
                                {email}
                            </li>
                            <li className="font-heading font-medium text-xl text-black">
                                {phone}
                            </li>
                        </ul>
                    </div>



                </div>
            </div>
        )
    }

    return (
        <section className="relative py-20 h-full m-0 w-full backdrop-blur-md overflow-hidden">

            <div className="relative z-10 container mx-auto px-4">
                <div className="flex flex-wrap -m-6">

                    <div className="w-full md:w-1/2 lg:w-5/12 p-6">
                        <div className="flex flex-col justify-between h-full max-w-sm">

                            <a href={favicon?.url ?? "#"} className="mb-11">
                                <img src={favicon?.image?.src ?? "#"}
                                    alt={favicon?.image?.alt ?? "IMAGE_NOT_FOUND"}
                                />
                            </a>

                            <div>
                                <Impressum />
                                <Copyright />
                            </div>
                        </div>
                    </div>
                    <PrimaryLinks />
                    <SecondaryLinks />
                    <ContactLinks />
                </div>
                <Socials />

            </div>


        </section>


    )
}

export default Footer