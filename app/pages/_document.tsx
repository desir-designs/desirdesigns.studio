import NextDocument, { Head, Html, Main, NextScript } from 'next/document'
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