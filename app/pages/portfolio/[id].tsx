import Post from "@components/Post"
import PageService from "@services/page"

const PortfolioPage = () => {

    return (
        <Post />
    )
}

export default PortfolioPage


export async function getStaticPaths() {

    const { getPage } = PageService()
    
    const { pages } = await getPage("portfolio")

    return {
        paths: pages.map((page) => (`/portfolio/${page?.id}`)),
        fallback: false
    }
}

export async function getStaticProps({ params }) {

    const { getPage } = PageService()

    const { data } = await getPage("home")

    return {
        props: {
            data
        },
        revalidate: 5
    }
}