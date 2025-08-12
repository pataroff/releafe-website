// https://stackoverflow.com/questions/66539699/fontawesome-icons-not-working-properly-in-react-next-app
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import 'styles/index.css'

import { VisualEditing } from '@sanity/visual-editing/next-pages-router'
import { AppProps } from 'next/app'
import { IBM_Plex_Mono, Inter, PT_Serif } from 'next/font/google'
import { lazy, useSyncExternalStore } from 'react'

import { fetchGlobalData } from 'lib/sanity.global'
import { NavbarPayload, SettingsPayload } from 'types'

import Layout from 'components/shared/Layout'

export interface SharedPageProps {
  draftMode: boolean
  token: string
  settings: SettingsPayload
  navbar: NavbarPayload
}

const PreviewProvider = lazy(() => import('components/preview/PreviewProvider'))

const mono = IBM_Plex_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['500', '700'],
})

const sans = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['500', '700', '800'],
})

const serif = PT_Serif({
  variable: '--font-serif',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  weight: ['400', '700'],
})

const subscribe = () => () => {}

export default function App({
  Component,
  pageProps,
}: AppProps<SharedPageProps>) {
  const { draftMode, token, settings, navbar } = pageProps
  const isMaybeInsidePresentation = useSyncExternalStore(
    subscribe,
    () =>
      window !== parent ||
      !!opener ||
      process.env.NEXT_PUBLIC_SANITY_VISUAL_EDITING === 'true',
    () => process.env.NEXT_PUBLIC_SANITY_VISUAL_EDITING === 'true',
  )
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-mono: ${mono.style.fontFamily};
            --font-sans: ${sans.style.fontFamily};
            --font-serif: ${serif.style.fontFamily};
          }
        `}
      </style>

      <Layout settings={settings} navbar={navbar}>
        {draftMode ? (
          <PreviewProvider token={token}>
            <Component {...pageProps} />
          </PreviewProvider>
        ) : (
          <Component {...pageProps} />
        )}

        {isMaybeInsidePresentation && <VisualEditing />}
      </Layout>
    </>
  )
}

App.getInitialProps = async ({ ctx }: any) => {
  const { draftMode = false } = ctx
  const globals = await fetchGlobalData(draftMode)
  return { pageProps: { ...globals, draftMode } }
}
