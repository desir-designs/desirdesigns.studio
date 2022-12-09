import { Client } from "@notionhq/client"

const NotionService = () => {

    const serviceObject = {
        secured: {
            central_dogma_id: process.env.CENTRAL_DOGMA_ID,
        },

        api: new Client({
            auth: process.env.FACADE_API_KEY,
        }),

        getCentralDogma: async () => {
            
            const { api, secured } = NotionService()

            const centralDogma = (await api.databases.query({
                database_id: secured.central_dogma_id
            }))?.results

            return centralDogma
        },

    }

    return { ...serviceObject } ?? null
}


export default NotionService