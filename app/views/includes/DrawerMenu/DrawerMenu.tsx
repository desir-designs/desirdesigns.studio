import useDrawer from "@hooks/useDrawer";
import type { DrawerMenuProps } from "@models/typings/DrawerMenu";
import CloseIcon from '@mui/icons-material/Close';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { CSSTransition } from 'react-transition-group';

const DrawerMenu = ({ links }: DrawerMenuProps) => {

    const { drawer: { isOpen }, toggleDrawer, closeDrawer } = useDrawer()


    const Links = () => {

        return (
            links ? <div className="flex flex-col justify-center w-full py-8 max-h-1/2">
                <ul className="flex-col-reverse overflow-visible">
                    {
                        links.map((link, index) => {
                            return (
                                <li key={index} className="mb-12">
                                    <a
                                        className="text-xl font-medium text-blue-700 font-heading hover:text-black"
                                        href={link?.url}
                                    >
                                        {link?.name ?? "LINK_NOT_FOUND"}
                                    </a>
                                </li>
                            )
                        })
                    }

                </ul>
            </div> : <>LINKS_NOT_FOUND</>
        )
    }

    return (

        <CSSTransition in={isOpen}
            timeout={500}
            unmountOnExit>
            <div className="fixed top-0 bottom-0 left-0 z-50 w-5/6 max-w-sm navbar-menu">
                <div className="fixed inset-0 bg-black navbar-backdrop opacity-10" />

                <ClickAwayListener onClickAway={() => closeDrawer()}>


                    <div className={`navbar-menu backdrop-blur-lg overflow-x-hidden fixed top-0 overflow-scroll left-0 bottom-0 w-4/6 sm:max-w-xs z-50 ${!isOpen ? "slit-out-vertical" : ""}`}>

                        <nav className={`relative z-50 px-9 py-8 h-full tilt-in-left-1 `}>

                            <div className="flex flex-wrap justify-between h-full">
                                <div className="w-full">
                                    <div className="flex items-center justify-between -m-2">
                                        <div className="w-auto p-2">
                                            <a className="inline-block" href="#">
                                                <img src="assets/images/logo-transparent.png" className="h-32" alt="" />
                                            </a>
                                        </div>

                                        <div className="w-auto p-2 cursor-pointer group">
                                            <a onClick={() => toggleDrawer()} className="duration-300 ease-in navbar-burger group-hover:bg-blue-700 group-hover:rounded-full group-hover:scale-90">
                                                <CloseIcon />
                                            </a>
                                        </div>

                                    </div>
                                </div>

                                <Links />

                                <div className="flex flex-col justify-end w-full">
                                    <div className="flex flex-wrap">

                                        <div className="w-full mb-4 group">
                                            <button className="relative block w-full p-1 overflow-hidden text-lg text-gray-200 bg-blue-800 rounded shadow-2xl group font-heading font-large bg-opacity-90">
                                                <div className="absolute top-0 left-0 w-full h-full transition duration-500 ease-in-out transform -translate-y-full bg-black group-hover:-translate-y-0" />
                                                <div className="px-5 py-2 rounded">
                                                    <p className="relative z-10 group-hover:border-blue-300">Contact</p>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </nav>
                    </div>
                </ClickAwayListener>
            </div>
        </CSSTransition >

    )
}

export default DrawerMenu