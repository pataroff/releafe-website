import Head from 'next/head'

import { SettingsPayload } from 'types'

import { urlForImage } from 'lib/sanity.image'

export function SiteMeta({ settings }: { settings: SettingsPayload }) {
  const { siteTitle, siteDescription, siteKeywords, siteRobots, ogImage } =
    settings

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

      {siteDescription && (
        <meta key="description" name="description" content={siteDescription} />
      )}
      {siteKeywords && (
        <meta key="keywords" name="keywords" content={siteKeywords} />
      )}

      {siteRobots && <meta name="robots" content={siteRobots} />}

      {imageUrl && <meta property="og:image" content={imageUrl} />}
    </Head>
  )
}
