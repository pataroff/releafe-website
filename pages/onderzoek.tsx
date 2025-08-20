import { readToken } from 'lib/sanity.api'
import { getClient } from 'lib/sanity.client'
import { GetStaticProps } from 'next'

import { onderzoekPageQuery } from 'lib/sanity.queries'
import { PagePayload } from 'types'

import { OnderzoekPage } from 'components/pages/onderzoek/OnderzoekPage'
import { OnderzoekPagePreview } from 'components/pages/onderzoek/OnderzoekPagePreview'

export default function OnderzoekRoute(props) {
  const { page, draftMode } = props

  if (draftMode) {
    return <OnderzoekPagePreview page={page} />
  }

  return <OnderzoekPage page={page} />
}

export const getStaticProps: GetStaticProps<any, any> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [page] = await Promise.all([
    client.fetch<PagePayload | null>(onderzoekPageQuery),
  ])

  return {
    props: {
      page: page ?? {},
      draftMode,
      token: draftMode ? readToken : null,
    },
  }
}
