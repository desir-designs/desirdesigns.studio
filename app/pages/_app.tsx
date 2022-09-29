import type { AppProps } from 'next/app'
import "@libs/tailwind.css"

function Application({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default Application
