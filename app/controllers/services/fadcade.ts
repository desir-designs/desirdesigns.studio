import utils from "@utils/index"


const { files, url, email, phone, rich_text, title, multi_select, number, status, select, isDatabase, getProperties } = utils().notion

const FacadeService = () => {

    const serviceObject = {
        version: Date.now(),
        types: {
            services: {
                name: "📱Social Media",
                shape: (data: any) => {

                    const { URL, Title, Types, Status } = data.properties

                    return {
                        url: url(URL),
                        title: rich_text(Title),
                        types: multi_select(Types),
                        status: status(Status),
                    }
                },
                predicate: (data: any) => {
                    const { name } = serviceObject.types.portfolio
                    return isDatabase(name, data) ?? null
                }

            },
            links: {
                name: "🔗Links",
                shape: (data: any) => {

                    const { URL, Name, Types, Status } = data.properties

                    return {
                        url: url(URL),
                        title: title(Name),
                        types: multi_select(Types),
                        status: status(Status),
                    }
                },
                predicate: (data: any) => {
                    const { name } = serviceObject.types.links
                    return isDatabase(name, data) ?? null
                }

            },
            faqs: {
                name: "📱Social Media",
                shape: (data: any) => {

                    const { URL, Title, Types, Status } = data.properties

                    return {
                        url: url(URL),
                        title: rich_text(Title),
                        types: multi_select(Types),
                        status: status(Status),
                    }
                },
                predicate: (data: any) => {
                    const { name } = serviceObject.types.portfolio
                    return isDatabase(name, data) ?? null
                }

            },
            portfolio: {
                name: "🎁Portfolio",
                shape: (data: any) => {

                    const { URL, Title, Types, Status, Covers } = data.properties

                    return {
                        url: url(URL),
                        title: rich_text(Title),
                        types: multi_select(Types),
                        covers: files(Covers),
                        status: status(Status),
                    }
                },
                predicate: (data: any) => {
                    const { name } = serviceObject.types.portfolio
                    return isDatabase(name, data) ?? null
                }

            },

            social_media: {
                name: "📱Social Media",
                shape: (data: any) => {

                    const { URL, Title, Types, Status } = data.properties

                    return {
                        url: url(URL),
                        title: rich_text(Title),
                        types: multi_select(Types),
                        status: status(Status),
                    }
                },
                predicate: (data: any) => {
                    const { name } = serviceObject.types.social_media
                    return isDatabase(name, data) ?? null
                }

            },
            meta: {
                name: "📏Meta",
                shape: (data: any) => {

                    const { URL, Title, Types, Status, Description } = data.properties

                    return {
                        url: url(URL),
                        description: rich_text(Description),
                        title: rich_text(Title),
                        types: multi_select(Types),
                        status: status(Status),
                    }
                },
                predicate: (data: any) => {
                    const { name } = serviceObject.types.meta
                    return isDatabase(name, data) ?? null
                }

            },
        },

    }

    return { ...serviceObject }
}

export default FacadeService