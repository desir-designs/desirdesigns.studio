import type { ComponentType } from "@typings/Component"
import type { SummarySectionProps } from "@typings/SummarySection"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import FadeAnimation from "../FadeAnimation";

const Sx = {
    tw: "duration-500 rounded-xl border-2 shadow-2xl hover:border-white hover:-translate-y-4 border-blue-800 group-hover:scale-80 group-hover:bg-opacity-90 group-hover:shadow-2xl text-left mb-4 group bg-opacity-50 px-4 py-4"
}

const SummarySection: ComponentType<SummarySectionProps> = ({ banner, title, heading, summary }: SummarySectionProps) => {



    const Summary = () => {

        return (
            summary ? <div className="max-w-4xl">

                <FadeAnimation cascade triggerOnce>


                    {
                        summary.map((item, index) => {

                            return (
                                <div className="group rounded" key={index} >

                                    <button className={`flex w-full ${Sx.tw}`}>
                                        <div className="w-auto mr-8">
                                            <span className="flex items-center justify-center w-12 h-12 text-2xl font-bold bg-blue-800 bg-opacity-80 text-white rounded-full">
                                                {index + 1}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-black">
                                            {item?.name ?? "NAME_NOT_FOUND"}
                                        </h3>

                                    </button>


                                    <div className="relative top-0 mt-4 hidden group-hover:flex delay-500 p-4">
                                        <button key={index} className={`flex w-full ${Sx.tw}`}>
                                            <h3 className="text-xl font-bold text-black">
                                                {item?.description ?? "DESCRIPTION_NOT_FOUND"}
                                            </h3>
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }

                </FadeAnimation>





            </div> : <></>
        )
    }

    const Header = () => {

        return (
            <div className="mb-20">
                <span className="text-2xl font-bold text-blue-800">{heading ? heading : "HEADING_NOT_FOUND"}</span>
                <h2 className="mt-6 text-6xl text-black font-bold font-heading">{title ? title : "TITLE_NOT_FOUND"}</h2>
            </div>
        )
    }


    const Banner = () => {
        return (
            banner ? <img
                className="hidden lg:block absolute -z-10 top-0 bottom-0 h-full w-1/2 opacity-40  object-fit"
                src={banner?.src}
                alt={banner?.alt}
            /> : <></>
        )
    }

    return (

        <section className="relative pb-20 2xl:py-40 overflow-hidden z-0">
            <Banner />
            <div className="relative w-full lg:w-4/6 ml-auto pl-4 lg:pl-24 pr-4 pt-20">
                <Header />
                <Summary />
            </div>
        </section>

    )
}

export default SummarySection