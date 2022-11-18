import PageService from "@services/page"


const AboutPage = () => {

    return (
        <>

        </>
    )
}


export default AboutPage


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