import Post from "@components/Post"
import PageLayout from "@layouts/PageLayout"
import PageService from "@services/page"

const PortfolioPage = ({ page }) => {

    const { layout, data: { post } } = page

    return (

        <PageLayout {...layout}>
            <Post {...post} />
        </PageLayout>

    )
}

export default PortfolioPage


export async function getServerSideProps({ params }) {

    const { getPage } = PageService

    const page = (await getPage("portfolio")).pages.find(page => page.id === params.slug)

    return {
        props: {
            page
        }
    }

}