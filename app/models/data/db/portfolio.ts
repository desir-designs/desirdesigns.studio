import FacadeService from "@controllers/services/fadcade"

const portfolio = (store: []) => {

    const { portfolio } = FacadeService().types

    const portfolioObject = {
        getPortfolio: () => {
            return store.filter((data) => {
                return portfolio.predicate(data)
            }).map((data) => {
                return portfolio.shape(data)
            })
        }
    }

    return { ...portfolioObject } ?? null
}

export default portfolio

