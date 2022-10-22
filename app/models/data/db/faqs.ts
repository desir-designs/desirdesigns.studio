import FacadeService from '@services/fadcade';

const faqs = (store: []) => {

    const { faqs } = FacadeService().types

    const faqsObject = {
        getFAQs: () => {
            return store.filter((data) => {
                return faqs?.predicate(data)
            }).map((data: []) => {
                return faqs?.shape(data)
            })
        }
    }

    return { ...faqsObject }
}

export default faqs

