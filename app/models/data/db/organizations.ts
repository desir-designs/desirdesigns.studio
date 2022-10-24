import FacadeService from "@controllers/services/fadcade"

const social_media = (store: []) => {

    const { portfolio } = FacadeService().types

    const socialMediaObject = {
        getPortfolio: () => {
            return store.filter((data) => {
                return portfolio.predicate(data)
            }).map((data) => {
                return portfolio.shape(data)
            })
        }
    }

    return { ...socialMediaObject } ?? null
}

export default social_media

