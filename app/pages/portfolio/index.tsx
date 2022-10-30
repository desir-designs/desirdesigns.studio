import ContentSearch from "@components/ContentSearch"
import PageService from "@services/page"

const PortfolioPage = ({ page: { data } }) => {

    const { contentSearch } = data

    return (
        <>
            <ContentSearch {...contentSearch} />
        </>
    )
}

export default PortfolioPage


export async function getServerSideProps() {

    const { getPage } = PageService()

    const page = await getPage("portfolio")

    return {
        props: {
            page
        }
    }

}