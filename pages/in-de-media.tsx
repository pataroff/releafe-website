import { readToken } from 'lib/sanity.api'
import { getClient } from 'lib/sanity.client'
import { GetStaticProps } from 'next'

import { inDeMediaPageQuery } from 'lib/sanity.queries'
import { PagePayload } from 'types'

import { InDeMediaPage } from 'components/pages/in-de-media/InDeMediaPage'
import { InDeMediaPagePreview } from 'components/pages/in-de-media/InDeMediaPagePreview'

export default function InDeMediaRoute(props) {
  const { page, draftMode } = props

  if (draftMode) {
    return <InDeMediaPagePreview page={page} />
  }

  return <InDeMediaPage page={page} />
}

export const getStaticProps: GetStaticProps<any, any> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [page] = await Promise.all([
    client.fetch<PagePayload | null>(inDeMediaPageQuery),
  ])

  return {
    props: {
      page: page ?? {},
      draftMode,
      token: draftMode ? readToken : null,
    },
  }
}
