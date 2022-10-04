import meta from "@configs/meta"
import { Client } from "@notionhq/client"



const { title: siteTitle } = meta()

const NotionService = {

    api: new Client({
        auth: process.env.FACADE_API_KEY,
    }),

    secured: {
        central_dogma_id: process.env.CENTRAL_DOGMA_ID,
    },

    db: {
        PORTFOLIO: {
            shape: (data) => {

                const shapeObject = {
                    name: data?.properties?.Name?.title[0].plain_text ?? "TITLE_NOT_FOUND",
                    tags: data?.properties?.Tags?.multi_select.map((tag) => ({ name: tag.name })) ?? [],
                    covers: data?.properties?.Covers?.files.map((file) => ({
                        alt: file?.name,
                        src: file?.file?.url ?? "#",
                        expires: file?.file?.expiry_time
                    })) ?? []

                }

                return { ...shapeObject } ?? null

            },
            predicate: (data) => {
                return (data?.properties?.Database?.select?.name === "🎁Portfolio" &&
                    data?.properties?.Covers?.files.every((file) => file?.file?.url !== null)) ?? null
            }
        },
        SERVICES: {
            shape: (data) => { },
            predicate: (data) => {
                return data.properties.Database.select.name === "❓FAQs"

            }

        },
        SOCIAL_MEDIA: {
            shape: (data) => { },
            predicate: (data) => {
                return data.properties.Database.select.name === "❓FAQs"

            }
        },
        ORGANIZATION: {
            shape: (data) => { },
            predicate: (data) => {
                return data.properties.Database.select.name === "❓FAQs"

            }
        },
        FAQS: {
            shape: (data) => { },
            predicate: (data) => {
                return data.properties.Database.select.name === "❓FAQs"
            }
        },
        META: {
            shape: (data) => { },
            predicate: (data) => {
                return data.properties.Database.select.name === "❓FAQs"

            }
        }

    },

    loadCentralDogma: async () => {

        const { api, secured } = NotionService

        const centralDogma = await api.databases.query({
            database_id: secured.central_dogma_id
        })

        return centralDogma
    },

}


export default NotionService