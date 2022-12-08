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


function Collection({ heading, title, content }: CollectionProps) {

    const Content = () => {
        return (

            <div className="flex flex-wrap -m-3">

                {
                    content.map((item, index) => {
                        return (

                            <div key={index} className="shadow-lg duration-500 mt-2 hover:shadow-2xl w-full md:w-1/2 p-3 group cursor-pointer">
                                <div className="group-hover:-translate-y-4 h-full  shadow-black duration-500 p-10 rounded-xl backdrop-blur-sm">
                                    <div className="flex flex-wrap items-center mb-32">
                                        <div className="w-auto p-2">
                                            <img
                                                src={item.cover?.src ?? ""}
                                                alt={item?.cover?.alt ?? ""}
                                            />
                                        </div>
                                        <div className="w-auto p-2">
                                            <p className="font-semibold text-gray-900 text-lg">
                                                {item?.heading ?? "HEADING_NOT_FOUND"}
                                            </p>
                                        </div>
                                    </div>
                                    <h3 className="font-heading font-semibold text-gray-900 text-3xl">
                                        Record Screen. Share with anyone without taking the hassle.
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