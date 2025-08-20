import { readToken } from 'lib/sanity.api'
import { getClient } from 'lib/sanity.client'

import { GetStaticProps } from 'next'

import { homePageQuery } from 'lib/sanity.queries'
import { PagePayload } from 'types'

import type { SharedPageProps } from './_app'

import { HomePage } from 'components/pages/home/HomePage'
import { HomePagePreview } from 'components/pages/home/HomePagePreview'

interface PageProps extends SharedPageProps {
  page: PagePayload
}

interface Query {
  [key: string]: string
}

export default function IndexPage(props: PageProps) {
  const { page, draftMode } = props

  if (draftMode) {
    return <HomePagePreview page={page} />
  }

  return <HomePage page={page} />
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [page] = await Promise.all([
    client.fetch<PagePayload | null>(homePageQuery),
  ])

  return {
    props: {
      // @TODO: Add proper fallbacks!
      page: page ?? {},
      draftMode,
      token: draftMode ? readToken : null,
    },
  }
}
