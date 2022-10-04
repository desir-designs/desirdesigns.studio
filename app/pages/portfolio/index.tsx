import ContentSearch from "@views/components/ContentSearch"

import PageLayout from '@layouts/PageLayout'
import PageService from '@services/page'

const PortfolioPage = ({ page }) => {

    const { layout } = page

    return (

        <PageLayout {...layout}>
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