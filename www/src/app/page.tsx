import TagCloud from "@components/TagCloud";
import StatsRow from "@components/StatsRow";
import FeaturedContent from "@components/FeaturedContent";
import TableSection from "@components/TableSection";
import ContactSection from "@components/ContactSection";
import Hero from "@components/Hero";

import { definePage } from "blakprint";

export default async function Home() {

  const Components = definePage(
    <>
      <Hero />
      <TagCloud />
      <StatsRow />
      <FeaturedContent />
      <TableSection />
      <ContactSection />
    </>
  );

  return Components.value();
  
}
