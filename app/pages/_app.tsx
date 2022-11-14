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

import dynamic from 'next/dynamic'

import AnimatedCursor from 'react-animated-cursor'

export default function Application({ Component, pageProps, layout }) {

  return (

    <Suspense fallback={<></>}>
      <RecoilRoot>
        <AnimatedCursor
          innerSize={8}
          outerSize={9}
          color='0, 49, 255'
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={7}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link'
          ]} />
        <PageLayout {...layout}>
          <PageTransition timeout={300} classNames="page-transition">
            <Component {...pageProps} />
          </PageTransition>
        </PageLayout>
      </RecoilRoot>
    </Suspense >

  )
}

Application.getInitialProps = async () => {
  const { getPage } = PageService()
  const { layout } = await getPage("home")
  return { layout }

}

