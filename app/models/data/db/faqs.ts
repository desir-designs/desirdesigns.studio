import NotionService from "@services/notion"

const faqs = () => {

    const DB_TITLE = "FAQS_DATABASE"
    const { FAQS } = NotionService.db

    return {
        id: DB_TITLE,
        version: `[${DB_TITLE}]: ${Date.now()}`,
        getFAQs: (store: []) => {
            return store.filter((data) => {
                return FAQS.predicate(data)
            }).map((data: []) => {
                return FAQS.shape(data)
            })
        }
    }
}

export default faqs

