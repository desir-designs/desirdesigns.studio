import ContentSearch from "@components/ContentSearch"
import PageLayout from "@layouts/PageLayout"
import PageService from "@services/page"

const ServicesPage = ({ page }) => {

    const { layout, data: { contentSearch } } = page

    return (

        <PageLayout {...layout}>
            <ContentSearch {...contentSearch} />
        </PageLayout>

    )
}

export default ServicesPage


export async function getServerSideProps() {

    const { getPage } = PageService

    const page = await getPage("services")

    return {
        props: {
            page
        }
    }

}