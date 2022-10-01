import ComplexTable from '@components/ComplexTable'
import ContactForm from "@components/ContactForm"
import Hero from "@components/Hero"
import TagCloud from "@components/TagCloud"
import PageLayout from '@layouts/PageLayout'

import PageService from '@controllers/services/page'

const HomePage = ({ page }) => {

  const { layout, data: { contactForm } } = page

  return (

    <PageLayout {...layout}>
      <Hero />
      <TagCloud />
      <ContactForm {...contactForm} />
    </PageLayout>


  )
}

export default HomePage


export async function getStaticProps() {

  const { getPage } = PageService

  const page = (await getPage("home")) || {}

  return {
    props: {
      page
    }
  }

}