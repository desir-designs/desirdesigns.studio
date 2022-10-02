import meta from "@configs/meta"
import layout from "@configs/layout"

const pages = ({ store, pageKey }) => {

    const { title: siteTitle, email: siteEmail, phone: sitePhone } = meta()


    const pageData = {
        home: {

            metaData: {
                pageTitle: 'Home',
            },
            data: {
                hero: {
                    title: "Desir Designs",
                },

                contentRow: {
                    content: []
                },
                contactForm: {
                    title: "Contact Me",
                    description: "I'd love to hear from you. Please fill out the form below and I'll get back to you as soon as possible.",
                    email: siteEmail,
                    phone: sitePhone,

                }
            }
        },
        projects: {},
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