import type { IComponent } from "@typings/Component";
import type { HeroProps } from "@typings/Hero";

import { motion } from "framer-motion"

const Hero: IComponent<HeroProps> = ({ title, heading, description, cta }: HeroProps) => {



    return (

        <div className="z-10 relative container mx-auto px-4 mt-14">

            <div className="relative z-0 flex flex-wrap justify-center items-center -m-6 lg:pt-30">

                <div className="flex-1">
                    <div className="lg:max-w-2xl mx-auto z-0 flex justify-center flex-col items-center">

                        <h1 className="z-0 m-auto">
                            <img className="h-1/2 w-1/2 object-fit m-auto" src="/assets/images/logo-transparent.png" />
                        </h1>



                        <p className="mb-10 font-medium text-xl text-center text-black">
                            {description ? description : "DESCRIPTION_NOT_FOUND"}
                        </p>

                        <a href={cta?.url} className="group mb-9 relative flex items-center justify-center font-heading px-24 py-5 mx-auto w-1/2 lg:w-auto uppercase text-white text-sm font-semibold tracking-px bg-blue-900 bg-opacity-80 overflow-hidden rounded-md">
                            <p className="relative z-10 mr-2">{cta?.name}</p>
                        </a>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero