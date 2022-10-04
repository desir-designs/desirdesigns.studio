import ContentSearch from "@components/ContentSearch"
import PageLayout from "@layouts/PageLayout"
import PageService from "@services/page"

const PortfolioPage = ({ page }) => {

    const { layout, data: { contentSearch } } = page

    return (

        <PageLayout {...layout}>
            <ContentSearch {...contentSearch} />
        </PageLayout>

    )
}

export default PortfolioPage


export async function getServerSideProps() {

    const { getPage } = PageService

    const page = await getPage("portfolio")

    return {
        props: {
            page
        }
    }

}