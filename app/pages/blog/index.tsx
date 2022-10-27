import ContentSearch from "@components/ContentSearch"
import PageLayout from "@layouts/PageLayout"
import PageService from "@services/page"

const BlogIndexPage = ({ page }) => {

    const { layout } = page

    return (

        <PageLayout {...layout}>
        </PageLayout>

    )
}

export default BlogIndexPage


export async function getServerSideProps() {

    const { getPage } = PageService()

    const page = await getPage("blog")

    return {
        props: {
            page
        }
    }

}