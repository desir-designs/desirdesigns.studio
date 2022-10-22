import React from "react"

import Meta from "@includes/Meta"
import Box from "@mui/material/Box"


const RootLayout = ({ children, metaData }) => {

    return (
        <Box sx={{ margin: 0, padding: 0 }}>
            <Meta {...metaData} />
            {children}
        </Box>
    )
}

export default RootLayout