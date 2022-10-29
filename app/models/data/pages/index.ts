import layout from "@configs/layout"
import { links, meta, services, social_media } from "@db/index"

const pages = ({ store, key }) => {

    const { getLinks } = links(store)
    const { getCopyright, getMeta, getEmailAddress, getPhoneNumber, getFavicon, getImpressum } = meta(store)
    const { getServices } = services(store)
    const { getSocialMedia } = social_media(store)


    const pageData = {

        home: {
            metaData: {
                pageTitle: 'Home',
            },
            data: {
                hero: {
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquam lorem, nec ultricies nisl nisl vel ante. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquam lorem, nec ultricies nisl nisl vel ante.',
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
                primaryLinks: {
                    title: "Organizations",
                    links: getLinks().map((link) => ({
                        url: link?.url,
                        name: link?.title
                    }))
                },
                secondaryLinks: {
                    title: "Links",
                    links: getLinks().map((links) => ({
                        url: links?.url,
                        name: links?.title
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