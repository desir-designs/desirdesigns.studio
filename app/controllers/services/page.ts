import pages from "@pages/index"
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

            const { layout, data, version, pages: pagesData } = pages({ store: centralDogma, key: pageKey })

            const page = {
                version,
                layout,
                data,
                pages: pagesData
            }

            return page
        },
        getPage: async (pageKey: string) => {

            const { getCentralDogma } = NotionService()
            const centralDogma = await getCentralDogma()

            const { layout, data, version, pages: pagesData } = pages({ store: centralDogma, key: pageKey })

            const page = {
                version,
                layout,
                data,
                pages: pagesData
            }

            return page
        },
    }

    return { ...serviceObject } ?? null


}




export default PageService

