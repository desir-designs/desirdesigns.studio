import pages from "@db/pages"
import NotionService from '@services/notion'



const PageService = {

    getPage: async (pageKey: string) => {

        const { loadCentralDogma } = NotionService

        const centralDogma = (await loadCentralDogma()).results

        const { layout, data, id, version } = pages(centralDogma, pageKey)

        const page = {
            id,
            version,
            layout,
            data,
        }

        return page

    },

}




export default PageService

