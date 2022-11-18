import Post from "@components/Post"
import PageService from "@services/page"

const PortfolioPage = ({ page }) => {

    return (
        <Post />
    )
}

export default PortfolioPage



export async function getServerSideProps({ params }) {

    const { getPage } = PageService()

    const { pages } = await getPage("portfolio")

    return {
        props: {
            pages
        },

    }
}