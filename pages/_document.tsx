import { Head, Html, Main, NextScript } from 'next/document'
import { GoogleAnalytics } from '@next/third-parties/google'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-white text-black dark:bg-black dark:text-white">
        <Main />
        <NextScript />
        <GoogleAnalytics gaId="G-9V9F5J3NT7" />
      </body>
    </Html>
  )
}
