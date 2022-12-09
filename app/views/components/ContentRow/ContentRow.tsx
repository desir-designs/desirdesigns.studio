import type { ComponentType } from "@models/typings/Component";
import type { ContentRowProps } from "@typings/ContentRow";
import Fade from 'react-reveal/Fade';


const ContentRow: ComponentType<ContentRowProps> = ({ title, heading, description, action, content }: ContentRowProps) => {

    const Header = () => {
        return (
            <div className="flex flex-wrap items-center mb-16 -mx-4">
                <div className="w-full px-4 mb-8 lg:w-2/3 lg:mb-0">
                    <span className="text-2xl font-extrabold text-blue-800">
                        {title ? title : "TITLE_NOT_FOUND"}
                    </span>
                    <h1 className="mt-2 mb-4 text-6xl font-extrabold font-heading">
                        {heading ? heading : "HEADING_NOT_FOUND"}
                    </h1>
                    <p className="text-xl font-extrabold leading-8">
                        {description ? description : "DESCRIPTION_NOT_FOUND"}
                    </p>
                </div>
                <div className="w-full px-4 mb-8 lg:w-1/3 md:mb-0 lg:text-right">
                    <a
                        className="inline-block px-12 py-4 text-lg font-extrabold leading-6 text-center text-white transition duration-200 bg-indigo-800 border-indigo-900 rounded shadow hover:bg-indigo-900 border-3"
                        href={action ? action?.url : "ACTION_URL_NOT_FOUND"}
                    >
                        {action ? action?.name : "ACTION_NOT_FOUND"}
                    </a>
                </div>
            </div>


        )
    }

    const Content = () => {

        return (

            <div className="flex flex-wrap -mx-4 -mb-8">
                <Fade cascade duration={300}>
                    {
                        content ? content.map((item, index) => {
                            return (
                                <a key={index} href={item.url ?? "#"} className="w-full px-4 mb-8 transition-all duration-500 ease-in-out cursor-pointer hover:-translate-y-4 group md:w-1/2 xl:w-1/3">
                                    <div className="items-center m-auto overflow-hidden transition-all duration-300 ease-in-out border-opacity-25 group-hover:border-2 group-hover:shadow-2xl backdrop-blur-lg group-hover:opacity-80 rounded-2xl group-hover:scale-90 group-hover:-translate-y-4">
                                        <img
                                            className="inline-block object-cover max-h-50"
                                            src={item?.cover?.src ?? "#"}
                                            alt={item?.cover?.alt ?? "IMAGE_NOT_FOUND"}
                                        />
                                        <div className="px-6 py-8 md:p-10">
                                            {item.tags ?
                                                item.tags.map((tag, index) => {
                                                    return (
                                                        <span key={index} className="ml-1 cursor-pointer  hover:scale-90 duration-500 ease-in-out inline-flex items-center justify-center h-6 px-2 mb-6 text-sm font-extrabold text-blue-900 uppercase bg-blue-400 bg-opacity-30 hover:bg-opacity-90 border-2 border-indigo-900 rounded shadow-xl">
                                                            {tag?.name}
                                                        </span>
                                                    )
                                                }) : <>TAGS_NOT_FOUND</>
                                            }
                                            <p className="mb-2 text-xl font-bold text-blue-800">
                                                Joshua Desir • {item?.date}
                                            </p>
                                            <h2 className="mb-6 text-4xl font-extrabold text-black">
                                                {item?.title ?? "TITLE_NOT_FOUND"}
                                            </h2>
                                            <p className="mb-6 text-xl font-bold">
                                            </p>
                                            <a
                                                className="inline-block font-bold text-blue-600 uppercase p-2 border-b border-1 group-hover:border-2 border-slate-800 text-lg"
                                                href={item?.cta?.url ?? "#"}
                                            >

                                                {item?.cta?.name ?? "CTA_NOT_FOUND"}

                                            </a>
                                        </div>
                                    </div>
                                </a>
                            )
                        })
                            : <>CONTENT_NOT_FOUND</>

                    }
                </Fade>
            </div>

        )
    }

    const Action = () => {

        return (
            action ? <div className="mt-20 text-center">
                <a
                    className="inline-block px-12 py-4 text-lg font-bold leading-6 text-center text-white transition duration-200 bg-blue-700 border-blue-900 rounded hover:bg-opacity-50 hover:scale-90 hover:bg-indigo-900 border-3"
                    href={action?.url}>
                    {action?.name}
                </a>
            </div> : <>CALL_TO_ACTION_NOT_FOUND</>
        )
    }


    return (
        <section className="relative py-20">
            <div className="container relative px-4 mx-auto">
                <Header />
                <Content />
                <Action />
            </div>
        </section>


    )
}

export default ContentRow