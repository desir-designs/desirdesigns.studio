export type Image = {
    src?: string,
    alt?: string,
}

export type FooterProps = {
    copyright?: string;
    logo: Image
}

const Footer = () => {


    return (
        <section className="pt-24 overflow-hidden">
            <div className="container mx-auto px-4">
                <img
                    className="mx-auto mb-16"
                    src="gradia-assets/logos/gradia-name-black.svg"
                    alt=""
                />
                <ul className="flex flex-wrap justify-center -m-5 pb-8">
                    <li className="p-5">
                        <a
                            className="font-heading text-base text-gray-900 hover:text-gray-700"
                            href="#"
                        >
                            Features
                        </a>
                    </li>
                    <li className="p-5">
                        <a
                            className="font-heading text-base text-gray-900 hover:text-gray-700"
                            href="#"
                        >
                            Pricing
                        </a>
                    </li>
                    <li className="p-5">
                        <a
                            className="font-heading text-base text-gray-900 hover:text-gray-700"
                            href="#"
                        >
                            Affiliate Program
                        </a>
                    </li>
                    <li className="p-5">
                        <a
                            className="font-heading text-base text-gray-900 hover:text-gray-700"
                            href="#"
                        >
                            Press Kit
                        </a>
                    </li>
                </ul>
                <div className="border-b border-gray-100" />
                <p className="text-gray-600 text-center py-8 text-sm">
                    © Copyright 2022. All Rights Reserved by Gradia.
                </p>
            </div>
        </section>

    )
}

export default Footer