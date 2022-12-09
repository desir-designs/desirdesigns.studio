import layout from "@configs/layout"
import { links, meta, services, portfolio, social_media, organizations, faqs } from "@db/index"
import type { ContentSearchProps, ContactFormProps, ContentRowProps, SummarySectionProps } from "@typings/index"


const pages = ({ store, key }) => {

    const { getLinks, getHeaderLinks } = links(store)
    const { getCopyright, getPortfolioHeader, getFAQsHeader, getEmailAddress, getPhoneNumber, getServicesHeader, getLogo, getFavicon, getImpressum } = meta(store)
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
                    title: getServicesHeader()?.name,
                    heading: getServicesHeader()?.description,
                    tags: getServices().map((services) => ({
                        name: services?.name,
                        url: services?.url,
                        icon: services?.icon,
                    })),
                },
                logoCloud: {
                    title: "My Organizations",
                    heading: "What I'm Involved with",
                    logos: getOrganizations().map((org) => ({
                        image: {
                            src: org?.media[0]?.url ?? "#"
                        }
                    }))
                },
                contentRow: <ContentRowProps>{
                    title: getPortfolioHeader()?.values[0],
                    heading: getPortfolioHeader()?.name,
                    description: getPortfolioHeader()?.description,
                    content: getFeaturedPortfolio().map((portfolio) => ({
                        title: portfolio?.name,
                        date: portfolio?.date,
                        heading: portfolio?.status,
                        cta: {
                            name: "View Archive",
                            url: portfolio?.url
                        },
                        tags: portfolio.types.map((type) => ({
                            name: type
                        })),
                        url: `/portfolio/${portfolio?.name.trim().replace(/\s/g, '-').replace(/'/g, '').toLowerCase()}`,
                        cover: {
                            src: portfolio?.media[0]?.url,
                            alt: portfolio?.name
                        }
                    })),
                    action: {
                        name: "View Portfolio",
                        url: "/portfolio",
                    }
                },
                summarySection: <SummarySectionProps>{
                    title: getFAQsHeader()?.name,
                    heading: getFAQsHeader()?.values[0],
                    banner: {
                        src: getLogo().files[0]?.url,
                    },
                    summary: getFAQs().map((faq) => ({ name: faq?.name, description: faq?.description ?? null }))
                },
                contactForm: <ContactFormProps>{
                    title: "Contact Me",
                    description: "I'm always open to new opportunities and challenges. If you have a project you'd like to discuss, please get in touch.",
                    address: "Orlando, FL, USA",
                    email: getEmailAddress()?.email,
                    phone: getPhoneNumber()?.phone,
                    socials: getSocialMedia().map((social) => ({ name: social?.name }))

                },
                statsSection: {
                    stats: [
                        {
                            value: getPortfolio().length,
                            description: "Inspired Designs",
                        },
                        {
                            value: getServices().length,
                            description: "Professional Services",
                        },
                        {
                            value: getSocialMedia().length,
                            description: "Media Outlets",
                        },
                        {
                            value: getOrganizations().length,
                            description: "Innovative Organizations",
                        },

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
                            src: portfolio?.media[0]?.url,
                            alt: portfolio?.name
                        }
                    }))

                },

            },

            pages: getPortfolio().map((portfolio, index) => ({
                id: portfolio?.name.trim().replace(/\s/g, '-').replace(/'/g, '').toLowerCase(),
                metaData: {
                    pageTitle: portfolio?.name,
                },
                data: {
                    collection: {
                        title: portfolio?.name,
                        heading: portfolio?.name,
                        content: portfolio?.media.map((media) => ({
                            cover: {
                                src: media?.url,
                                alt: media?.name
                            }
                        }))
                    }

                }
            }))
        },
        media: {},
        organizations: {
            metaData: {
                pageTitle: "Organizations"
            },
            data: {

            }
        },
        blog: {},
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