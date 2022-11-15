import PageService from "@services/page"

const ServicesPage = ({ page }) => {

    const { data: { contentSearch } } = page

    return (

        <>
        </>

    )
}

export default ServicesPage


export async function getStaticProps() {

    const { getPage } = PageService()

    const page = await getPage("services")

    return {
        props: {
            page
        },
        revalidate: 5
    }

}