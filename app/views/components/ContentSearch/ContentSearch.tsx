
import Affix from "@components/Affix"
import type { ComponentType } from "@models/typings/Component"
import type { ContentSearchProps } from "@typings/ContentSearch"

const ContentSearch: ComponentType<ContentSearchProps> =
    ({ content, title, heading, description }: ContentSearchProps) => {


        const CallToAction = () => {
            return (
                <div className="mt-20 text-center">
                    <a
                        className="inline-block py-4 px-12 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
                        href="#"
                    >
                        Show more
                    </a>
                </div>
            )
        }

        const Content = () => {
            return (
                content ? <div className="flex flex-wrap -mx-4 -mb-8">


                    {
                        content.map((item, index) => {
                            return (
                                <div key={index} className="w-full sm:w-1/2 px-4 mb-8 hover:scale-90 transition-all">
                                    <a
                                        className="block bg-black bg-opacity-80 border-3 border-indigo-900 shadow-md rounded-2xl overflow-hidden"
                                        href={item?.url ?? "#"}
                                    >
                                        <img
                                            className="h-72 w-full block object-cover"
                                            loading="lazy"
                                            src={item?.cover?.src ?? "https://via.placeholder.com/300"}
                                            alt={item?.cover?.alt ?? "Placeholder"}
                                        />
                                        <div className="px-6 py-8 md:p-10 border-t-3 border-indigo-900">
                                            <h2 className="text-2xl font-extrabold mb-6 text-gray-200">
                                                {item.title}
                                            </h2>
                                            <p className="text-xl font-bold mb-6">
                                                {item.description}
                                            </p>
                                            <div className="flex items-center">
                                                <img
                                                    className="block w-16 h-16"
                                                    src="nigodo-assets/blog/avatar-author.png"
                                                    alt=""
                                                />
                                                <div className="ml-3">
                                                    <h5 className="text-xl font-bold leading-7">John Doe</h5>
                                                    <span className="text-xl font-bold leading-7">
                                                        {item?.date ?? "2021-01-01"}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            )
                        })
                    } </div>
                    : <>NO_CONTENT</>
            )
        }

        const Header = () => {
            return (
                <div className="py-20 border-b-3 border-indigo-900">
                    <div className="container px-4 mx-auto">
                        <div className="max-w-4xl">
                            <span className="text-xl font-extrabold text-blue-700">
                                {title ? title : "TITLE_NOT_FOUND"}
                            </span>
                            <h1 className="text-3xl md:text-4xl font-extrabold font-heading mt-2 mb-4">
                                {heading ? heading : "HEADING_NOT_FOUND"}
                            </h1>
                            <p className="max-w-3xl text-xl font-extrabold leading-8">
                                {description ? description : "DESCRIPTION_NOT_FOUND"}
                            </p>
                        </div>
                    </div>
                </div>

            )
        }

        const SearchBar = () => {

            return (

                <div className="w-full lg:w-1/3 px-4 mb-16 lg:mb-0">
                    <Affix top={120} className="w-full lg:w-1/3 px-4 mb-16 lg:mb-0">

                        <div className="inline-flex max-w-md bg-white p-4 mb-12 items-center border-2 border-indigo-900 rounded shadow">
                            <a className="text-indigo-900 hover:text-indigo-800" href="#">
                                <svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M21.71 20.29L18 16.61C19.4401 14.8144 20.1375 12.5353 19.9488 10.2413C19.7601 7.94731 18.6997 5.81279 16.9855 4.27665C15.2714 2.74051 13.0338 1.91951 10.7329 1.98247C8.43203 2.04543 6.24272 2.98757 4.61514 4.61515C2.98756 6.24273 2.04543 8.43204 1.98247 10.7329C1.91951 13.0338 2.7405 15.2714 4.27664 16.9855C5.81278 18.6997 7.9473 19.7601 10.2413 19.9488C12.5353 20.1375 14.8144 19.4401 16.61 18L20.29 21.68C20.383 21.7737 20.4936 21.8481 20.6154 21.8989C20.7373 21.9497 20.868 21.9758 21 21.9758C21.132 21.9758 21.2627 21.9497 21.3846 21.8989C21.5064 21.8481 21.617 21.7737 21.71 21.68C21.8902 21.4935 21.991 21.2443 21.991 20.985C21.991 20.7257 21.8902 20.4765 21.71 20.29ZM11 18C9.61553 18 8.26215 17.5895 7.111 16.8203C5.95986 16.0511 5.06265 14.9579 4.53284 13.6788C4.00303 12.3997 3.8644 10.9922 4.1345 9.63437C4.4046 8.2765 5.07128 7.02922 6.05025 6.05026C7.02922 5.07129 8.2765 4.4046 9.63436 4.13451C10.9922 3.86441 12.3997 4.00303 13.6788 4.53285C14.9579 5.06266 16.0511 5.95987 16.8203 7.11101C17.5895 8.26216 18 9.61553 18 11C18 12.8565 17.2625 14.637 15.9497 15.9498C14.637 17.2625 12.8565 18 11 18Z"
                                        fill="#171952"
                                    />
                                </svg>
                            </a>
                            <input
                                className="bg-transparent px-3 text-lg font-extrabold text-indigo-900 placeholder-indigo-900 outline-none"
                                type="search"
                                placeholder="Search"
                            />
                        </div>
                        <ul>
                            <li className="mb-8">
                                <a className="inline-block text-xl font-extrabold" href="#">
                                    All Categories
                                </a>
                            </li>
                            <li className="mb-8">
                                <a
                                    className="inline-block text-xl font-extrabold text-orange-400 hover:text-orange-500"
                                    href="#"
                                >
                                    Technology
                                </a>
                            </li>
                            <li className="mb-8">
                                <a
                                    className="inline-block text-xl font-extrabold text-orange-400 hover:text-orange-500"
                                    href="#"
                                >
                                    Development
                                </a>
                            </li>
                            <li className="mb-8">
                                <a
                                    className="inline-block text-xl font-extrabold text-orange-400 hover:text-orange-500"
                                    href="#"
                                >
                                    Marketing
                                </a>
                            </li>
                            <li>
                                <a
                                    className="inline-block text-xl font-extrabold text-orange-400 hover:text-orange-500"
                                    href="#"
                                >
                                    Startup
                                </a>
                            </li>
                        </ul>

                    </Affix>

                </div>


            )
        }


        return (
            <section className="transition-all">
                <Header />
                <div className="pt-12 pb-24 relative">
                    <div className="container px-4 mx-auto relative">
                        <div className="flex flex-wrap -mx-4">
                            <SearchBar />
                            <div className="w-full lg:w-2/3 px-4">
                                <Content />
                                <CallToAction />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }

export default ContentSearch