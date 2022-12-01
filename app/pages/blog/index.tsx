import ContentSearch from "@components/ContentSearch"
import PageService from "@services/page"
import PageLayout from "@layouts/PageLayout"


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

BlogIndexPage.layout = { PageLayout }

export default BlogIndexPage


