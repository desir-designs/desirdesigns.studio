import type { IComponent } from "@models/typings/Component"
import type { ConactFormProps } from "@typings/ContactForm"


const ContactForm: IComponent<ConactFormProps> = ({ ...props }: ConactFormProps) => {

    const { title, description, email, phone } = props ?? null

    const Address = () => {

        return (
            <div className="w-full md:w-1/3 p-6">
                <div className="md:max-w-xs">
                    <h3 className="mb-4 font-heading font-medium text-2xl text-gray-200">
                        Canada
                    </h3>
                    <p className="text-lg text-gray-200">
                        2972 Westheimer Rd. Santa Ana, Illinois 85486, Canada
                    </p>
                </div>
            </div>
        )
    }


    const Phone = () => {
        return (
            phone ? <h3 className="font-heading font-medium text-2xl text-gray-200">
                {phone ? phone : "PHONE_NOT_FOUND"}
            </h3> : <></>
        )
    }


    const Email = () => {
        return (
            email ? <h3 className="mb-2.5 font-heading font-medium text-2xl text-gray-200">
                {email ? email : "EMAIL_NOT_FOUND"}
            </h3> : <></>
        )
    }


    const Header = () => {
        return (
            title && description ? <div className="md:max-w-lg mb-20 md:mb-40">
                <h2 className="mb-5 font-heading font-semibold text-6xl sm:text-7xl text-gray-100">
                    {title ? title : "TITLE_NOT_FOUND"}
                </h2>
                <p className="text-gray-200 text-lg">
                    {description ? description : "DESCRIPTION_NOT_FOUND"}
                </p>
            </div> : <></>
        )
    }



    return (

        <section className="relative pt-32 pb-28 overflow-hidden">
            <img
                className="absolute top-0 left-0"
                src="gradia-assets/elements/contact/radial3.svg"
                alt=""
            />
            <div className="relative z-10 container mx-auto px-4">
                <div className="flex flex-wrap -m-6">
                    <div className="w-full md:w-1/2 p-6">
                        <div className="md:max-w-lg">
                            <h2 className="mb-7 font-heading font-semibold text-6xl sm:text-8xl xl:text-10xl text-white">
                                Want to get in touch with us?
                            </h2>
                            <p className="text-gray-400 text-lg">
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                                sint. Velit officia consequat duis enim velit mollit.
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 p-6">
                        <div className="md:max-w-md ml-auto">
                            <p className="mb-4 max-w-max text-transparent bg-clip-text bg-gradient-cyan2 font-heading text-lg font-semibold">
                                Send us a mail
                            </p>
                            <p className="mb-16 text-white text-2xl">hello@gradia.io</p>
                            <p className="mb-4 max-w-max text-transparent bg-clip-text bg-gradient-cyan2 font-heading text-lg font-semibold">
                                Follow us
                            </p>
                            <ul>
                                <li className="mb-6 text-white hover:text-gray-300 text-2xl">
                                    <a href="#">Facebook</a>
                                </li>
                                <li className="mb-6 text-white hover:text-gray-300 text-2xl">
                                    <a href="#">Twitter</a>
                                </li>
                                <li className="mb-6 text-white hover:text-gray-300 text-2xl">
                                    <a href="#">Linkedin</a>
                                </li>
                                <li className="mb-6 text-white hover:text-gray-300 text-2xl">
                                    <a href="#">Instagram</a>
                                </li>
                                <li className="text-white hover:text-gray-300 text-2xl">
                                    <a href="#">Pinterest</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default ContactForm