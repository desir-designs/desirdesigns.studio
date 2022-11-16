import Footer from "@components/Footer"
import Header from "@components/Header"
import DrawerMenu from "@includes/DrawerMenu"
import Navigator from "@includes/Navigator"
import RootLayout from "@layouts/RootLayout"
import type { LayoutProps } from "@models/typings/Layout"
import { Suspense } from "react"

const PageLayout = ({ children, metaData, header, footer, menu }: LayoutProps) => {

    return (
        <div>
            <DrawerMenu {...menu} />
            <RootLayout metaData={metaData}>
                <Header {...header} />
                {children}
                <Footer {...footer} />
            </RootLayout>
            <Navigator />
        </div>
    )
}

export default PageLayout