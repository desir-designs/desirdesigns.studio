const ContactForm = () => {

    return (
        <section className="pt-24 pb-32 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="md:max-w-lg mb-20 md:mb-40">
                    <h2 className="mb-5 font-heading font-semibold text-6xl sm:text-7xl text-gray-900">
                        Our contacts
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                        sint. Velit officia consequat duis.
                    </p>
                </div>
                <div className="flex flex-wrap -m-6">
                    <div className="w-full md:w-1/3 p-6">
                        <div className="md:max-w-xs">
                            <h3 className="mb-4 font-heading font-medium text-2xl text-gray-900">
                                United States
                            </h3>
                            <p className="text-lg text-gray-700">
                                8502 Preston Rd. Inglewood, Maine 98380, USA
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 p-6">
                        <div className="md:max-w-xs">
                            <h3 className="mb-4 font-heading font-medium text-2xl text-gray-900">
                                Canada
                            </h3>
                            <p className="text-lg text-gray-700">
                                2972 Westheimer Rd. Santa Ana, Illinois 85486, Canada
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 p-6">
                        <div className="md:max-w-xs">
                            <h3 className="mb-2.5 font-heading font-medium text-2xl text-gray-900">
                                support@gradia.co
                            </h3>
                            <h3 className="font-heading font-medium text-2xl text-gray-900">
                                +1 (302) 555-0107
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ContactForm