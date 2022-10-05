import NotionService from "@services/notion"

const faqs = () => {

    const DB_TITLE = "SERVICES_DATABASE"
    const { SERVICES } = NotionService.db

    return {
        id: DB_TITLE,
        version: `[${DB_TITLE}]: ${Date.now()}`,
        getServices: (store: []) => {
            return store.filter((data) => {
                return SERVICES.predicate(data)
            }).map((data: []) => {
                return {
                    ...SERVICES.shape(data)
                }
            })

        }

    }
}

export default faqs

