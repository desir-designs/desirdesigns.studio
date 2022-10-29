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

    const { getPage } = PageService()

    const { data: dataStore, version, layout } = await getPage("services")

    const data = dataStore.pages.find(page => page.name === params.name)

    return {
        props: {
            page: {
         
                version,
                layout,
                data
            }
        }
    }

}