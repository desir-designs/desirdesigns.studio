
const PortfolioPage = ({ page }) => {

    const { layout, data: { post } } = page

    return (

        <>
        </>

    )
}

export default PortfolioPage


export async function getStaticProps({ params }) {

    return {
        props: [],
        revalidate: 5
    }

}