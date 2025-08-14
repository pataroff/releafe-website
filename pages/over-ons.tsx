import { readToken } from 'lib/sanity.api'
import { getClient } from 'lib/sanity.client'
import { GetStaticProps } from 'next'

import { overOnsPageQuery } from 'lib/sanity.queries'
import { PagePayload } from 'types'

import OverOnsPage from 'components/pages/over-ons/OverOnsPage'

export default function OverOnsRoute(props) {
  const { page } = props

  return <OverOnsPage page={page} />
}

export const getStaticProps: GetStaticProps<any, any> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [page] = await Promise.all([
    client.fetch<PagePayload | null>(overOnsPageQuery),
  ])

  return {
    props: {
      page: page ?? {},
      draftMode,
      token: draftMode ? readToken : null,
    },
  }
}
