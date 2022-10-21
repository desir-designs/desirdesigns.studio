import type { IComponent } from "@typings/Component"
const StatsSection = () => {

    return (
        <section className="relative py-36 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap -m-5">
                    <div className="w-full md:w-1/2 xl:w-1/4 p-5">
                        <div className="p-7 bg-white rounded-10">
                            <h2 className="mb-4 font-heading font-bold text-8xl sm:text-9xl text-gray-900">
                                43%
                            </h2>
                            <p className="mb-10 text-gray-600 text-base">
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor
                            </p>
                            <a
                                className="group inline-block font-heading font-medium text-gray-900 hover:text-gray-800 text-base overflow-hidden"
                                href="#"
                            >
                                <p className="mb-1">Read case study</p>
                                <div className="w-full transform -translate-x-0 group-hover:translate-x-full h-px bg-gradient-cyan transition ease-in-out duration-500" />
                            </a>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 xl:w-1/4 p-5">
                        <div className="p-7 bg-white rounded-10">
                            <h2 className="mb-4 font-heading font-bold text-8xl sm:text-9xl text-gray-900">
                                79%
                            </h2>
                            <p className="mb-10 text-gray-600 text-base">
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor
                            </p>
                            <a
                                className="group inline-block font-heading font-medium text-gray-900 hover:text-gray-800 text-base overflow-hidden"
                                href="#"
                            >
                                <p className="mb-1">Read case study</p>
                                <div className="w-full transform -translate-x-0 group-hover:translate-x-full h-px bg-gradient-cyan transition ease-in-out duration-500" />
                            </a>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 xl:w-1/4 p-5">
                        <div className="p-7 bg-white rounded-10">
                            <h2 className="mb-4 font-heading font-bold text-8xl sm:text-9xl text-gray-900">
                                16%
                            </h2>
                            <p className="mb-10 text-gray-600 text-base">
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor
                            </p>
                            <a
                                className="group inline-block font-heading font-medium text-gray-900 hover:text-gray-800 text-base overflow-hidden"
                                href="#"
                            >
                                <p className="mb-1">Read case study</p>
                                <div className="w-full transform -translate-x-0 group-hover:translate-x-full h-px bg-gradient-cyan transition ease-in-out duration-500" />
                            </a>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 xl:w-1/4 p-5">
                        <h2 className="mb-4 font-bold font-heading text-4xl text-gray-900">
                            Looking for growth?
                        </h2>
                        <p className="mb-7 text-base text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum, amet,
                            neque vestibulum elit mi vitae lacus.
                        </p>
                        <button className="group p-0.5 mb-8 font-heading block w-full md:w-auto text-base text-gray-900 font-bold bg-white hover:bg-gray-50 bg-gradient-cyan overflow-hidden rounded-md">
                            <div className="relative py-3.5 px-7 bg-white rounded">
                                <div className="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full transition ease-in-out duration-500 bg-gradient-cyan" />
                                <p className="relative z-10">Book A Free Call</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default StatsSection