import meta from "@configs/meta"
import NotionService from "@services/notion"


const portfolio = () => {

    const { PORTFOLIO } = NotionService.db

    const { title: siteTitle } = meta()

    return {
        id: 'PORTFOLIO_DATABASE',
        version: `[${siteTitle}]: ${Date.now()}`,
        getPortfolio: (store) => {
            return store.filter((data) => {
                return PORTFOLIO.predicate(data) ?? null
            }).map((data) => {
                return {
                    ...PORTFOLIO.shape(data)
                }
            })

        }

    }
}

export default portfolio

