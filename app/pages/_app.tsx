import "@libs/animations.css"
import "@libs/globals.css"
import "@libs/hover.css"
import "@libs/scrollbars.css"
import "@libs/tailwind.css"

import { RecoilRoot } from 'recoil'

export default function Application({ Component, pageProps }) {

  const { PageLayout } = Component?.layout ? Component.layout : <></>

  return (
    <RecoilRoot>
      {
        (PageLayout) ?
          <PageLayout {...pageProps.page.layout}>
            <Component {...pageProps} />
          </PageLayout>
          :
          <>
            <Component {...pageProps} />
          </>
      }
    </RecoilRoot>
  )
}

