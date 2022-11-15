import RootLayout from "@layouts/RootLayout"
import Footer from "@components/Footer"
import Header from "@components/Header"
import DrawerMenu from "@includes/DrawerMenu"
import ScrollToTop from "react-scroll-to-top"
import NorthIcon from '@mui/icons-material/North'
import { Suspense } from "react"
import type { LayoutProps } from "@models/typings/Layout"


const PageLayout = ({ children, metaData, header, footer, menu }: LayoutProps) => {

    return (
        <Suspense fallback={<></>}>
            <RootLayout metaData={metaData}>
                <ScrollToTop component={<NorthIcon className="text-blue-800" />} smooth />
                <DrawerMenu {...menu} />
                <Header {...header} />
                {children}
                <Footer {...footer} />
            </RootLayout>
        </Suspense>
    )
}

export default PageLayout