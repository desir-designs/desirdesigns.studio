import Headroom from "react-headroom"

import type { IComponent } from "@typings/Component"
import type { HeaderProps } from "@typings/Header"

const Header: IComponent<HeaderProps> = ({ ...props }: HeaderProps) => {

    const { favicon, links } = props


    const Links = () => {
        return (
            links ? <div className="w-auto hidden lg:block">
                <ul className="flex items-center mr-10">
                    {
                        links.map((link, index) => {
                            return (
                                <li key={index} className="font-heading mr-9 text-white hover:text-gray-200 text-lg">
                                    <a href="#">{link.name}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div> : <></>
        )
    }

    const Favicon = () => {
        return (
            favicon ? <div className="w-auto mr-14">
                <a href={favicon?.url ? favicon.url : "FAVICON_URL_NOT_FOUND"}>
                    <img src={favicon.src ? favicon.src : "FAVICON_IMAGE_NOT_FOUND"} className="h-14" alt={favicon?.alt ? favicon.alt : "FAVICON_ALT_NOT_FOUND"} />
                </a>
            </div> : <></>
        )
    }


    const CallToAction = () => {
        return (
            <div className="w-auto hidden lg:block">
                <button className="font-heading block py-3.5 px-5 uppercase text-xs tracking-px text-white font-bold bg-white bg-opacity-20 hover:bg-opacity-10 transition ease-in rounded-10">
                    Start Free Trial
                </button>
            </div>
        )
    }


    const NavBurger = () => {

        return (
            <div className="w-auto lg:hidden">
                <a href="#">
                    <svg
                        className="navbar-burger text-gray-800"
                        width={51}
                        height={51}
                        viewBox="0 0 56 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect width={56} height={56} rx={28} fill="currentColor" />
                        <path
                            d="M37 32H19M37 24H19"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </a>
            </div>
        )
    }


    return (
        <Headroom>

            <section className="bg-opacity-20 backdrop-blur-lg z-50 bg-gray-300 overflow-hidden">
                <section>
                    <div className="flex items-center justify-between px-8 py-5">
                        <div className="w-auto">
                            <div className="flex flex-wrap items-center">
                                <Favicon />
                            </div>
                        </div>

                        <Links />

                        <div className="w-auto">
                            <div className="flex flex-wrap items-center">
                                <CallToAction />
                                <NavBurger />
                            </div>
                        </div>

                    </div>
                </section>

            </section>
        </Headroom>
    )
}

export default Header