import { readToken } from 'lib/sanity.api'
import { getClient } from 'lib/sanity.client'
import { GetStaticProps } from 'next'

import { algemeneVoorwaardenPageQuery } from 'lib/sanity.queries'
import { PagePayload } from 'types'

import { AlgemeneVoorwaardenPage } from 'components/pages/algemene-voorwaarden/AlgemeneVoorwaardenPage'
import { AlgemeneVoorwaardenPagePreview } from 'components/pages/algemene-voorwaarden/AlgemeneVoorwaardenPagePreview'

export default function AlgemeneVoorwaardenRoute(props) {
  const { page, draftMode } = props

  console.log(page)

  //   if (draftMode) {
  //     return <AlgemeneVoorwaardenPagePreview page={page} />
  //   }

  return <AlgemeneVoorwaardenPage page={page} />
}

export const getStaticProps: GetStaticProps<any, any> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [page] = await Promise.all([
    client.fetch<PagePayload | null>(algemeneVoorwaardenPageQuery),
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
