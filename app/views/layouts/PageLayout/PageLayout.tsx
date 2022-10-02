import RootLayout from "@layouts/RootLayout"

import Header from "@components/Header"
import Footer from "@components/Footer"
import DrawerMenu from "@includes/DrawerMenu"
import ScrollToTop from "react-scroll-to-top";
import { Zoom } from "react-awesome-reveal";

import NorthIcon from '@mui/icons-material/North';
const PageLayout = ({ children, metaData, header, footer }) => {

    return (
        <RootLayout {...metaData}>
            <ScrollToTop component={<NorthIcon className="text-blue-900" />} smooth />
            <DrawerMenu />
            <Header {...header} />
            <Zoom>
                {children}

            </Zoom>
            <Footer {...footer} />
        </RootLayout>
    )
}

export default PageLayout