import meta from "@configs/meta"
import links from "@configs/links"
import layout from "@configs/layout"

import portfolio from "@db/portfolio"


const pages = (store, pageKey) => {

    const { title: siteTitle, email: siteEmail, phone: sitePhone } = meta()

    const portfolioRelativeURL = links().find((link) => link.name === "Portfolio") ?? null

    const { getPortfolio } = portfolio()

    const portfolioQuery = getPortfolio(store)



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
                        tags: ["Graphic Design", "Illustration"],
                        title: item.name,
                        description: ""
                    }))


                },


                contactForm: {
                    title: "Contact Me",
                    description: "I'd love to hear from you. Please fill out the form below and I'll get back to you as soon as possible.",
                    email: siteEmail,
                    phone: sitePhone,

                }
            }
        },
        portfolio: {},
        services: {},

    }

    const layoutData = { ...layout(), metaData: pageData[pageKey].metaData ?? null }


    const pageObject = {
        id: `${siteTitle} | ${pageKey}--page-data`,
        version: Date.now(),
        layout: layoutData,
        data: pageData[pageKey],
    }


    return { ...pageObject } ?? null
}

export default pages