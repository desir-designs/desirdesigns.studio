import NotionService from "@services/notion"


const portfolio = () => {

    const DB_TITLE = "PORTFOLIO_DATABASE"

    const { PORTFOLIO } = NotionService.db

    return {
        id: DB_TITLE,
        version: `[${DB_TITLE}]: ${Date.now()}`,
        getPortfolio: (store) => {
            return store.filter((data) => {
                return PORTFOLIO.predicate(data)
            }).map((data) => {
                return PORTFOLIO.shape(data)
            })

        }

    }
}

export default portfolio

