import Post from "@components/Post"
import PageService from "@services/page"

const PortfolioPage = ({ page }) => {

    const { data: { post } } = page

    return (
        <Post {...post} />
    )
}

export default PortfolioPage


export async function getServerSideProps({ params }) {

    const { getPage } = PageService()

    const { pages } = await getPage(params.id)

    const page = pages.find(page => page.id === params.id)

    return {
        props: {
            page
        }
    }
}