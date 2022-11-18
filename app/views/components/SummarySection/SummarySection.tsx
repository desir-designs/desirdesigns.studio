import type { ComponentType } from "@typings/Component"
import type { SummarySectionProps } from "@typings/SummarySection"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import FadeAnimation from "../FadeAnimation";



const SummarySection: ComponentType<SummarySectionProps> = ({ banner, title, heading, summary }: SummarySectionProps) => {



    const Summary = () => {

        return (
            summary ? <div className="max-w-4xl">

                <FadeAnimation cascade triggerOnce>


                    {
                        summary.map((item, index) => {

                            return (
                                <div className="group rounded" key={index} >

                                    <button className="flex w-full duration-500 rounded-xl group-hover:scale-80 group-hover:bg-opacity-90 group-hover:shadow-2xl text-left bg-black mb-4 group bg-opacity-50 px-4 py-4">
                                        <div className="w-auto mr-8">
                                            <span className="flex items-center justify-center w-12 h-12 text-2xl font-bold bg-blue-400 bg-opacity-50 text-white rounded-full">
                                                {index + 1}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white">
                                            {item?.name}
                                        </h3>

                                    </button>


                                    <div className="relative top-0 mt-4 hidden group-hover:flex delay-500 ">
                                        <button key={index} className="flex w-full mt-4 rounded duration-1000 ease-in-out delay-500 translate-y-4 group-hover:-translate-y-4 opacity-0 group-hover:opacity-100 text-left bg-black mb-4">
                                            <div className="w-auto mr-8">
                                                <span className="flex items-center justify-center w-12 h-12 text-lg font-bold bg-white rounded-full">
                                                    {index + 1}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold text-white">
                                                {item?.name}
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
                <span className="text-lg font-bold text-blue-800">{heading ? heading : "HEADING_NOT_FOUND"}</span>
                <h2 className="mt-8 text-7xl text-black font-bold font-heading">{title ? title : "TITLE_NOT_FOUND"}</h2>
            </div>
        )
    }


    const Banner = () => {
        return (
            banner ? <img
                className="hidden lg:block absolute z-10 top-0 bottom-0 h-full w-2/6 object-cover"
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