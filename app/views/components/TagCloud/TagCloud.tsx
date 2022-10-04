import { IComponent } from "@models/typings/Component";
import { Fade } from "react-awesome-reveal";


export type TagProps = {
    name?: string,
    icon?: string,
    url?: string,
}

export type CloudProps = {
    
    tags?: TagProps[]
}

export type TagCloudProps = {
    title?: string,
    heading?: string,
    clouds?: any
}


const TagCloud: IComponent<TagCloudProps> = ({ title, heading, clouds }: TagCloudProps) => {


    const Header = () => {

        return (
            <div className="mb-16 max-w-md mx-auto">
                <h2 className="mb-5 font-heading font-bold text-center text-5xl sm:text-6xl text-gray-900">
                    {title ? title : "Tag Cloud"}
                </h2>
                <p className="text-gray-600 text-center">
                    {heading ? heading : "HEADING_NOT_FOUND"}
                </p>
            </div>

        )


    }
    return (
        <section className="relative pt-20 pb-32 overflow-hidden">


            <div className="container mx-auto px-4">



                <Header />



                <div className="flex flex-wrap justify-center -m-2 mb-7">
                    <Fade cascade>
                        <div className="w-auto p-2">
                            <div className="font-heading flex items-center font-semibold px-4 py-2.5 text-lg text-gray-900 bg-white rounded-full">
                                <div className="mr-3 w-3.5 h-3.5 bg-gradient-cyan rounded-full" />
                                <p>Manage remote team</p>
                            </div>
                        </div>
                        <div className="w-auto p-2">
                            <div className="font-heading flex items-center font-semibold px-4 py-2.5 text-lg text-gray-900 bg-white rounded-full">
                                <div className="mr-3 w-3.5 h-3.5 bg-gradient-orange rounded-full" />
                                <p>Connect with experts</p>
                            </div>
                        </div>
                        <div className="w-auto p-2">
                            <div className="font-heading flex items-center font-semibold px-4 py-2.5 text-lg text-gray-900 bg-white rounded-full">
                                <div className="mr-3 w-3.5 h-3.5 bg-gradient-purple rounded-full" />
                                <p>Easy to chat</p>
                            </div>
                        </div>
                        <div className="w-auto p-2">
                            <div className="font-heading flex items-center font-semibold px-4 py-2.5 text-lg text-gray-900 bg-white rounded-full">
                                <div className="mr-3 w-3.5 h-3.5 bg-gradient-green rounded-full" />
                                <p>Video analytics</p>
                            </div>
                        </div>
                        <div className="w-auto p-2">
                            <div className="font-heading flex items-center font-semibold px-4 py-2.5 text-lg text-gray-900 bg-white rounded-full">
                                <div className="mr-3 w-3.5 h-3.5 bg-gradient-blue rounded-full" />
                                <p>Secured Payments</p>
                            </div>
                        </div>
                    </Fade>
                </div>

                <div className="flex flex-wrap justify-center -m-2 mb-7">
                    <Fade cascade>
                        <div className="w-auto p-2">
                            <div className="font-heading flex items-center font-semibold px-4 py-2.5 text-lg text-gray-900 bg-white rounded-full">
                                <div className="mr-3 w-3.5 h-3.5 bg-gradient-cyan rounded-full" />
                                <p>Manage remote team</p>
                            </div>
                        </div>
                        <div className="w-auto p-2">
                            <div className="font-heading flex items-center font-semibold px-4 py-2.5 text-lg text-gray-900 bg-white rounded-full">
                                <div className="mr-3 w-3.5 h-3.5 bg-gradient-orange rounded-full" />
                                <p>Connect with experts</p>
                            </div>
                        </div>
                        <div className="w-auto p-2">
                            <div className="font-heading flex items-center font-semibold px-4 py-2.5 text-lg text-gray-900 bg-white rounded-full">
                                <div className="mr-3 w-3.5 h-3.5 bg-gradient-purple rounded-full" />
                                <p>Easy to chat</p>
                            </div>
                        </div>
                        <div className="w-auto p-2">
                            <div className="font-heading flex items-center font-semibold px-4 py-2.5 text-lg text-gray-900 bg-white rounded-full">
                                <div className="mr-3 w-3.5 h-3.5 bg-gradient-green rounded-full" />
                                <p>Video analytics</p>
                            </div>
                        </div>
                        <div className="w-auto p-2">
                            <div className="font-heading flex items-center font-semibold px-4 py-2.5 text-lg text-gray-900 bg-white rounded-full">
                                <div className="mr-3 w-3.5 h-3.5 bg-gradient-blue rounded-full" />
                                <p>Secured Payments</p>
                            </div>
                        </div>
                    </Fade>
                </div>
                <div className="flex flex-wrap justify-center -m-2 mb-7">
                    <Fade cascade>
                        <div className="w-auto p-2">
                            <div className="font-heading flex items-center font-semibold px-4 py-2.5 text-lg text-gray-900 bg-white rounded-full">
                                <div className="mr-3 w-3.5 h-3.5 bg-gradient-cyan rounded-full" />
                                <p>Manage remote team</p>
                            </div>
                        </div>
                        <div className="w-auto p-2">
                            <div className="font-heading flex items-center font-semibold px-4 py-2.5 text-lg text-gray-900 bg-white rounded-full">
                                <div className="mr-3 w-3.5 h-3.5 bg-gradient-orange rounded-full" />
                                <p>Connect with experts</p>
                            </div>
                        </div>
                        <div className="w-auto p-2">
                            <div className="font-heading flex items-center font-semibold px-4 py-2.5 text-lg text-gray-900 bg-white rounded-full">
                                <div className="mr-3 w-3.5 h-3.5 bg-gradient-purple rounded-full" />
                                <p>Easy to chat</p>
                            </div>
                        </div>
                        <div className="w-auto p-2">
                            <div className="font-heading flex items-center font-semibold px-4 py-2.5 text-lg text-gray-900 bg-white rounded-full">
                                <div className="mr-3 w-3.5 h-3.5 bg-gradient-green rounded-full" />
                                <p>Video analytics</p>
                            </div>
                        </div>
                        <div className="w-auto p-2">
                            <div className="font-heading flex items-center font-semibold px-4 py-2.5 text-lg text-gray-900 bg-white rounded-full">
                                <div className="mr-3 w-3.5 h-3.5 bg-gradient-blue rounded-full" />
                                <p>Secured Payments</p>
                            </div>
                        </div>
                    </Fade>
                </div>


            </div>
        </section >

    )
}

export default TagCloud