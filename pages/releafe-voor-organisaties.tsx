import { readToken } from 'lib/sanity.api'
import { getClient } from 'lib/sanity.client'
import { GetStaticProps } from 'next'

import { PagePayload } from 'types'
import { releafeVoorOrganisatiesPageQuery } from 'lib/sanity.queries'

import ReleafeVoorOrganisatiesPage from 'components/pages/releafe-voor-organisaties/ReleafeVoorOrganisatiesPage'

export default function ReleafeVoorBedrijvenRoute(props) {
  const { page } = props

  return <ReleafeVoorOrganisatiesPage page={page} />
}

export const getStaticProps: GetStaticProps<any, any> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [page] = await Promise.all([
    client.fetch<PagePayload | null>(releafeVoorOrganisatiesPageQuery),
  ])

  return {
    props: {
      page: page ?? {},
      draftMode,
      token: draftMode ? readToken : null,
    },
  }
}
