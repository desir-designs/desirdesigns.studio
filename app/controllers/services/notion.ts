import meta from "@configs/meta"
import { Client } from "@notionhq/client"


export type ServicesProps = {
    name?: string,
}


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
            shape: (data) => {

                const shapeObject = {
                    name: data?.properties?.Name?.title[0].plain_text ?? "TITLE_NOT_FOUND",
                    icon: data?.icon?.external?.url ?? "#",
                    price: data?.properties?.Price?.number ?? 0,
                    features: data?.properties?.Features?.multi_select.map((feature) => ({ name: feature.name })) ?? [],

                }

                return { ...shapeObject } ?? null
            },
            predicate: (data) => {
                return data?.properties?.Database?.select?.name === "🛒Services"

            }

        },
        SOCIAL_MEDIA: {
            shape: (data) => { },
            predicate: (data) => {
                return data.properties.Database.select.name === "📱Social Media"

            }
        },
        ORGANIZATIONS: {
            shape: (data) => { },
            predicate: (data) => {
                return data.properties.Database.select.name === "🫂Organizations"

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
                return data.properties.Database.select.name === "📏Meta"

            }
        }

    },

    loadCentralDogma: async () => {

        const { api, secured } = NotionService

        const centralDogma = await api.databases.query({
            database_id: secured.central_dogma_id
        }).catch((error) => { throw error })

        return centralDogma
    },

}


export default NotionService