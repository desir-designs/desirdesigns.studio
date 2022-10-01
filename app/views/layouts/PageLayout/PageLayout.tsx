import RootLayout from "@layouts/RootLayout"

import Header from "@components/Header"
import Footer from "@components/Footer"
import DrawerMenu from "@includes/DrawerMenu"
const PageLayout = ({ children, metaData, header, footer }) => {

    return (
        <RootLayout {...metaData}>
            <DrawerMenu />
            <Header {...header} />
            {children}
            <Footer {...footer} />
        </RootLayout>
    )
}

export default PageLayout