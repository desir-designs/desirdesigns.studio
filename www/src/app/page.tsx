import TagCloud from "@components/TagCloud"
import StatsRow from "@components/StatsRow"
import FeaturedContent from "@components/FeaturedContent";
import TableSection from "@components/TableSection";
import ContactSection from "@components/ContactSection";
import Hero from "@components/Hero"


import { usePage } from "@hooks/usePage"

export default async function Home() {
  return (
    <>
    <Hero/>
      <TagCloud/>
      <StatsRow/>
      <FeaturedContent/>
      <TableSection/>
      <ContactSection/>
    </>
  );
}
