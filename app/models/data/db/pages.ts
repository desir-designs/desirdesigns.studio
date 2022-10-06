import meta from "@configs/meta"
import links from "@configs/links"
import layout from "@configs/layout"

import portfolio from "@db/portfolio"
import services from "@db/services"
import faqs from "@db/faqs"

const pages = (store, pageKey) => {

    const { title: siteTitle, email: siteEmail, phone: sitePhone } = meta()

    const portfolioRelativeURL = links().find((link) => link.name === "Portfolio")

    const { getPortfolio } = portfolio()
    const { getServices } = services()
    const { getFAQs } = faqs()


    const portfolioQuery = getPortfolio(store)
    const servicesQuery = getServices(store)
    const faqsQuery = getFAQs(store)

    const pageData = {

        home: {
            metaData: {
                pageTitle: 'Home',
            },
            data: {
                hero: {
                    title: "Desir Designs",
                    heading: "Master Designer",
                    description: 'Measure twice, cut once. I am a full service graphic designer & illustrator here to serve your visualization needs.',
                    cta: {
                        name: 'Book Consultation',
                        link: '/contact'
                    }
                },

                tagCloud: {
                    title: 'Services',
                    heading: 'What I Do for You',
                    tags: [
                        ...servicesQuery.map((service) => {
                            return {
                                name: service.name,
                                icon: service.icon,
                            }
                        })

                    ]
                },

                contentRow: {
                    title: 'Portfolio',
                    heading: 'The Fringe of Design',
                    description: 'Please take a look at some of my recent work. I am always looking to expand my portfolio, so if you have a project in mind, please feel free to contact me.',
                    action: {
                        name: 'View Portfolio',
                        url: portfolioRelativeURL.url
                    },
                    content: portfolioQuery.map((item) => ({
                        cover: {
                            src: item.covers[0]?.src ?? "#",
                            alt: item.covers[0]?.alt ?? "#",
                        } ?? null,
                        tags: item.tags,
                        url: `${portfolioRelativeURL.url}/${item.id}`,
                        date: item.date,
                        title: item.name,
                        description: ""
                    }))


                },

                summarySection: {

                    title: 'Frequently Asked Questions',
                    heading: 'Know my process',
                    banner: {
                        src: '/assets/images/fringe.svg',
                        alt: 'fringe-of-design'
                    },
                    summary: faqsQuery.map((faq) => ({ ...faq }))
                },

                commentsRow: {
                    title: 'Testimonials',
                    heading: 'What my clients say',
                    comments: [

                    ]
                },


                contactForm: {
                    title: "Contact Me",
                    description: "I'd love to hear from you. Please fill out the form below and I'll get back to you as soon as possible.",
                    email: siteEmail,
                    phone: sitePhone,

                }
            }
        },
        portfolio: {
            metaData: {
                pageTitle: 'Portfolio',
            },

            data: {

                pages: portfolioQuery.map((item) => ({
                    name: item.id ? item.id : "",
                    metaData: {
                        pageTitle: item.name,
                    },
                    data: {
                        post: {
                            title: item.name,
                            banner: item.covers[0]
                        }
                    }

                })),
                contentSearch: {

                    title: 'My Portfolio',
                    heading: 'The Fringe of Design',
                    description: 'Here lie my most recent works. I am always looking to expand my portfolio, so if you have a project in mind, please feel free to contact me.',
                    content: portfolioQuery.map((item) => ({
                        cover: {
                            src: item.covers[0]?.src ?? "#",
                            alt: item.covers[0]?.alt ?? "#",
                        },
                        title: item.name,
                        description: ""
                    }))

                }
            },


        },
        services: {
            metaData: {
                pageTitle: 'Services'
            },

            data: {
                contentSearch: {}
            },

        },
        about: {
            metaData: {
                pageTitle: 'About'
            },
            data: {}
        },
        organizations: {
            metaData: {
                pageTitle: 'Organizations'
            }
        },
        resume: {},
        blog: {
            metaData: {
                pageTitle: 'Blog'
            },
            data: {}
        },

    }

    const layoutData = { ...layout(), metaData: pageData[pageKey].metaData }

    const pageObject = {
        id: `${siteTitle} | ${pageKey}@page-data`,
        version: Date.now(),
        layout: layoutData,
        data: pageData[pageKey].data ?? {},
    }

    return { ...pageObject }
}

export default pages