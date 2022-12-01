import ContentSearch from "@components/ContentSearch"
import PageLayout from "@layouts/PageLayout"
import PageService from "@services/page"

export async function getStaticProps() {

    const { getPage } = PageService()

    const page = await getPage("services")

    return {
        props: {
            page
        },
        revalidate: 1
    }

}


const ServicesPage = ({ page }) => {

    const { data: { contentSearch } } = page

    return (

        <>
            <ContentSearch />
        </>

    )
}

ServicesPage.layout = { PageLayout }
export default ServicesPage


