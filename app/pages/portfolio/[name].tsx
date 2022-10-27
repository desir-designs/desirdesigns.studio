import Post from "@components/Post"
import PageLayout from "@layouts/PageLayout"
import PageService from "@services/page"
import { useEffect } from "react"

const PortfolioPage = ({ page }) => {
    useEffect(() => {

        console.log(page)
    })

    const { layout, data: { data: { post } } } = page

    return (

        <PageLayout {...layout}>
            <Post {...post} />
        </PageLayout>

    )
}

export default PortfolioPage


export async function getServerSideProps({ params }) {

    const { getPage } = PageService()

    const { data: dataStore, version, layout, id } = await getPage("portfolio")

    const data = dataStore.pages.find(page => page.name === params.name)

    return {
        props: {
            page: {
                id,
                version,
                layout,
                data
            }
        }
    }

}