import { readToken } from 'lib/sanity.api'
import { getClient } from 'lib/sanity.client'
import { GetStaticProps } from 'next'

import { mentaleKlachtenPageQuery } from 'lib/sanity.queries'
import { PagePayload } from 'types'

import { MentaleKlachtenPage } from 'components/pages/mentale-klachten/MentaleKlachtenPage'
import { MentaleKlachtenPreview } from 'components/pages/mentale-klachten/MentaleKlachtenPreview'

export default function MentaleKlachtenRoute(props) {
  const { page, draftMode } = props

  if (draftMode) {
    return <MentaleKlachtenPreview page={page} />
  }

  return <MentaleKlachtenPage page={page} />
}

export const getStaticProps: GetStaticProps<any, any> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [page] = await Promise.all([
    client.fetch<PagePayload | null>(mentaleKlachtenPageQuery),
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
