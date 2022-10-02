import RootLayout from "@layouts/RootLayout"

import Header from "@components/Header"
import Footer from "@components/Footer"
import DrawerMenu from "@includes/DrawerMenu"
import ScrollToTop from "react-scroll-to-top";


const PageLayout = ({ children, metaData, header, footer }) => {

    return (
        <RootLayout {...metaData}>
            <ScrollToTop smooth />
            <DrawerMenu />
            <Header {...header} />
            {children}
            <Footer {...footer} />
        </RootLayout>
    )
}

export default PageLayout