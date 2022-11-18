import ContactForm from "@components/ContactForm"
import ContentRow from "@components/ContentRow"
import Hero from "@components/Hero"
import StatsSection from '@components/StatsSection'
import SummarySection from "@components/SummarySection"
import TagCloud from "@components/TagCloud"
import PageService from '@services/page'


function HomePage({ page: { data } }) {

  const { contactForm, tagCloud, hero, contentRow, summarySection, statsSection } = data

  return (
    <>
      <Hero {...hero} />
      <ContentRow {...contentRow} />
      <TagCloud {...tagCloud} />
      <StatsSection {...statsSection} />
      <SummarySection {...summarySection} />
      <ContactForm {...contactForm} />
    </>
  )

}

export default HomePage

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