import FacadeService from '@services/fadcade';

const links = (store: []) => {

    const { links } = FacadeService().types.notion

    const linksObject = {
        getHeaderLinks: () => {
            return linksObject.getLinks().filter((meta) => meta?.types?.includes("🗣️Header")) ?? null
        },
        getFooterLinks: () => {
            return linksObject.getLinks().filter((meta) => meta?.types?.includes("🗣️Header")) ?? null
        },
        getLinks: () => {
            return store?.filter((data) => {
                return links?.predicate(data)
            }).map((data: []) => {
                return links?.shape(data)
            })
        }
    }

    return { ...linksObject }
}

export default links

