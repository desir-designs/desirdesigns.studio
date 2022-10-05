import type { IComponent } from "@typings/Component"
import type { SummarySectionProps } from "@typings/SummarySection"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

const SummarySection: IComponent<SummarySectionProps> = ({ banner, title, heading, summary }: SummarySectionProps) => {



    const Summary = () => {

        return (
            summary ? <div className="max-w-4xl">

                <Accordion className="bg-transparent outline-none">
                    <AccordionSummary className="mb-4 px-4 lg:px-12 py-8 bg-gray-700 rounded-2xl"
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                            <button className="flex w-full text-left">
                                <div className="w-auto mr-8">
                                    <span className="flex items-center justify-center w-12 h-12 text-lg font-bold bg-white rounded-full">
                                        1
                                    </span>
                                </div>
                                <div className="w-full mt-3">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-bold text-white">
                                            How should I develop my workflow over time?
                                        </h3>
                                        <span className="ml-4">
                                            <svg
                                                className="w-4 h-4"
                                                width={18}
                                                height={10}
                                                viewBox="0 0 18 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1.18267 9.00018C0.910673 9.26818 0.473672 9.26818 0.203672 9.00018C-0.0663284 8.73218 -0.0673279 8.29918 0.203672 8.03118L8.11167 0.201183C8.38167 -0.0668173 8.81867 -0.0668173 9.09067 0.201183L16.9987 8.03118C17.2687 8.29918 17.2687 8.73218 16.9987 9.00018C16.7277 9.26818 16.2897 9.26818 16.0197 9.00018L8.60067 1.85918L1.18267 9.00018Z"
                                                    fill="#1F40FF"
                                                />
                                            </svg>
                                        </span>
                                    </div>
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
                            </button>
                    
                    </AccordionSummary>
                    <AccordionDetails  className="mb-4 px-4 lg:px-12 py-8 bg-gray-700 rounded-2xl">
                        <>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </>
                    </AccordionDetails>
                </Accordion>
                <Accordion className="bg-transparent outline-none">
                    <AccordionSummary className="mb-4 px-4 lg:px-12 py-8 bg-gray-700 rounded-2xl"
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                            <button className="flex w-full text-left">
                                <div className="w-auto mr-8">
                                    <span className="flex items-center justify-center w-12 h-12 text-lg font-bold bg-white rounded-full">
                                        1
                                    </span>
                                </div>
                                <div className="w-full mt-3">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-bold text-white">
                                            How should I develop my workflow over time?
                                        </h3>
                                        <span className="ml-4">
                                            <svg
                                                className="w-4 h-4"
                                                width={18}
                                                height={10}
                                                viewBox="0 0 18 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1.18267 9.00018C0.910673 9.26818 0.473672 9.26818 0.203672 9.00018C-0.0663284 8.73218 -0.0673279 8.29918 0.203672 8.03118L8.11167 0.201183C8.38167 -0.0668173 8.81867 -0.0668173 9.09067 0.201183L16.9987 8.03118C17.2687 8.29918 17.2687 8.73218 16.9987 9.00018C16.7277 9.26818 16.2897 9.26818 16.0197 9.00018L8.60067 1.85918L1.18267 9.00018Z"
                                                    fill="#1F40FF"
                                                />
                                            </svg>
                                        </span>
                                    </div>
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
                            </button>
                    
                    </AccordionSummary>
                    <AccordionDetails  className="mb-4 px-4 lg:px-12 py-8 bg-gray-700 rounded-2xl">
                        <>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </>
                    </AccordionDetails>
                </Accordion>
                <Accordion className="bg-transparent outline-none">
                    <AccordionSummary className="mb-4 px-4 lg:px-12 py-8 bg-gray-700 rounded-2xl"
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                            <button className="flex w-full text-left">
                                <div className="w-auto mr-8">
                                    <span className="flex items-center justify-center w-12 h-12 text-lg font-bold bg-white rounded-full">
                                        1
                                    </span>
                                </div>
                                <div className="w-full mt-3">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-bold text-white">
                                            How should I develop my workflow over time?
                                        </h3>
                                        <span className="ml-4">
                                            <svg
                                                className="w-4 h-4"
                                                width={18}
                                                height={10}
                                                viewBox="0 0 18 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1.18267 9.00018C0.910673 9.26818 0.473672 9.26818 0.203672 9.00018C-0.0663284 8.73218 -0.0673279 8.29918 0.203672 8.03118L8.11167 0.201183C8.38167 -0.0668173 8.81867 -0.0668173 9.09067 0.201183L16.9987 8.03118C17.2687 8.29918 17.2687 8.73218 16.9987 9.00018C16.7277 9.26818 16.2897 9.26818 16.0197 9.00018L8.60067 1.85918L1.18267 9.00018Z"
                                                    fill="#1F40FF"
                                                />
                                            </svg>
                                        </span>
                                    </div>
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
                            </button>
                    
                    </AccordionSummary>
                    <AccordionDetails  className="mb-4 px-4 lg:px-12 py-8 bg-gray-700 rounded-2xl">
                        <>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </>
                    </AccordionDetails>
                </Accordion>

                
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

        <section className="relative pb-20 2xl:py-40 overflow-hidden">
            <Banner />
            <div className="relative w-full lg:w-4/6 ml-auto pl-4 lg:pl-24 pr-4 pt-20">
                <Header />
                <Summary />
            </div>
        </section>

    )
}

export default SummarySection