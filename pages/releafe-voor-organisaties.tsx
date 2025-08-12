import { readToken } from 'lib/sanity.api'
import { getClient } from 'lib/sanity.client'
import { homePageQuery } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import { HomePagePayload } from 'types'

import ReleafeVoorOrganisatiesPage from 'components/pages/releafe-voor-organisaties/ReleafeVoorOrganisatiesPage'

export default function ReleafeVoorBedrijvenRoute(props) {
  const { page } = props

  return <ReleafeVoorOrganisatiesPage page={page} />
}

export const getStaticProps: GetStaticProps<any, any> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [page] = await Promise.all([
    client.fetch<HomePagePayload | null>(homePageQuery),
  ])

  return {
    props: {
      page: page ?? {},
      draftMode,
      token: draftMode ? readToken : null,
    },
  }
}
