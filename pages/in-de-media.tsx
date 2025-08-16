import { readToken } from 'lib/sanity.api'
import { getClient } from 'lib/sanity.client'
import { GetStaticProps } from 'next'

import { inDeMediaPageQuery } from 'lib/sanity.queries'
import { PagePayload } from 'types'

import InDeMediaPage from 'components/pages/in-de-media/InDeMediaPage'

export default function InDeMediaRoute(props) {
  const { page } = props

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
