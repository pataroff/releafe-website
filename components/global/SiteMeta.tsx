import * as demo from 'lib/demo.data'
import { urlForImage } from 'lib/sanity.image'
import Head from 'next/head'
import type { Image } from 'sanity'

/**
 * All the shared stuff that goes into <head> on `(personal)` routes, can be be imported by `head.tsx` files in the /app dir or wrapped in a <Head> component in the /pages dir.
 */
export function SiteMeta({
  baseTitle,
  description,
  image,
  title,
}: {
  baseTitle?: string
  description?: string
  image?: Image
  title?: string
}) {
  const metaTitle = [
    ...(title ? [title] : []),
    ...(baseTitle ? [baseTitle] : []),
  ].join(' | ')

  const imageUrl =
    image && urlForImage(image)?.width(1200).height(627).fit('crop').url()

  return (
    <Head>
      <title>Releafe - The 1# App for Your Mental Health and Well-Being </title>
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
      {description && (
        <meta key="description" name="description" content={description} />
      )}
      {imageUrl && <meta property="og:image" content={imageUrl} />}
    </Head>
  )
}
