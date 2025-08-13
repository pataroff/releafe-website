import { readToken } from 'lib/sanity.api'
import { getClient } from 'lib/sanity.client'
import { ontdekReleafePageQuery } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import { PagePayload } from 'types'

import OntdekReleafePage from 'components/pages/ontdek-releafe/OntdekReleafePage'

export default function ProbeerReleafeGratisRoute(props) {
  const { page } = props

  return <OntdekReleafePage page={page} />
}

export const getStaticProps: GetStaticProps<any, any> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [page] = await Promise.all([
    client.fetch<PagePayload | null>(ontdekReleafePageQuery),
  ])

  return {
    props: {
      page: page ?? {},
      draftMode,
      token: draftMode ? readToken : null,
    },
  }
}
