import useDrawer from "@hooks/useDrawer";
import ArchitectureIcon from '@mui/icons-material/Architecture';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import type { IComponent } from "@typings/Component";
import type { HeaderProps } from "@typings/Header";
import { Fade } from "react-awesome-reveal";
import Headroom from "react-headroom";
import { motion } from "framer-motion"

const Header: IComponent<HeaderProps> = ({ ...props }: HeaderProps) => {

    const { favicon, links } = props


    const { toggleDrawer } = useDrawer()

    const Links = () => {
        return (
            links ? <div className="w-auto hidden lg:block items-center">
                <ul className="flex items-center mr-10">
                    {
                        links.map((link, index) => {
                            return (
                                <li key={index} className="font-heading mr-12 text-blue-700 hover:text-blue-500 hover:scale-90 transition-all text-lg">
                                    <a className="inline" href={link.url}><DesignServicesIcon />{link.name}</a>
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
            favicon ?
                <div className="w-auto mr-14 hvr-grow-rotate cursor-pointer">
                    <a href={favicon?.url ? favicon.url : "FAVICON_URL_NOT_FOUND"}>
                        <img src={favicon.image?.src ? favicon.image?.src : "FAVICON_IMAGE_NOT_FOUND"}
                            className="h-14 w-full scale-110"
                            alt={favicon?.image?.alt ? favicon.image?.alt : "FAVICON_ALT_NOT_FOUND"} />
                    </a>
                </div>

                : <>FAVICON_NOT_FOUND</>
        )
    }




    const NavBurger = () => {

        return (
            <div onClick={() => toggleDrawer()} className="cursor-pointer w-auto ml-3 hover:scale-90 transition-all hvr-buzz-out">
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