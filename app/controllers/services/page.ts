import pages from "@pages/index"
import NotionService from '@services/notion'

const PageService = () => {

    const serviceObject = {
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

