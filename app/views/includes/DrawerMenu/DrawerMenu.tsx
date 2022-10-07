import useDrawer from "@hooks/useDrawer"
import { CSSTransition } from 'react-transition-group';
import CloseIcon from '@mui/icons-material/Close';
import { Fade } from "react-awesome-reveal"
import ClickAwayListener from '@mui/material/ClickAwayListener';

export type Link = {
    name: string,
    url?: string
}

export type DrawerMenuProps = {

    navLinks?: Link[]
}


const DrawerMenu = ({ navLinks }: DrawerMenuProps) => {

    const { drawer: { isOpen }, toggleDrawer, closeDrawer } = useDrawer()


    const NavLinks = () => {

        return (
            navLinks ?
                <ul className="text-2xl font-thin font-heading">
                    <Fade cascade>
                        {
                            navLinks.map((link, index) => {
                                return (
                                    <li key={index} style={{ fontFamily: 'var(--font-secondary)' }} className="mb-8">
                                        <a className="text-gray-900 hover:text-green-700 hover:bg-gray-200 rounded hover:bg-opacity-50 transition-all p-3" href={link.url}>🍃{link.name}</a>
                                    </li>

                                )
                            })
                        }
                    </Fade>



                </ul> : <></>
        )
    }

    return (

        <CSSTransition in={isOpen}
            timeout={500}
            unmountOnExit>
            <div className="navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
                <section className="bg-gradient-fuchsia background-animate overflow-hidden">
                    <section>
                        <ClickAwayListener onClickAway={() => closeDrawer()}>

                            <div className="navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50">
                                <nav className={`relative z-10 px-9 py-8 backdrop-blur-xl h-full tilt-in-left-1 ${!isOpen ? "slit-out-vertical" : ""}`}>
                                    <div className="flex flex-wrap justify-between h-full">
                                        <div className="w-full">
                                            <div className="flex items-center justify-between -m-2">
                                                <div className="w-auto p-2">
                                                    <a className="inline-block" href="#">
                                                        <img src="gradia-assets/logos/gradia-name-black.svg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="w-auto p-2">
                                                    <a onClick={() => toggleDrawer()} className="navbar-burger" href="#">
                                                        <CloseIcon />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-center py-8 w-full">
                                            <ul>
                                                <li className="mb-12">
                                                    <a
                                                        className="font-heading font-medium text-lg text-gray-900 hover:text-gray-700"
                                                        href="#"
                                                    >
                                                        Features
                                                    </a>
                                                </li>
                                                <li className="mb-12">
                                                    <a
                                                        className="font-heading font-medium text-lg text-gray-900 hover:text-gray-700"
                                                        href="#"
                                                    >
                                                        Solutions
                                                    </a>
                                                </li>
                                                <li className="mb-12">
                                                    <a
                                                        className="font-heading font-medium text-lg text-gray-900 hover:text-gray-700"
                                                        href="#"
                                                    >
                                                        Resources
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="font-heading font-medium text-lg text-gray-900 hover:text-gray-700"
                                                        href="#"
                                                    >
                                                        Pricing
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="flex flex-col justify-end w-full">
                                            <div className="flex flex-wrap">
                                                <div className="w-full">
                                                    <button className="p-0.5 font-heading block w-full text-lg text-gray-900 font-medium rounded-10">
                                                        <div className="py-2 px-5 rounded-10">
                                                            <p>Login</p>
                                                        </div>
                                                    </button>
                                                </div>
                                                <div className="w-full">
                                                    <button className="group relative p-0.5 font-heading block w-full text-lg text-gray-900 font-medium bg-gradient-cyan overflow-hidden rounded-10">
                                                        <div className="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-gradient-cyan transition ease-in-out duration-500" />
                                                        <div className="py-2 px-5 backdrop-blur-lg rounded-lg">
                                                            <p className="relative z-10">Start Free Trial</p>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </ClickAwayListener>
                    </section>


                </section>


            </div>


        </CSSTransition >

    )
}

export default DrawerMenu