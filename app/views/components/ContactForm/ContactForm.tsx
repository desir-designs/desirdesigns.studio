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

        <section className="pt-24 pb-32 overflow-hidden">
            <div className="container mx-auto px-4">
                <Header />
                <div className="flex flex-wrap -m-6">
                    <Address />
                    <div className="w-full md:w-1/3 p-6">
                        <div className="md:max-w-xs">
                            <Email />
                            <Phone />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ContactForm