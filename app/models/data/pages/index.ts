import layout from "@configs/layout"
import { links, meta, services, portfolio, social_media, organizations } from "@db/index"

const pages = ({ store, key }) => {

    const { getLinks } = links(store)
    const { getCopyright, getMeta, getEmailAddress, getPhoneNumber, getFavicon, getImpressum } = meta(store)
    const { getServices } = services(store)
    const { getPortfolio, getFeaturedPortfolio } = portfolio(store)
    const { getOrganizations } = organizations(store)
    const { getSocialMedia } = social_media(store)


    const pageData = {

        home: {
            metaData: {
                pageTitle: 'Home',
            },
            data: {
                hero: {
                    description: getImpressum()[0]?.values[0],
                },
                tagCloud: {
                    title: "Services",
                    heading: "What I can do for you",
                    tags: getServices().map((services) => ({
                        name: services?.name,
                        url: services?.url,
                        icon: services?.icon,
                    })),
                },
                contentRow: {
                    title: "My Portfolio",
                    heading: "",
                    description: "",
                    content: getFeaturedPortfolio().map((portfolio) => ({  
                        title: portfolio?.title,
                        cover: {
                            src: portfolio?.covers[0]?.url,
                            alt: portfolio?.title
                        }
                     })),
                    action: {
                        name: "View Portfolio",
                        url: "/portfolio",
                    }
                }
            }
        }
    }

    const pageObject = {
        version: Date.now(),
        layout: layout({
            header: {
                links: getLinks().map((link) => ({
                    name: link?.name,
                    url: link?.url
                })),

                favicon: {
                    image: getFavicon().map((favicon) => ({ src: favicon?.files[0]?.url }))[0]
                }
            },

            footer: {
                primaryLinks: {
                    title: "Organizations",
                    links: getOrganizations().map((link) => ({
                        url: link?.url,
                        name: link?.name
                    }))
                },
                secondaryLinks: {
                    title: "Links",
                    links: getLinks().map((links) => ({
                        url: links?.url,
                        name: links?.name
                    }))
                },
                socials: getSocialMedia().map((social) => ({
                    url: social?.url,
                })),
                email: getEmailAddress()[0]?.email,
                phone: getPhoneNumber()[0]?.phone,
                favicon: {
                    image: getFavicon().map((favicon) => ({ src: favicon?.files[0]?.url }))[0]
                },
                impressum: getImpressum()[0]?.values[0],
                copyright: getCopyright()[0]?.values[0],
            },


            menu: {
                links: getLinks().map((link) => ({
                    name: link?.name,
                    url: link?.url
                }))
            },
            metaData: pageData[key]?.metaData,
        }),



        data: pageData[key]?.data,
        pages: pageData[key]?.pages ?? null
    }

    return { ...pageObject } as const
}


export default pages