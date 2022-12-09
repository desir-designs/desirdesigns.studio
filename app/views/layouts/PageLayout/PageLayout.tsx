import Footer from "@components/Footer"
import Header from "@components/Header"
import DrawerMenu from "@includes/DrawerMenu"
import Navigator from "@includes/Navigator"
import RootLayout from "@layouts/RootLayout"
import type { LayoutProps } from "@models/typings/Layout"
import { Suspense } from "react"
import Lightbox from 'react-image-lightbox';

const PageLayout = ({ children, metaData, header, footer, menu }: LayoutProps) => {

    return (
        <div>
            <RootLayout metaData={metaData}>

                <DrawerMenu {...menu} />
                <Header {...header} />
                {children}
                <Footer {...footer} />
            </RootLayout>
            <Navigator />
        </div>
    )
}

export default PageLayout