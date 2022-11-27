import type { ComponentType } from "@typings/Component"
import type { LogoCloudProps } from "@typings/LogoCloud"


const LogoCloud: ComponentType<LogoCloudProps> = ({ title, heading, logos }: LogoCloudProps) => {

    const Header = () => {

        return (
            <div className="w-full md:w-1/2 p-6">
                <div className="max-w-sm">
                    <p className="mb-5 text-xl inline-block font-heading font-semibold text-black uppercase tracking-px">
                        {heading ? heading : "HEADING_NOT_FOUND"}
                    </p>

                    <h2 className="font-heading font-semibold text-5xl sm:text-6xl text-gray-900">
                        {title ? title : "TITLE_NOT_FOUND"}
                    </h2>
                </div>
            </div>

        )
    }


    const Logos = () => {

        return (
            <div className="w-full md:w-1/2 p-6">
                <div className="flex flex-wrap justify-center md:justify-start -m-5">
                    {
                        logos ? logos.map((logo, index) => {
                            return (
                                <div key={index} className="w-auto p-5 bg-black bg-opacity-50 rounded m-4">
                                    <img className="h-32" loading="lazy" src={logo?.image?.src ?? "LOGO_NOT_FOUND"} alt={logo?.image?.alt ?? "ALT_NOT_FOUND"} />
                                </div>
                            )
                        }) : <>LOGOS_NOT_FOUND</>
                    }

                </div>
            </div>
        )
    }




    return (
        <section className="py-28 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center -m-6">
                    <Header />
                    <Logos />
                </div>
            </div>
        </section>
    )
}

export default LogoCloud