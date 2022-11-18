import ContentSearch from "@components/ContentSearch"
import PageService from "@services/page"


const BlogIndexPage = () => {



    return (

        <>
            <ContentSearch />
        </>
    )
}

export default BlogIndexPage


export async function getStaticProps() {

    const { getPage } = PageService()

    const page = await getPage("home")

    return {
        props: {
            page
        },
        revalidate: 2
    }
}