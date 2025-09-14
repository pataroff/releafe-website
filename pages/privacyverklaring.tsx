import { readToken } from 'lib/sanity.api'
import { getClient } from 'lib/sanity.client'
import { GetStaticProps } from 'next'

import { privacyVerklaringPageQuery } from 'lib/sanity.queries'
import { PagePayload } from 'types'

import { PrivacyverklaringPage } from 'components/pages/privacyverklaring/PrivacyverklaringPage'
import { PrivacyverklaringPagePreview } from 'components/pages/privacyverklaring/PrivacyverklaringPagePreview'

export default function PrivacyverklaringRoute(props) {
  const { page, draftMode } = props

  console.log(page)

  if (draftMode) {
    return <PrivacyverklaringPagePreview page={page} />
  }

  return <PrivacyverklaringPage page={page} />
}

export const getStaticProps: GetStaticProps<any, any> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [page] = await Promise.all([
    client.fetch<PagePayload | null>(privacyVerklaringPageQuery),
  ])

  return {
    props: {
      page: page ?? {},
      draftMode,
      token: draftMode ? readToken : null,
    },
    revalidate: 60,
  }
}
