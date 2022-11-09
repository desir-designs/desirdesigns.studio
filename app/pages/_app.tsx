import "@libs/animations.css"
import "@libs/globals.css"
import "@libs/hover.css"
import "@libs/scrollbars.css"
import "@libs/tailwind.css"
import PageService from "@services/page"
import PageLayout from "@layouts/PageLayout"
import { RecoilRoot } from 'recoil'
import { PageTransition } from 'next-page-transitions'
import { Suspense } from "react"
export default function Application({ Component, pageProps, layout }) {

  return (
    <RecoilRoot>
      <Suspense fallback={<></>}>
        <PageLayout {...layout}>
          <PageTransition timeout={300} classNames="page-transition">
            <Component {...pageProps} />

          </PageTransition>
        </PageLayout>
      </Suspense>

    </RecoilRoot>
  )
}

Application.getInitialProps = async () => {
  const { getPage } = PageService()
  const { layout } = await getPage("home")
  return { layout }

}

