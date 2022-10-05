import useDrawer from "@hooks/useDrawer";
import ArchitectureIcon from '@mui/icons-material/Architecture';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import type { IComponent } from "@typings/Component";
import type { HeaderProps } from "@typings/Header";
import { Fade } from "react-awesome-reveal";
import Headroom from "react-headroom";
const Header: IComponent<HeaderProps> = ({ ...props }: HeaderProps) => {

    const { favicon, links, cta } = props


    const { toggleDrawer } = useDrawer()

    const Links = () => {
        return (
            links ? <div className="transform translate-x-8 w-auto hidden lg:block items-center">
                <ul className="flex items-center mr-10">
                    <Fade cascade triggerOnce>
                        {
                            links.map((link, index) => {
                                return (
                                    <li key={index} className="font-heading mr-12 text-gray-900 hover:text-blue-400 hover:scale-90 transition-all text-lg">
                                        <a className="inline" href={link.url}><DesignServicesIcon />{link.name}</a>
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
            favicon ? <div className="w-auto mr-14 hvr-grow-rotate">
                <a href={favicon?.url ? favicon.url : "FAVICON_URL_NOT_FOUND"}>
                    <img src={favicon.src ? favicon.src : "FAVICON_IMAGE_NOT_FOUND"}
                        className="h-14 w-full scale-110"
                        alt={favicon?.alt ? favicon.alt : "FAVICON_ALT_NOT_FOUND"} />
                </a>
            </div> : <></>
        )
    }


    const CallToAction = () => {
        return (
            cta ? <div className="w-auto hidden lg:block">
                <button className="font-heading block py-3.5 px-5 uppercase text-md tracking-px text-blue-300 font-bold bg-black bg-opacity-50 hover:bg-opacity-10 transition-all rounded">
                    {cta.name}
                </button>
            </div> : <></>
        )
    }


    const NavBurger = () => {

        return (
            <div onClick={() => toggleDrawer()} className="w-auto ml-3 hover:scale-90 transition-all hvr-buzz-out">
                <ArchitectureIcon sx={{ color: 'blue', transform: 'scale(1.65)' }} />
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