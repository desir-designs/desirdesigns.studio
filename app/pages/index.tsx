import CommentsRow from "@components/CommentsRow"
import ContactForm from "@components/ContactForm"
import ContentRow from "@components/ContentRow"
import Hero from "@components/Hero"
import StatsSection from '@components/StatsSection'
import SummarySection from "@components/SummarySection"
import TagCloud from "@components/TagCloud"

import PageService from '@services/page'


const HomePage = ({ page: { data } }) => {

  const { contactForm, tagCloud, hero, contentRow, summarySection, commentsRow, statsSection } = data

  return (
    <>
      <Hero {...hero} />
      <TagCloud {...tagCloud} />
      <ContentRow {...contentRow} />
      <StatsSection {...statsSection} />
      <SummarySection {...summarySection} />
      <CommentsRow {...commentsRow} />
      <ContactForm {...contactForm} />
    </>

  )
}

export default HomePage


export async function getServerSideProps() {

  const { getPage } = PageService()

  const page = await getPage("home")

  return {
    props: {
      page
    }
  }
}