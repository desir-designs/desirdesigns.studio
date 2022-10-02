import Headroom from "react-headroom"
import MenuIcon from '@mui/icons-material/Menu'
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import type { IComponent } from "@typings/Component"
import type { HeaderProps } from "@typings/Header"
import BlackLogoIcon from "../BlackLogoIcon";
import { Fade } from "react-awesome-reveal";

const Header: IComponent<HeaderProps> = ({ ...props }: HeaderProps) => {

    const { favicon, links, cta } = props


    const Links = () => {
        return (
            links ? <div className="w-auto hidden lg:block items-center">
                <ul className="flex items-center mr-10">
                    <Fade cascade>
                        {
                            links.map((link, index) => {
                                return (
                                    <li key={index} className="font-heading mr-12 text-gray-200 hover:text-gray-700 transition-all text-xl">
                                        <a className="inline" href={link.url}>{link.name}</a>
                                    </li>
                                )
                            })
                        }
                    </Fade>

                </ul>
            </div> : <></>
        )
    }

    const Favicon = () => {
        return (
            favicon ? <div className="w-auto mr-14">
                <a href={favicon?.url ? favicon.url : "FAVICON_URL_NOT_FOUND"}>
                    <img src={favicon.src ? favicon.src : "FAVICON_IMAGE_NOT_FOUND"} className="h-14 w-full" alt={favicon?.alt ? favicon.alt : "FAVICON_ALT_NOT_FOUND"} />
                </a>
            </div> : <></>
        )
    }


    const CallToAction = () => {
        return (
            cta ? <div className="w-auto hidden lg:block">
                <button className="font-heading block py-3.5 px-5 uppercase text-md tracking-px text-blue-700 font-bold bg-gray-300 bg-opacity-50 hover:bg-opacity-10 transition-all rounded">
                    {cta.name}
                </button>
            </div> : <></>
        )
    }


    const NavBurger = () => {

        return (
            <div className="w-auto ml-3">
                <MenuIcon />

            </div>
        )
    }


    return (
        <Headroom>

            <section className="bg-opacity-20 backdrop-blur-md z-50 bg-gray-700 overflow-hidden ">
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