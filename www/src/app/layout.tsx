import "@libs/globals.css";

import NavBar from "@includes/NavBar";
import Footer from "@includes/Footer";
import Container from "@includes/Container";

export const metadata = {
  title: "Desir Designs",
  description: "The Fringe of Desing",
};

export type NextLayoutProps = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: NextLayoutProps) {
  return (
    <Container>
      <NavBar favicon={{
        image: {
          src: "/assets/images/logo-transparent.png"
        }
      }}/>
      {children}
      <Footer />
    </Container>
  );
}
