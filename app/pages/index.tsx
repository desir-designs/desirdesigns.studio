import CommentsRow from "@components/CommentsRow"
import ContactForm from "@components/ContactForm"
import ContentRow from "@components/ContentRow"
import Hero from "@components/Hero"
import StatsSection from '@components/StatsSection'
import SummarySection from "@components/SummarySection"
import TagCloud from "@components/TagCloud"

import PageLayout from '@layouts/PageLayout'
import PageService from '@services/page'
import { useEffect } from "react"



const HomePage = ({ page }) => {

  const { layout,
    data: { contactForm, tagCloud, hero, contentRow, summarySection, commentsRow, statsSection },
    version } = page

  useEffect(() => {
    console.log(`[DesirDesigns@${version}]`, page)
  }, [page, version])


  return (
    <PageLayout {...layout}>
      <Hero {...hero} />
      <TagCloud {...tagCloud} />
      <ContentRow {...contentRow} />
      <StatsSection {...statsSection} />
      <SummarySection {...summarySection} />
      <CommentsRow {...commentsRow} />
      <ContactForm {...contactForm} />
    </PageLayout>

  )
}

export default HomePage


export async function getServerSideProps() {

  const { getPage } = PageService

  const page = await getPage("home")

  return {
    props: {
      page
    }
  }

}