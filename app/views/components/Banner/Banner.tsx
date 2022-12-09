import Headroom from "react-headroom";
import CloseIcon from '@mui/icons-material/Close';
import { CSSTransition } from 'react-transition-group';

import ShareIcon from '@mui/icons-material/Share';
import useBanner from "@hooks/useBanner"


export type BannerProps = {
    message?: string
}

function Banner() {

    const { closeBanner, banner: { isOpen, message } } = useBanner()

    return (
        <CSSTransition unmountOnExit in={isOpen} timeout={500}>

            <div className="relative text-center text-sm bg-opacity-70 backdrop-blur-sm text-black bg-blue-800">
                <div className="px-6 md:px-12 py-2">

                    <div className="relative flex lg:justify-end">
                        <div className="flex w-full lg:w-auto h-8 lg:h-auto justify-between items-center py-2 md:py-0">

                            <a
                                onClick={() => closeBanner()}
                                className="relative inline-block text-white hover:text-gray-100"
                                href="#"
                            >

                                <CloseIcon sx={{ height: 25 }} />
                            </a>



                        </div>
                        <p className="hidden lg:block lg:absolute top-1/2 left-1/2 transform text-white text-md -translate-y-1/2 -translate-x-1/2 font-medium leading-10">
                            {message ?? "MESSAGE_NOT_FOUND"}
                        </p>
                    </div>
                </div>
            </div>
        </CSSTransition>

    )
}

export default Banner