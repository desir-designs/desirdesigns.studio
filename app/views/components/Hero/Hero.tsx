import type { IComponent } from "@typings/Component";
import type { HeroProps } from "@typings/Hero";


const Hero: IComponent<HeroProps> = ({ description, cta }: HeroProps) => {


    return (

        <div className="-z-10 relative container mx-auto px-4 mt-14">

            <div className="relative z-0 flex flex-wrap justify-center items-center -m-6 lg:pt-30">

                <div className="flex-1">
                    <div className="lg:max-w-2xl mx-auto z-0 flex justify-center flex-col items-center">

                        <h1 className="z-0 m-auto">
                            <img className="h-3/4 w-3/4 object-fit m-auto" src="/assets/images/logo-transparent.png" />
                        </h1>

                        <p className="mb-10 font-medium text-2xl mt-4 text-center text-black">
                            {description ? description : "DESCRIPTION_NOT_FOUND"}
                        </p>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero