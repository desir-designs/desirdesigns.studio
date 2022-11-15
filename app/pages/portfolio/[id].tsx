import Post from "@components/Post"
import PageService from "@services/page"

const PortfolioPage = () => {


    return (
        <Post />
    )
}

export default PortfolioPage


export async function getStaticPaths() {
    const paths = ["/portfolio/native-woman"]
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {

    const { getPage } = PageService()

    const { data } = await getPage("home")


    return {
        props: {
            data
        }
    }
}