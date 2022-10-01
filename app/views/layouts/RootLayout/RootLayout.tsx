import React from "react"

import Meta from "@includes/Meta"
import Box from "@mui/material/Box"


const RootLayout = ({ children, metaData }) => {

    return (
        <>
            <Meta {...metaData} />
            {children}
        </>
    )
}

export default React.memo(RootLayout)