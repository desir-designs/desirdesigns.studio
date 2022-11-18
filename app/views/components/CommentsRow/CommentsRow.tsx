import type { CommentsRowProps } from "@typings/CommentsRow"
import type { ComponentType } from "@typings/Component"

const CommentsRow: ComponentType<CommentsRowProps> = ({ title, heading, comments }: CommentsRowProps) => {

    const Header = () => {

        return (
            <>
                <h2 className="mb-5 max-w-2xl mx-auto font-heading font-bold text-center text-6xl sm:text-7xl text-gray-900">{title ? title : "TITLE_NOT_FOUND"}</h2>
                <p className="mb-16 text-base max-w-md mx-auto text-center text-gray-600">{heading ? heading : "HEADING_NOT_FOUND"}</p>
            </>
        )
    }



    const Comments = () => {

        return (
            comments ? <div className="flex flex-wrap -m-5">
                <div className="w-full md:w-1/3 p-5">
                    <div className="h-full p-0.5 bg-gradient-cyan transform hover:-translate-y-3 rounded-10 transition ease-out duration-1000">
                        <div className="h-full px-7 py-8 bg-white rounded-lg">
                            <img
                                className="mb-8"
                                src="gradia-assets/images/testimonials/avatar.png"
                                alt=""
                            />
                            <p className="mb-8 text-lg text-gray-900">
                                “You made it so simple. My new site is so much faster and easier
                                to work with than my old site. I just choose the page, make the
                                change.”
                            </p>
                            <h3 className="mb-1.5 font-heading font-bold text-lg text-gray-900">
                                Darrell Steward
                            </h3>
                            <p className="text-sm text-gray-600">Product Designer</p>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/3 p-5">
                    <div className="h-full p-0.5 bg-gradient-cyan transform hover:-translate-y-3 rounded-10 shadow-5xl transition ease-out duration-1000">
                        <div className="h-full px-7 py-8 bg-white rounded-lg">
                            <img
                                className="mb-8"
                                src="gradia-assets/images/testimonials/avatar2.png"
                                alt=""
                            />
                            <p className="mb-8 text-lg text-gray-900">
                                “Simply the best. Better than all the rest. I’d recommend this
                                product to beginners and advanced users.”
                            </p>
                            <h3 className="mb-1.5 font-heading font-bold text-lg text-gray-900">
                                Ronald Richards
                            </h3>
                            <p className="text-sm text-gray-600">Software Engineer</p>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/3 p-5">
                    <div className="h-full p-0.5 bg-gradient-cyan transform hover:-translate-y-3 rounded-10 transition ease-out duration-1000">
                        <div className="h-full px-7 py-8 bg-white rounded-lg">
                            <img
                                className="mb-8"
                                src="gradia-assets/images/testimonials/avatar3.png"
                                alt=""
                            />
                            <p className="mb-8 text-lg text-gray-900">
                                “I cannot believe that I have got a brand new landing page after
                                getting Omega. It was super easy to edit and publish.”
                            </p>
                            <h3 className="mb-1.5 font-heading font-bold text-lg text-gray-900">
                                Darrell Steward
                            </h3>
                            <p className="text-sm text-gray-600">Product Designer</p>
                        </div>
                    </div>
                </div>
            </div> : <></>
        )
    }

    return (
        <section className="relative pt-24 pb-32 overflow-hidden">
            <div className="container mx-auto px-4">
                <Header />
                <Comments />
            </div>
        </section>
    )
}

export default CommentsRow