import useDrawer from "@hooks/useDrawer";
import type { DrawerMenuProps } from "@models/typings/DrawerMenu";
import CloseIcon from '@mui/icons-material/Close';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { CSSTransition } from 'react-transition-group';

const DrawerMenu = ({ links }: DrawerMenuProps) => {

    const { drawer: { isOpen }, toggleDrawer, closeDrawer } = useDrawer()


    const Links = () => {

        return (
            links ? <div className="flex max-h-1/2 flex-col justify-center py-8 w-full">
                <ul className="overflow-visible flex-col-reverse">
                    {
                        links.map((link, index) => {
                            return (
                                <li key={index} className="mb-12">
                                    <a
                                        className="font-heading font-medium text-xl text-blue-700 hover:text-black"
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
            <div className="navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
                <div className="fixed inset-0 bg-black navbar-backdrop backdrop-blur-sm opacity-20" />
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
                                            <a onClick={() => toggleDrawer()} className="navbar-burger ease-in duration-300 group-hover:bg-blue-700 group-hover:rounded-full group-hover:scale-90">
                                                <CloseIcon />
                                            </a>
                                        </div>

                                    </div>
                                </div>

                                <Links />

                                <div className="flex flex-col justify-end w-full">
                                    <div className="flex flex-wrap">

                                        <div className="w-full group mb-4">
                                            <button className="group relative p-1 font-heading block w-full text-lg text-gray-200 font-large shadow-2xl bg-blue-800  bg-opacity-90 overflow-hidden rounded">
                                                <div className="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-black transition ease-in-out duration-500" />
                                                <div className="py-2 px-5 rounded">
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