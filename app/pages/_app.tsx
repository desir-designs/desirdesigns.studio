import "@libs/animations.css"
import "@libs/globals.css"
import "@libs/hover.css"
import "@libs/scrollbars.css"
import "@libs/tailwind.css"

import PageLayout from "@layouts/PageLayout"
import PageService from "@services/page"
import { RecoilRoot } from 'recoil'

function Application({ Component, pageProps, layout }) {

  return (
    <RecoilRoot>
      <PageLayout {...layout}>
        <Component {...pageProps} />
      </PageLayout>
    </RecoilRoot>
  )
}

export default Application


Application.getInitialProps = async () => {
  const { getPage } = PageService()
  const { layout } = await getPage("home")
  return {
    layout
  }
}
