import type { IComponent } from "@models/typings/Component"
import type { ContentProps } from "@typings/Content"
import { Slide } from "react-awesome-reveal";


export type ActionProps = {
    name?: string,
    url?: string
}

export type ContentRowProps = {
    title?: string,
    heading?: string,
    description?: string,
    action?: ActionProps,
    content?: ContentProps[]
}

const ContentRow: IComponent<ContentRowProps> = ({ title, heading, description, action, content }: ContentRowProps) => {



    const Header = () => {
        return (
            <div className="flex flex-wrap -mx-4 mb-16 items-center">
                <div className="w-full lg:w-2/3 px-4 mb-8 lg:mb-0">
                    <span className="text-xl font-extrabold text-blue-500">
                        {title ? title : "TITLE_NOT_FOUND"}
                    </span>
                    <h1 className="text-3xl md:text-4xl font-extrabold font-heading mt-2 mb-4">
                        {heading ? heading : "HEADING_NOT_FOUND"}
                    </h1>
                    <p className="text-xl font-extrabold leading-8">
                        {description ? description : "DESCRIPTION_NOT_FOUND"}
                    </p>
                </div>
                <div className="w-full lg:w-1/3 px-4 mb-8 md:mb-0 lg:text-right">
                    <a
                        className="inline-block py-4 px-12 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
                        href={action ? action.url : "#"}
                    >
                        {action ? action.name : "ACTION_NOT_FOUND"}
                    </a>
                </div>
            </div>


        )
    }


    const Content = () => {

        return (

            <div className="flex flex-wrap -mx-4 -mb-8">

                {
                    content ? content.map((item, index) => {
                        return (
                            <div key={index} className="w-full md:w-1/2 backdrop-blur-3xl xl:w-1/3 px-4 mb-8">
                                <div className="border-3 bg-black items-center  border-indigo-200 backdrop-blur-2xl hover:bg-black hover:bg-opacity-20 bg-opacity-60 transition-all shadow-xl rounded-xl overflow-hidden m-auto">
                                    <img
                                        className="h-50 inline-block object-cover"
                                        src={item.cover.src ?? "#"}
                                        alt={item.cover.alt}
                                    />
                                    <div className="px-6 py-8 md:p-10 border-t-3 border-indigo-900">
                                        {item.tags ?
                                            item.tags.map((tag, index) => {
                                                return (
                                                    <span key={index} className="inline-flex mb-6 h-6 items-center justify-center text-xs font-extrabold px-2 text-indigo-900 rounded border-2 border-indigo-900 bg-green-200 uppercase shadow-sm">
                                                        {tag.name}
                                                    </span>
                                                )
                                            }) : <></>
                                        }
                                        <p className="text-xl font-bold text-gray-400 mb-2">
                                            John Doe • 19 Jan 2022
                                        </p>
                                        <h2 className="text-2xl font-extrabold mb-6">
                                            {item.title}
                                        </h2>
                                        <p className="text-xl font-bold mb-6">
                                        </p>
                                        <a
                                            className="inline-block border-3  font-bold text-indigo-500 hover:text-indigo-600"
                                            href="#"
                                        >
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                        : <></>

                }

            </div>

        )
    }

    const Action = () => {

        return (
            action ? <div className="mt-20 text-center">
                <a
                    className="inline-block py-4 px-12 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
                    href={action.url}
                >
                    {action.name}
                </a>
            </div> : <></>
        )
    }




    return (
        <section className="py-20 relative">
            <div className="container px-4 mx-auto relative">
                <Header />
                <Content />
                <Action />
            </div>
        </section>


    )
}

export default ContentRow