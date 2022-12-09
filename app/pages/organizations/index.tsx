import ContentSearch from "@components/ContentSearch"
import PageService from "@services/page"
import PageLayout from "@layouts/PageLayout"

export async function getStaticProps() {

    const { getPage } = PageService()

    const page = await getPage("organizations")

    return {
        props: {
            page
        },
        revalidate: 1
    }
}



const OrganizationsIndexPage = ({ page }) => {

    const { contentSearch } = page?.data ?? null

    return (
        <>
            <ContentSearch {...contentSearch} />
        </>
    )
}

OrganizationsIndexPage.layout = { PageLayout }

export default OrganizationsIndexPage


