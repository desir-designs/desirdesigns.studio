import CloseIcon from '@mui/icons-material/Close';
import { CSSTransition } from 'react-transition-group';
import useBanner from "@hooks/useBanner";
import type { BannerProps } from "@typings/Banner";

function Banner({ message }: BannerProps) {

    const { closeBanner, banner: { isOpen } } = useBanner()

    return (
        <CSSTransition
            unmountOnExit
            in={isOpen}
            timeout={500}>

            <div className="relative text-center text-sm bg-opacity-70 backdrop-blur-sm text-black bg-blue-800">
                <div className="px-6 md:px-12 py-2">

                    <div className="relative flex lg:justify-end">
                        <div className="flex w-full lg:w-auto h-8 lg:h-auto justify-between items-center py-1 md:py-0">

                            <a
                                onClick={() => closeBanner()}
                                className="relative inline-block text-white hover:text-gray-100 bg-black rounded-full bg-opacity-40 hover:rotate-180 duration-500 ease-in-out"
                                href="#"
                            >

                                <CloseIcon sx={{ height: 25 }} />
                            </a>
                        </div>
                        <p className="duration-500 border-opacity-60 hover:border-opacity-100 cursor-pointer hover:border-x border-1 px-1 text-lg tracking-wide lg:block lg:absolute top-1/2 left-1/2 transform text-white text-md -translate-y-1/2 -translate-x-1/2 font-medium leading-10">
                            {message ?? "MESSAGE_NOT_FOUND"}
                        </p>
                    </div>
                </div>
            </div>
        </CSSTransition>

    )
}

export default Banner