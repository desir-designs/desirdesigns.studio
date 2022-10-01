const SummarySection = () => {

    return (
        <section className="relative pb-20 2xl:py-40 overflow-hidden">
            <img
                className="hidden lg:block absolute z-10 top-0 bottom-0 h-full w-2/6 object-cover"
                src="https://images.unsplash.com/photo-1618176729090-253077a8f948?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
                alt=""
            />
            <img
                className="hidden lg:block absolute bottom-0 left-0 h-128 -mb-64 ml-64"
                src="zospace-assets/lines/circle.svg"
                alt=""
            />
            <div className="relative w-full lg:w-4/6 ml-auto pl-4 lg:pl-24 pr-4 pt-20">
                <div className="mb-20">
                    <span className="text-lg font-bold text-blue-400">
                        Hey! Have any questions?
                    </span>
                    <h2 className="mt-8 text-7xl text-white font-bold font-heading">FAQ's</h2>
                </div>
                <div className="max-w-4xl">
                    <ul>
                        <li className="mb-4 px-4 lg:px-12 py-8 bg-gray-700 rounded-2xl">
                            <button className="flex w-full text-left">
                                <div className="w-auto mr-8">
                                    <span className="flex items-center justify-center w-12 h-12 text-lg font-bold bg-white rounded-full">
                                        1
                                    </span>
                                </div>
                                <div className="w-full mt-3">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-bold text-white">
                                            How should I develop my workflow over time?
                                        </h3>
                                        <span className="ml-4">
                                            <svg
                                                className="w-4 h-4"
                                                width={18}
                                                height={10}
                                                viewBox="0 0 18 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1.18267 9.00018C0.910673 9.26818 0.473672 9.26818 0.203672 9.00018C-0.0663284 8.73218 -0.0673279 8.29918 0.203672 8.03118L8.11167 0.201183C8.38167 -0.0668173 8.81867 -0.0668173 9.09067 0.201183L16.9987 8.03118C17.2687 8.29918 17.2687 8.73218 16.9987 9.00018C16.7277 9.26818 16.2897 9.26818 16.0197 9.00018L8.60067 1.85918L1.18267 9.00018Z"
                                                    fill="#1F40FF"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="mt-6 border-l-2 border-gray-500 pl-10">
                                        <p className="mb-5 text-xl text-gray-300">
                                            The point of using Lorem Ipsum is that it has a more-or-less
                                            normal:
                                        </p>
                                        <p className="mb-2 text-lg text-gray-300">
                                            <span className="inline-block mr-6 h-2 w-2 rounded-full bg-blue-500" />
                                            <span>Distribution of letters</span>
                                        </p>
                                        <p className="text-lg text-gray-300">
                                            <span className="inline-block mr-6 h-2 w-2 rounded-full bg-blue-500" />
                                            <span>Content here</span>
                                        </p>
                                    </div>
                                </div>
                            </button>
                        </li>
                        <li className="mb-4 px-4 lg:px-12 py-8 bg-gray-700 rounded-2xl">
                            <button className="flex w-full text-left">
                                <div className="w-auto mr-8">
                                    <span className="flex items-center justify-center w-12 h-12 text-lg font-bold bg-white rounded-full">
                                        2
                                    </span>
                                </div>
                                <div className="w-full mt-3">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-bold text-white">
                                            Can I pay by card?
                                        </h3>
                                        <span className="ml-4">
                                            <svg
                                                className="w-4 h-4"
                                                width={18}
                                                height={10}
                                                viewBox="0 0 18 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M16.0185 0.999999C16.2905 0.732 16.7275 0.732 16.9975 0.999999C17.2675 1.268 17.2685 1.701 16.9975 1.969L9.0895 9.799C8.8195 10.067 8.3825 10.067 8.1105 9.799L0.2025 1.969C-0.0675004 1.701 -0.0675004 1.268 0.2025 1C0.4735 0.732 0.9115 0.732 1.1815 1L8.6005 8.141L16.0185 0.999999Z"
                                                    fill="#1F40FF"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="hidden mt-6 border-l-2 border-gray-500 pl-10">
                                        <p className="text-xl text-gray-300">
                                            The point of using Lorem Ipsum is that it has a more-or-less
                                            normal:
                                        </p>
                                    </div>
                                </div>
                            </button>
                        </li>
                        <li className="mb-4 px-4 lg:px-12 py-8 bg-gray-700 rounded-2xl">
                            <button className="flex w-full text-left">
                                <div className="w-auto mr-8">
                                    <span className="flex items-center justify-center w-12 h-12 text-lg font-bold bg-white rounded-full">
                                        3
                                    </span>
                                </div>
                                <div className="w-full mt-3">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-bold text-white">
                                            How often should the app be updated?
                                        </h3>
                                        <span className="ml-4">
                                            <svg
                                                className="w-4 h-4"
                                                width={18}
                                                height={10}
                                                viewBox="0 0 18 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M16.0185 0.999999C16.2905 0.732 16.7275 0.732 16.9975 0.999999C17.2675 1.268 17.2685 1.701 16.9975 1.969L9.0895 9.799C8.8195 10.067 8.3825 10.067 8.1105 9.799L0.2025 1.969C-0.0675004 1.701 -0.0675004 1.268 0.2025 1C0.4735 0.732 0.9115 0.732 1.1815 1L8.6005 8.141L16.0185 0.999999Z"
                                                    fill="#1F40FF"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="hidden mt-6 border-l-2 border-gray-500 pl-10">
                                        <p className="text-xl text-gray-300">
                                            The point of using Lorem Ipsum is that it has a more-or-less
                                            normal:
                                        </p>
                                    </div>
                                </div>
                            </button>
                        </li>
                        <li className="mb-4 px-4 lg:px-12 py-8 bg-gray-700 rounded-2xl">
                            <button className="flex w-full text-left">
                                <div className="w-auto mr-8">
                                    <span className="flex items-center justify-center w-12 h-12 text-lg font-bold bg-white rounded-full">
                                        4
                                    </span>
                                </div>
                                <div className="w-full mt-3">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-bold text-white">
                                            Are Zospace apps free?
                                        </h3>
                                        <span className="ml-4">
                                            <svg
                                                className="w-4 h-4"
                                                width={18}
                                                height={10}
                                                viewBox="0 0 18 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M16.0185 0.999999C16.2905 0.732 16.7275 0.732 16.9975 0.999999C17.2675 1.268 17.2685 1.701 16.9975 1.969L9.0895 9.799C8.8195 10.067 8.3825 10.067 8.1105 9.799L0.2025 1.969C-0.0675004 1.701 -0.0675004 1.268 0.2025 1C0.4735 0.732 0.9115 0.732 1.1815 1L8.6005 8.141L16.0185 0.999999Z"
                                                    fill="#1F40FF"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="hidden mt-6 border-l-2 border-gray-500 pl-10">
                                        <p className="text-xl text-gray-300">
                                            The point of using Lorem Ipsum is that it has a more-or-less
                                            normal:
                                        </p>
                                    </div>
                                </div>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

    )
}

export default SummarySection