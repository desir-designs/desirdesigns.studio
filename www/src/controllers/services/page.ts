import { pages } from "@pages/index"

export function PageService() {

    const methods = {
        getPage: async (id: string) => {
            const page = pages[id]
            return page
        },
        getPages: async () => {
            return pages
        }
    }
    return { ...methods }
}