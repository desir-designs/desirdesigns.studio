import "@libs/tailwind.css"
import "@libs/globals.css"
import "@libs/animations.css"
import "@libs/scrollbars.css"


import type { AppProps } from 'next/app'

function Application({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default Application
