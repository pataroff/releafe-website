import Head from 'next/head'

import { SettingsPayload } from 'types'

import { urlForImage } from 'lib/sanity.image'

export function SiteMeta({ settings }: { settings: SettingsPayload }) {
  const { siteTitle, siteDescription, ogImage } = settings

  const imageUrl =
    ogImage && urlForImage(ogImage)?.width(1200).height(627).fit('crop').url()

  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/releafe_favicon_32x32.png"
      />

      {/* <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" /> */}
      {siteDescription && (
        <meta key="description" name="description" content={siteDescription} />
      )}
      {imageUrl && <meta property="og:image" content={imageUrl} />}
    </Head>
  )
}
