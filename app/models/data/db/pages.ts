import meta from "@configs/meta"
import layout from "@configs/layout"

const pages = ({ store, pageKey }) => {

    const { title: siteTitle } = meta()


    const pageData = {
        home: {
            data: {
                hero: {
                    title: "Welcome to my website",
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