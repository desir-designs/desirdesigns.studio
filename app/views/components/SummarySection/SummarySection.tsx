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
                                <Accordion sx={{
                                    backgroundColor: "transparent",
                                    outline: "none",
                                }} key={index} className="bg-transparent outline-none">
                                    <AccordionSummary expandIcon={<img className="h-14" src={item.icon} />} className="mb-4 px-4 lg:px-12 py-6 hover:bg-opacity-100 backdrop-blur-md transition-all bg-black rounded-xl bg-opacity-80 outline-none"
                                        aria-controls="panel1a-content"
                                        sx={{
                                            backgroundColor: 'black',
                                            marginBottom: 'var(--size-4)',
                                        }}
                                        id="panel1a-header"
                                    >
                                        <button className="flex w-full text-left">
                                            <div className="w-auto mr-8">
                                                <span className="flex items-center justify-center w-12 h-12 text-lg font-bold bg-white rounded-full">
                                                    {index + 1}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold text-white">
                                                {item?.name}
                                            </h3>
                                        </button>

                                    </AccordionSummary>
                                    <AccordionDetails className="mb-4 px-4 lg:px-12 py-8 bg-blue-700 rounded-2xl">
                                        <div className="w-full mt-3">

                                            <div className="mt-6 border-l-2 border-gray-500 pl-10">
                                                <p className="mb-5 text-xl text-gray-300">
                                                    The point of using Lorem Ipsum is that it has a more-or-less
                                                    normal:
                                                </p>
                                                <p className="mb-2 text-lg text-gray-300">
                                                    <span className="inline-block mr-6 h-2 w-2 rounded-full bg-blue-500" />
                                                    <span>Distribution of letters</span>
                                                </p>
                                                <p className="text-lg text-gray-300">
                                                    <span className="inline-block mr-6 h-2 w-2 rounded-full bg-blue-500" />
                                                    <span>Content here</span>
                                                </p>
                                            </div>
                                        </div>


                                    </AccordionDetails>
                                </Accordion>
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