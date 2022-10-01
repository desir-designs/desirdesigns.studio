import meta from "@configs/meta"

import { Client } from "@notionhq/client"



const { title: siteTitle } = meta()
const NotionService = {

    api: new Client({
        auth: process.env.FACADE_API_KEY,
    }),

    secured: {
        central_dogma: process.env.CENTRAL_DOGMA_ID,
    },

    interface: `${process.env.NODE_ENV === "production" ? `${siteTitle}` : `http://localhost:${process.env.PORT || 8080}/api/notion`}`,

    db: {
        PORTFOLIO: {
            shape: {},
            predicate: {}
        }

    },

    loadCentralDogma: async () => {

        const { api, secured } = NotionService

        const centralDogma = await api.databases.query({
            database_id: secured.central_dogma
        })

        return centralDogma
    },

}


export default NotionService