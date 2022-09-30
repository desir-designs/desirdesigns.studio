import type { NextPage } from 'next'
import PageLayout from '@views/layouts/PageLayout'
import Hero from "@components/Hero"
import ContactForm from "@components/ContactForm"
import TagCloud from "@components/TagCloud"
import ComplexTable from '@views/components/ComplexTable'

const Home: NextPage = () => {

  return (

    <PageLayout>
      <Hero />
      <TagCloud />
      <ComplexTable />
      <ContactForm />
    </PageLayout>


  )
}

export default Home


export async function getStaticProps() {

  return {
    props: {

    }
  }
}