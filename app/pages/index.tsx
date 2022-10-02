import ContactForm from "@components/ContactForm"
import ContentRow from "@components/ContentRow"
import Hero from "@components/Hero"
import SummarySection from "@components/SummarySection"
import TagCloud from "@components/TagCloud"
import StatsSection from '@components/StatsSection'
import CommentsRow from "@components/CommentsRow"


import PageLayout from '@layouts/PageLayout'
import PageService from '@services/page'

const HomePage = ({ page }) => {

  const { layout, data: { contactForm, hero } } = page

  return (

    <PageLayout {...layout}>
      <Hero {...hero} />
      <TagCloud />
      <ContentRow />
      <StatsSection />
      <SummarySection />
      <CommentsRow />
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