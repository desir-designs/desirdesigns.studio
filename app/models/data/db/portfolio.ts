import FacadeService from "@services/fadcade"

const portfolio = (store: []) => {

    const { portfolio } = FacadeService().types.notion

    const portfolioObject = {
        getFeaturedPortfolio: () => {
            const featuredKey = "⭐Featured"
            return portfolioObject.getPortfolio().filter((data) => {
                return data?.types?.includes(featuredKey)
            })
        },
        getPortfolio: () => {
            return store.filter((data) => {
                return portfolio.predicate(data)
            }).map((data) => {
                return portfolio.shape(data)
            })
        }
    }

    return { ...portfolioObject } 
}

export default portfolio

