import ContentSearch from "@components/ContentSearch"
import PageLayout from "@layouts/PageLayout"
import PageService from "@services/page"

import { useEffect } from "react"



const PortfolioPage = ({ page }) => {

    const { layout, version, data: {
        contentSearch
    } } = page


    useEffect(() => {
        console.log(`[DesirDesigns@${version}]`, page)
    }, [page, version])

    return (

        <PageLayout {...layout}>
            <ContentSearch {...contentSearch} />

        </PageLayout>

    )
}

export default PortfolioPage


export async function getServerSideProps() {

    const { getPage } = PageService

    const page = await getPage("portfolio")

    return {
        props: {
            page
        }
    }

}