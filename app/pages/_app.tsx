import "@libs/animations.css"
import "@libs/globals.css"
import "@libs/hover.css"
import "@libs/scrollbars.css"
import "@libs/tailwind.css"
import PageService from "@services/page"
import PageLayout from "@layouts/PageLayout"
import { RecoilRoot } from 'recoil'
import { PageTransition } from 'next-page-transitions'

export default function Application({ Component, pageProps, layout }) {

  return (
    <RecoilRoot>
      <PageLayout {...layout}>
        <PageTransition timeout={300} classNames="page-transition">
          <Component {...pageProps} />

        </PageTransition>
      </PageLayout>
      <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity 300ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 300ms;
          }
        `}</style>
    </RecoilRoot>
  )
}

Application.getInitialProps = async () => {
  const { getPage } = PageService()
  const { layout } = await getPage("home")
  return { layout }

}

