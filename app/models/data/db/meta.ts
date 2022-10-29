import FacadeService from '@services/fadcade';

const meta = (store: []) => {

    const { meta } = FacadeService().types

    const metaObject = {
        getPhoneNumber: () => {
            const phoneNumberKey = "📞Phone Number"
            return metaObject.getMeta().filter((meta) => meta?.types.includes(phoneNumberKey))
        },
        getEmailAddress: () => {
            const emailAddressKey = "📧Email Address"
            return metaObject.getMeta().filter((meta) => meta?.types.includes(emailAddressKey)) ?? null
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

