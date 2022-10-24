import FacadeService from '@services/fadcade';

const meta = (store: []) => {

    const { meta } = FacadeService().types

    const metaObject = {
        getTitle: () => {
            return metaObject.getMeta().find((meta) => meta?.types?.includes("📛Title")) ?? null
        },
        getMeta: () => {
            return store?.filter((data) => {
                return meta?.predicate(data)
            }).map((data: []) => {
                return meta?.shape(data)
            })
        }
    }

    return { ...metaObject }
}

export default meta

