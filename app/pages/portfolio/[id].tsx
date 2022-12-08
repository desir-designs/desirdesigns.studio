import Collection from "@components/Collection"
import PageLayout from "@layouts/PageLayout"
import PageService from "@services/page"
import { NotionRenderer } from 'react-notion-x'

export async function getStaticPaths() {

    const { getPage } = PageService()

    const { pages } = await getPage("portfolio")

    return {
        paths: pages.map((page) => ({
            params: {
                id: page?.id ?? "ID_NOT_FOUND"
            }
        })),
        fallback: false
    }
}


export async function getStaticProps({ params }) {

    const { getPage } = PageService()

    const { pages, layout } = await getPage("portfolio")

    const { data, metaData } = pages.find((page) => page.id === params.id) ?? null

    const page = {
        data,
        metaData,
        layout
    }

    return {
        props: {
            page
        },
        revalidate: 1
    }
}


function PortfolioPage({ page }) {

    const { collection } = page?.data ?? null

    return (
        <Collection {...collection} />
    )
}

PortfolioPage.layout = { PageLayout }

export default PortfolioPage



