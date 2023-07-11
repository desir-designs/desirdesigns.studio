import ContentGrid from "@components/ContentGrid";
import TagCloud from "@components/TagCloud"
import StatsRow from "@components/StatsRow"
import FeaturedContent from "@components/FeaturedContent";
import TableSection from "@components/TableSection";
import ContactSection from "@components/ContactSection";


export default async function Home() {
  return (
    <>
      <ContentGrid />
      <TagCloud/>
      <StatsRow/>
      <FeaturedContent/>
      <TableSection/>
      <ContactSection/>
    </>
  );
}
