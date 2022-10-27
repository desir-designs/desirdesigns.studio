import { layout } from "@configs/index"
import { links, meta, services } from "@db/index"


const pages = ({ store, key }) => {

    const { getLinks } = links(store)
    const { getMeta, getFavicon } = meta(store)
    const { getServices } = services(store)


    const pageData = {

        home: {
            metaData: {
                pageTitle: 'Home',
            },
            data: {
                hero: {

                }

            }
        }
    }

    const pageObject = {
        version: Date.now(),
        layout: layout({
            header: {
                links: getLinks().map((link) => ({
                    name: link?.title,
                    url: link?.url
                })),
                favicon: {
                    image: getFavicon().map((favicon) => ({ src: favicon?.files[0]?.url }))[0] ?? null
                }
            },

            footer: {
                links: getLinks().map((link) => ({
                    url: link?.url,
                    name: link.title
                }))
            },
            menu: {
                links: getLinks().map((link) => ({
                    name: link?.title,
                    url: link?.url
                }))
            },
            metaData: pageData[key]?.metaData,
        }),
        data: pageData[key]?.data,
        pages: pageData[key]?.pages ?? null
    }

    return { ...pageObject } ?? null
}


export default pages