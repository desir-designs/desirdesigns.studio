import { default as pagesDB } from "@pages/index"
import NotionService from '@services/notion'

const PageService = () => {

    const serviceObject = {
        pages: {
            portfolio: "portfolio"
        },

        findPage: async (pageName, id) => {

            const { getPage } = serviceObject

            const { version, data } = await (await getPage(pageName)).pages.find((page) => page.id === id)

            const pageObject = {
                version,
                data
            }
            return { ...pageObject }
        },

        getLayout: async (pageKey: string) => {

            const { getCentralDogma } = NotionService()
            const centralDogma = await getCentralDogma()

            const { layout, data, version, pages } = pagesDB({ store: centralDogma, key: pageKey })

            const page = {
                version,
                layout,
                data,
                pages
            }

            return page
        },
        getPage: async (pageKey: string) => {

            const { getCentralDogma } = NotionService()
            const centralDogma = await getCentralDogma()

            const { layout, data, version, pages } = pagesDB({ store: centralDogma, key: pageKey })

            const page = {
                version,
                layout,
                data,
                pages
            }

            return page
        },
    }

    return { ...serviceObject } ?? null


}




export default PageService

