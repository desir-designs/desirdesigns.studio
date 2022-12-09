import FacadeService from "@controllers/services/fadcade"

const organizations = (store: []) => {

    const { organizations } = FacadeService().types.notion

    const organizationsObject = {
        getOrganizations: () => {
            return store.filter((data) => {
                return organizations.predicate(data)
            }).map((data) => {
                return organizations.shape(data)
            })
        }
    }

    return { ...organizationsObject } ?? null
}

export default organizations

