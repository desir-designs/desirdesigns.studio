import layout from "@configs/layout"
import { links, meta, services, portfolio, social_media, organizations, faqs } from "@db/index"
import type { ContentSearchProps, ContactFormProps, ContentRowProps, SummarySectionProps } from "@typings/index"

const pages = ({ store, key }) => {

    const { getLinks, getHeaderLinks } = links(store)

    const { getCopyright, getEmailAddress, getPhoneNumber, getLogo, getFavicon, getImpressum } = meta(store)

    const { getServices } = services(store)
    const { getPortfolio, getFeaturedPortfolio } = portfolio(store)
    const { getOrganizations } = organizations(store)
    const { getSocialMedia } = social_media(store)
    const { getFAQs } = faqs(store)

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
                contentRow: <ContentRowProps>{
                    title: "My Portfolio",
                    heading: "",
                    description: "My designs",
                    content: getFeaturedPortfolio().map((portfolio) => ({
                        title: portfolio?.name,
                        url: portfolio?.url,
                        cover: {
                            src: portfolio?.covers[0]?.url,
                            alt: portfolio?.name
                        }
                    })),
                    action: {
                        name: "View Portfolio",
                        url: "/portfolio",
                    }
                },
                summarySection: <SummarySectionProps>{
                    title: 'Frequently Asked Questions',
                    banner: {
                        src: getLogo().files[0]?.url,
                    },
                    summary: getFAQs().map((faq) => ({ name: faq?.name }))
                },
                contactForm: <ContactFormProps>{
                    title: "Contact Me",
                    description: "I'm always open to new opportunities and challenges. If you have a project you'd like to discuss, please get in touch.",
                    address: "ere",
                    email: getEmailAddress()?.email,
                    phone: getPhoneNumber()?.phone,
                    socials: getSocialMedia().map((social) => ({ name: social?.name }))

                },
                statsSection: {
                    stats: [
                        {
                            value: getPortfolio().length,
                            description: "My Designs",
                        },
                        {
                            value: getServices().length,
                            description: "My Services",
                        },
                        {
                            value: getPortfolio().length,
                        },
                        {
                            value: getPortfolio().length,
                        }
                    ]

                }
            }
        },
        portfolio: {
            metaData: {
                pageTitle: 'Portfolio',
            },
            data: {
                contentSearch: <ContentSearchProps>{

                    content: getPortfolio().map((portfolio) => ({
                        title: portfolio?.name,
                        cover: {
                            src: portfolio?.covers[0]?.url,
                            alt: portfolio?.name
                        }
                    }))

                },

            },
            pages: getPortfolio().map((portfolio, index) => ({
                id: portfolio?.name.replace(/\s/g, '-').slice(0, getPortfolio()[index]?.name?.length - 2).toLowerCase(),
                metaData: {
                    pageTitle: portfolio?.name,
                },
                data: {
                    post: {
                        title: portfolio?.name,
                    }

                }
            }))
        },
        media: {},
        organizations: {},
        store: {},
        blog: {},
        faqs: {},
        knowledge: {},
        services: {
            metaData: {
                pageTitle: 'Services',
            },

            data: {

            }
        }
    }

    const pageObject = {
        version: Date.now(),
        layout: layout({
            header: {
                links: getHeaderLinks().map((link) => ({
                    name: link?.name,
                    url: link?.url ?? "/"
                })),
                favicon: {
                    image: getFavicon().map((favicon) => ({ src: favicon?.files[0]?.url }))[0],
                    url: "/"
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
                    links: getHeaderLinks().map((links) => ({
                        url: links?.url,
                        name: links?.name
                    }))
                },
                socials: getSocialMedia().map((social) => ({
                    url: social?.url,
                })),
                email: getEmailAddress()?.email,
                phone: getPhoneNumber()?.phone,
                favicon: {
                    image: {
                        src: getLogo().files[0]?.url,
                    }
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

    return { ...pageObject }
}

export default pages