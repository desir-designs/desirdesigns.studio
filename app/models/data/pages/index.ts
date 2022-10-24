import { layout } from "@configs/index"
import { portfolio, faqs, services, meta, links } from "@db/index"


const pages = ({ store, key }) => {

    const { getPortfolio } = portfolio(store)
    const { getServices } = services(store)
    const { getFAQs } = faqs(store)
    const { getHeaderLinks, getLinks } = links(store)
    const { getTitle } = meta(store)

    const pageData = {

        home: {
            metaData: {
                pageTitle: 'Home',
            },
            data: {
                hero: {
                    title: getTitle()?.description,
                    heading: "Master Designer",
                    description: 'Measure twice, cut once. I am a full service graphic designer & illustrator here to serve your visualization needs.',
                    cta: {
                        name: 'Book Consultation',
                        link: '/contact'
                    }
                },
            }
        },
    }


    const pageObject = {
        version: Date.now(),
        layout: layout({
            header: {
                links: getLinks().map((link) => ({
                    name: link?.title,
                    url: link?.url
                })),

            },
            footer: {

            },
            menu: {
                links: getLinks().map((link) => ({
                    name: link?.title,
                    url: link?.url
                })),


            },
            metaData: pageData[key]?.metaData ?? null,
        }),
        data: pageData[key]?.data ?? null,
        pages: pageData[key]?.pages ?? null
    }

    return { ...pageObject } ?? null
}


export default pages