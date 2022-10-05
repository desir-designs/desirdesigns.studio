import { IComponent } from "@models/typings/Component";
import { Fade } from "react-awesome-reveal";


export type TagProps = {
    name?: string,
    icon?: string,
    url?: string,
}

export type TagCloudProps = {
    title?: string,
    heading?: string,
    tags?: TagProps[]
}


const TagCloud: IComponent<TagCloudProps> = ({ title, heading, tags }: TagCloudProps) => {


    const Header = () => {

        return (
            <div className="mb-16 max-w-md mx-auto">
                <h2 className="mb-5 font-heading font-bold text-center text-5xl sm:text-6xl text-gray-900">
                    {title ? title : "Tag Cloud"}
                </h2>
                <p className="text-gray-600 text-center">
                    {heading ? heading : "HEADING_NOT_FOUND"}
                </p>
            </div>

        )


    }

    const Tags = () => {

        return (
            tags ?
                <div className="flex flex-wrap justify-center  mb-7 w-3/4 item-center m-auto">
                    <Fade triggerOnce cascade>
                        {
                            tags?.map((tag, index) => {
                                return (
                                    <div key={index} className="w-auto p-2">
                                        <div className="font-heading flex items-center font-semibold px-4 py-2.5 text-lg text-white hover:scale-90 hover:bg-opacity-40 transition-all bg-black rounded-full">
                                            <img src={tag.icon ?? "#"} className="mr-3 w-3.5 h-3.5 bg-gradient-cyan rounded-full" />
                                            <p>{tag?.name}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Fade>
                </div> : <>`NO_TAGS`</>
        )
    }




    return (
        <section className="relative pt-20 pb-32 overflow-hidden">

            <div className="container mx-auto px-4">
                <Header />
                <Tags />
            </div>
        </section >

    )
}

export default TagCloud