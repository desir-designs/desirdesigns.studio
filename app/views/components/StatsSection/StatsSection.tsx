import type { ComponentType } from "@typings/Component"
import type { StatsSectionProps } from "@typings/StatsSection"
import CountUp from 'react-countup';

const StatsSection: ComponentType<StatsSectionProps> = ({ stats }: StatsSectionProps) => {

    return (
        <section className="relative py-36 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap -m-5">


                    {
                        stats ? stats.map((stat, index) => {
                            return (
                                <div key={index} className="w-full md:w-1/2 xl:w-1/4 p-5">
                                    <div className="p-7 bg-blue-900 bg-opacity-80 backdrop-blur-lg hover:shadow-2xl rounded-lg hover:scale-110 ease-in-out duration-500">
                                        <h2 className="mb-4 font-heading font-bold text-8xl sm:text-9xl text-gray-200">
                                            {<CountUp duration={2.75}
                                                suffix="done"
                                                onEnd={() => console.log('Ended! 👏')}
                                                onStart={() => console.log('Started! 💨')} end={stat?.value as number} /> ?? "STAT_VALUE_NOT_FOUND"}
                                        </h2>
                                        <p className="mb-10 text-blue-300 text-3xl">
                                            {stat?.description ?? "STAT_DESCRIPTION_NOT_FOUND"}
                                        </p>
                                        <a
                                            className="group inline-block font-heading font-medium text-gray-900 hover:text-gray-800 text-base overflow-hidden"
                                            href="#"
                                        >
                                            <p className="mb-1">Read case study</p>
                                            <div className="w-full transform -translate-x-0 group-hover:translate-x-full h-px bg-gradient-cyan transition ease-in-out duration-500" />
                                        </a>
                                    </div>
                                </div>

                            )
                        }) : <>STATS_SECTION_PROPS</>
                    }


                </div>
            </div>
        </section>

    )
}

export default StatsSection