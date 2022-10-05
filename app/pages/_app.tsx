import "@libs/tailwind.css"
import "@libs/globals.css"
import "@libs/animations.css"
import "@libs/scrollbars.css"
import "@libs/hover.css"


import { RecoilRoot } from 'recoil';
import type { AppProps } from 'next/app'

function Application({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default Application
