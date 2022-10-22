import FacadeService from "@services/fadcade"


const services = (store: []) => {

    const { services } = FacadeService().types


    const servicesObject = {

        getServices: (store: []) => {
            return store.filter((data) => {
                return services.predicate(data)
            }).map((data: []) => {
                return services.shape(data)
            })

        }
    }


    return { ...servicesObject }
}

export default services

