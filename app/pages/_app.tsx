import "@libs/animations.css"
import "@libs/globals.css"
import "@libs/hover.css"
import "@libs/scrollbars.css"
import "@libs/tailwind.css"
import 'react-notion-x/src/styles.css'

import { PageTransition } from 'next-page-transitions'

import { RecoilRoot } from 'recoil'

export default function Application({ Component, pageProps }) {

  const { PageLayout } = Component?.layout ? Component.layout : <></>

  return (
    <RecoilRoot>
      {
        (PageLayout) ?
          <PageLayout {...pageProps.page.layout}>
            <PageTransition
              loadingComponent={<></>}
              loadingDelay={500} timeout={1000} classNames="page-transition">
              <Component {...pageProps} />
            </PageTransition>
          </PageLayout>

          :
          <>
            <Component {...pageProps} />
          </>
      }
    </RecoilRoot>
  )
}

