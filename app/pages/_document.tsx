import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'
import Meta from "@includes/Meta"

import Script from 'next/script'


class Document extends NextDocument<any> {
    render() {
        return (
            <Html>
                <Head>
                    <link
                        rel="preload"
                        href="/assets/fonts/gothic.otf"
                        as="font"
                        crossOrigin=""
                        type="font/otf"
                    />

                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default Document