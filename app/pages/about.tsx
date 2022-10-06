
import PageLayout from '@layouts/PageLayout'
import PageService from '@services/page'

const HomePage = ({ page }) => {

  const { layout } = page

  return (

    <PageLayout {...layout}>

    </PageLayout>


  )
}

export default HomePage


export async function getStaticProps() {

  const { getPage } = PageService

  const page = await getPage("about")

  return {
    props: {
      page
    }
  }

}