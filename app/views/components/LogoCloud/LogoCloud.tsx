import type { ComponentType } from "@typings/Component"
import type { LogoCloudProps } from "@typings/LogoCloud"


const LogoCloud: ComponentType<LogoCloudProps> = ({ title, heading, logos }: LogoCloudProps) => {

    const Header = () => {

        return (
            <div className="w-full p-6 md:w-1/2">
                <div className="max-w-sm">
                    <p className="inline-block mb-5 text-xl font-semibold text-black uppercase font-heading tracking-px">
                        {heading ? heading : "HEADING_NOT_FOUND"}
                    </p>

                    <h2 className="text-5xl font-semibold text-gray-900 font-heading sm:text-6xl">
                        {title ? title : "TITLE_NOT_FOUND"}
                    </h2>
                </div>
            </div>

        )
    }


    const Logos = () => {

        return (
            <div className="w-full p-6 md:w-1/2">
                <div className="flex flex-wrap justify-center -m-5 md:justify-start">
                    {
                        logos ? logos.map((logo, index) => {
                            return (
                                <div key={index} className="w-auto p-4 m-4 duration-500 ease-in-out bg-black cursor-pointer rounded-xl hover:rounded-full bg-opacity-20">
                                    <img className="h-64" loading="lazy" src={logo?.image?.src ?? "LOGO_NOT_FOUND"} alt={logo?.image?.alt ?? "ALT_NOT_FOUND"} />
                                </div>
                            )
                        }) : <>LOGOS_NOT_FOUND</>
                    }

                </div>
            </div>
        )
    }




    return (
        <section className="overflow-hidden py-28">
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap items-center -m-6">
                    <Header />
                    <Logos />
                </div>
            </div>
        </section>
    )
}

export default LogoCloud