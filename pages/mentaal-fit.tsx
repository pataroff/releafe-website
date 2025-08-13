import { readToken } from 'lib/sanity.api'
import { getClient } from 'lib/sanity.client'
import { mentaalFitPageQuery } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import { PagePayload } from 'types'

import MentaalFitPage from 'components/pages/mentaal-fit/MentaalFitPage'

export default function MentaalFitRoute(props) {
  const { page } = props

  return <MentaalFitPage page={page} />
}

export const getStaticProps: GetStaticProps<any, any> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [page] = await Promise.all([
    client.fetch<PagePayload | null>(mentaalFitPageQuery),
  ])

  return {
    props: {
      page: page ?? {},
      draftMode,
      token: draftMode ? readToken : null,
    },
  }
}
