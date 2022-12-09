import type { ImageProps } from "@typings/Image"

export type ContentProps = {
    title?: string,
    heading?: string,
    cover?: ImageProps,

}
export type CollectionProps = {
    heading?: string,
    title?: string,
    content?: ContentProps[],
    icon?: string
}


function Collection({ heading, title, icon, content }: CollectionProps) {

    const Content = () => {
        return (

            <div className="flex flex-wrap items-center justify-center">

                {
                    content.map((item, index) => {
                        return (

                            <div key={index} className="group cursor-pointer m-4 rounded-lg">
                                <div className="w-full shadow-lg rounded-lg p-0 m-0 group-hover:shadow-2xl group-hover:shadow-black group-hover:-translate-y-2 duration-500 ease-in-out">
                                    <img
                                        className="object-cover w-min-72 w-auto h-72 rounded-lg"
                                        src={item.cover?.src ?? ""}
                                        alt={item?.cover?.alt ?? ""}
                                    />
                                </div>
                                <div className="relative bottom-12 duration-500 ease-in-out group w-auto p-2 group-hover:-translate-y-4">
                                    <h3 className="font-heading group-hover:opacity-80 opacity-0 duration-500 font-semibold text-slate-200 text-2xl bg-black bg-opacity-40 text-center">
                                        {heading ?? "HEADING_NOT_FOUND"}
                                    </h3>
                                </div>
                            </div>
                        )
                    })
                }



            </div>

        )
    }

    const Header = () => {
        return (
            <div className="max-w-md mb-20">
                <h2 className="mb-6 font-heading font-bold text-5xl sm:text-6xl text-gray-900">
                    {title ?? "TITLE_NOT_FOUND"}
                </h2>
                <p className="text-gray-600 text-2xl">
                    {heading ?? "HEADING_NOT_FOUND"}
                </p>
            </div>
        )
    }

    return (
        <section className="overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="pt-28 pb-36 max-w-4xl mx-auto">
                    <Header />
                    <Content />
                </div>
            </div>
        </section>

    )
}

export default Collection