import FacadeService from "@services/fadcade"

const social_media = (store: []) => {

    const { social_media } = FacadeService().types.notion

    const socialMediaObject = {
        getSocialMedia: () => {
            return store.filter((data) => {
                return social_media.predicate(data)
            }).map((data) => {
                return social_media.shape(data)
            })
        }
    }

    return { ...socialMediaObject } ?? null
}

export default social_media

