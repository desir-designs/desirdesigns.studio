import ComplexTable from '@components/ComplexTable'
import ContactForm from "@components/ContactForm"
import Hero from "@components/Hero"
import TagCloud from "@components/TagCloud"
import PageLayout from '@layouts/PageLayout'



const HomePage = ({ page }) => {

  return (

    <PageLayout>
      <Hero />
      <TagCloud />
      <ComplexTable />
      <ContactForm />
    </PageLayout>


  )
}

export default HomePage


