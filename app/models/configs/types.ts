import utils from "@utils/index"

export const notion = () => {

    const { files, url, email, phone, rich_text, title, multi_select, number, status, select, icon, date, isDatabase, getProperties } = utils().notion

    const typeObject = {


        variants: {

        },

        organizations: {
            name: "🫂Organizations",
            shape: (data: any) => {

                const { URL, Name, Types, Status, Media } = data.properties

                return {
                    url: url(URL),
                    name: title(Name),
                    media: files(Media),
                    types: multi_select(Types),
                    status: status(Status),
                }
            },
            predicate: (data: any) => {
                const { name } = typeObject.organizations
                return isDatabase(name, data)
            }
        },

        services: {
            name: "🛒Services",
            shape: (data: any) => {

                const { icon: Icon, properties: { URL, Name, Types, Status } } = data

                return {
                    url: url(URL),
                    icon: icon(Icon),
                    name: title(Name),
                    types: multi_select(Types),
                    status: status(Status),
                }
            },
            predicate: (data: any) => {
                const { name } = typeObject.services
                return isDatabase(name, data)
            }

        },
        links: {
            name: "🔗Links",
            shape: (data: any) => {
                const { URL, Name, Types, Status } = data?.properties

                return {
                    url: url(URL),
                    name: title(Name),
                    types: multi_select(Types),
                    status: status(Status),
                }

            },

            predicate: (data: any) => {
                const { name } = typeObject?.links
                return isDatabase(name, data)
            }

        },

        faqs: {
            name: "❓FAQs",
            shape: (data: any) => {

                const { URL, Name, Types, Status } = data.properties

                return {
                    url: url(URL),
                    name: title(Name),
                    types: multi_select(Types),
                    status: status(Status),
                }
            },
            predicate: (data: any) => {
                const { name } = typeObject.faqs
                return isDatabase(name, data) ?? null
            }

        },
        portfolio: {
            name: "🎁Portfolio",
            shape: (data: any) => {

                const { URL, Name, Types, Date, Description, Status, Media } = data.properties

                return {
                    url: url(URL),
                    date: date(Date),
                    description: rich_text(Description),
                    name: title(Name),
                    types: multi_select(Types),
                    media: files(Media),
                    status: status(Status),
                }
            },
            predicate: (data: any) => {
                const { name } = typeObject.portfolio
                return isDatabase(name, data) ?? null
            }

        },

        social_media: {
            name: "📱Social Media",
            shape: (data: any) => {

                const { URL, Name, Types, Status } = data.properties

                return {
                    url: url(URL),
                    name: title(Name),
                    types: multi_select(Types),
                    status: status(Status),
                }
            },
            predicate: (data: any) => {
                const { name } = typeObject.social_media
                return isDatabase(name, data) ?? null
            }
        },

        meta: {
            name: "📏Meta",
            shape: (data: any) => {

                const { URL, Name, Date, Types, Status, Values, Phone, Email, Files, Description } = getProperties(data)

                return {
                    url: url(URL),
                    files: files(Files),
                    date: date(Date),
                    email: email(Email),
                    phone: phone(Phone),
                    values: multi_select(Values),
                    description: rich_text(Description),
                    name: title(Name),
                    types: multi_select(Types),
                    status: status(Status),
                }
            },
            predicate: (data: any) => {
                const { name } = typeObject.meta
                return isDatabase(name, data)
            }

        },
    }

    return { ...typeObject }

}