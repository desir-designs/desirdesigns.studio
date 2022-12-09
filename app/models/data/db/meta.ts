import FacadeService from '@services/fadcade';

const meta = (store: []) => {

    const { meta } = FacadeService().types.notion

    const metaObject = {
        getPortfolioHeader: () => {
            const headerKeys = ["🪦Heading", "💼Portfolio"]
            return metaObject.getMeta().find((meta) => headerKeys.every((i) => meta.types.includes(i))) ?? null
        },
        getServicesHeader: () => {
            const headerKeys = ["🪦Heading", "🛒Services"]
            return metaObject.getMeta().find((meta) => headerKeys.every((i) => meta.types.includes(i))) ?? null
        },
        getFAQsHeader: () => {
            const headerKeys = ["🪦Heading", "❓FAQs"]
            return metaObject.getMeta().find((meta) => headerKeys.every((i) => meta.types.includes(i))) ?? null
        },
        getPhoneNumber: () => {
            const phoneNumberKey = "📞Phone Number"
            return metaObject.getMeta().find((meta) => meta?.types.includes(phoneNumberKey)) ?? null
        },
        getEmailAddress: () => {
            const emailAddressKey = "📧Email Address"
            return metaObject.getMeta().find((meta) => meta?.types.includes(emailAddressKey)) ?? null
        },
        getCopyright: () => {
            const copyrightKey = "📜Copyright"
            return metaObject.getMeta().filter((meta) => meta?.types?.includes(copyrightKey)) ?? null
        },
        getImpressum: () => {
            const impressumKey = "#️⃣Impressum"
            return metaObject.getMeta().filter((meta) => meta?.types?.includes(impressumKey)) ?? null
        },
        getFavicon: () => {
            const faviconKey = "🖼️Favicon"
            return metaObject.getMeta().filter((meta) => meta?.types?.includes(faviconKey)) ?? null
        },
        getLogo: () => {
            const logoKey = "🍎Logo"
            return metaObject.getMeta().find((meta) => meta?.types?.includes(logoKey)) ?? null

        },
        getTitle: () => {
            const titleKey = "📛Title"
            return metaObject.getMeta().filter((meta) => meta?.types?.includes(titleKey)) ?? null
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

