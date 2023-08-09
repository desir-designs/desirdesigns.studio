import "@libs/globals.css";

import NavBar from "@includes/NavBar";
import Footer from "@includes/Footer";
import Container from "@includes/Container";
import { usePage } from "@hooks/usePage";
import type { Metadata } from 'next'

import { DefinitionParams, defineLayout, LayoutType } from "blakprint";



export type LayoutProps = DefinitionParams<LayoutType<any, any, any>>;

export async function generateMetadata(): Promise<Metadata> {
 
  const getPage = usePage

  const { metaData } = await getPage({ type: "metaData", id: "home" });

  return {
  title: "Desir Designs",
  description: "The Fringe of Design",
  themeColor: "#000000",
 }
  
};

export default async function RootLayout({ children }: LayoutProps) {

  const { layout } = await usePage({ type: "layout", id: "home" });

  const Component = defineLayout(
    <Container>
      <NavBar {...layout.navBar} />
      {children}
      <Footer {...layout.footer} />
    </Container>
  );

  return Component.value();
}
