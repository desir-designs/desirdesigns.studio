import RootLayout from "@layouts/RootLayout"



const PageLayout = ({ children }) => {

    return (
        <RootLayout>
            {children}
        </RootLayout>
    )
}

export default PageLayout