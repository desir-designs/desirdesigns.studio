import type { IComponent } from "@models/typings/Component"
import type { ConactFormProps } from "@typings/ContactForm"


const ContactForm: IComponent<ConactFormProps> = ({ title, description, address, socials, email, phone }: ConactFormProps) => {


    const Address = () => {

        return (
            <div className="w-full md:w-1/3 p-6">
                <div className="md:max-w-xs">
                    <h3 className="mb-4 font-heading font-medium text-2xl text-black">
                        {address ? address.country : "Country"}
                    </h3>
                    <p className="text-lg text-black">
                        {address ? address.street : "Street"}
                    </p>
                </div>
            </div>
        )
    }


    const Phone = () => {
        return (
            phone ? <h3 className="font-heading font-medium text-2xl text-black">
                {phone ? phone : "PHONE_NOT_FOUND"}
            </h3> : <></>
        )
    }


    const Email = () => {
        return (
            email ? <h3 className="mb-2.5 font-heading font-medium text-2xl text-black">
                {email ? email : "EMAIL_NOT_FOUND"}
            </h3> : <></>
        )
    }


    const Header = () => {
        return (
            title && description ?

                <div className="md:max-w-lg">
                    <h2 className="mb-7 font-heading font-semibold text-6xl sm:text-8xl xl:text-10xl text-black">
                        {title ? title : "TITLE_NOT_FOUND"}
                    </h2>
                    <p className="text-black text-lg">
                        {description ? description : "DESCRIPTION_NOT_FOUND"}
                    </p>
                </div>
                : <></>
        )
    }

    const SocialLinks = () => {

        return (
            socials ? <ul>
                {
                    socials.map((social, index) => {
                        return (
                            <li key={index} className="mb-6 text-black hover:text-gray-300 text-2xl">
                                <a href={social.url}>{social.name}</a>
                            </li>
                        )
                    })
                }

            </ul> : <></>
        )
    }


    return (

        <section className="relative pt-32 pb-28 overflow-hidden">

            <img
                className="absolute top-0 left-0"
                src="/assets/images/logo.svg"
                alt=""
            />

            <div className="relative z-10 container mx-auto px-4">
                <div className="flex flex-wrap -m-6">

                    <div className="w-full md:w-1/2 p-6">
                        <Header />
                    </div>


                    <div className="w-full md:w-1/2 p-6">
                        <div className="md:max-w-md ml-auto">
                            <Phone/>
                            <Email/>
                            <Address/>
                            <SocialLinks />
                        </div>
                    </div>

                </div>
            </div>
        </section>


    )
}

export default ContactForm