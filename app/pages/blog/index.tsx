import ContentSearch from "@components/ContentSearch"
import PageService from "@services/page"


export async function getStaticProps() {

    const { getPage } = PageService()

    const page = await getPage("home")

    return {
        props: {
            page
        },
        revalidate: 1
    }
}

const BlogIndexPage = () => {



    return (

        <>
            <ContentSearch />
        </>
    )
}

export default BlogIndexPage


