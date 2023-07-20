import "@libs/globals.css";

import NavBar from "@includes/NavBar";
import Footer from "@includes/Footer";

export const metadata = {
  title: "Desir Designs",
  description: "The Fringe of Desing",
};

export type NextLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: NextLayoutProps) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
