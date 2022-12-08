import ContentSearch from "@components/ContentSearch"
import PageService from "@services/page"
import PageLayout from "@layouts/PageLayout"

export async function getStaticProps() {

    const { getPage } = PageService()

    const page = await getPage("portfolio")

    return {
        props: {
            page
        },
        revalidate: 1
    }
}



const PortfolioPage = ({ page }) => {

    const { contentSearch } = page?.data ?? null

    return (
        <>
            <ContentSearch {...contentSearch} />
        </>
    )
}

PortfolioPage.layout = { PageLayout }

export default PortfolioPage


