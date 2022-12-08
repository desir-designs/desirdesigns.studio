import ContactForm from "@components/ContactForm"
import ContentRow from "@components/ContentRow"
import Hero from "@components/Hero"
import StatsSection from '@components/StatsSection'
import SummarySection from "@components/SummarySection"
import TagCloud from "@components/TagCloud"
import PageService from '@services/page'
import LogoCloud from "@components/LogoCloud"
import Options from "@components/Options"
import PageLayout from "@layouts/PageLayout"


export async function getStaticProps() {

  const { getPage } = PageService()

  const page = await getPage("home")

  return {
    props: {
      page
    },
    revalidate: 1
  }
}


function HomePage({ page }) {

  const { contactForm, tagCloud, hero, logoCloud, contentRow, summarySection, statsSection } = page.data

  return (
    <>
      <Hero {...hero} />
      <ContentRow {...contentRow} />
      <TagCloud {...tagCloud} />
      <StatsSection {...statsSection} />
      <LogoCloud {...logoCloud} />
      <Options />
      <SummarySection {...summarySection} />
      <ContactForm {...contactForm} />
    </>
  )

}

HomePage.layout = { PageLayout }

export default HomePage

