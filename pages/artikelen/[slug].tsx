import ArtikelPage from 'components/pages/artikelen/ArtikelPage'
// import ArticlePreview from 'components/pages/artikelen/ArticlePreview'
import { readToken } from 'lib/sanity.api'
import { getClient } from 'lib/sanity.client'
import { resolveHref } from 'lib/sanity.links'
import {
  articleBySlugQuery,
  articlePathsQuery,
  settingsQuery,
} from 'lib/sanity.queries'
import type { GetStaticProps } from 'next'
import { ArticlePayload, SettingsPayload } from 'types'

import type { SharedPageProps } from '../_app'

interface PageProps extends SharedPageProps {
  article?: ArticlePayload
  settings?: SettingsPayload
}

interface Query {
  [key: string]: string
}

export default function ArticleSlugRoute(props: PageProps) {
  const { article, settings, draftMode } = props

  //   if (draftMode) {
  //     return <ArticlePreview article={article} settings={settings} />
  //   }

  return <ArtikelPage article={article} settings={settings} />
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false, params = {} } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [settings, article] = await Promise.all([
    client.fetch<SettingsPayload | null>(settingsQuery),
    client.fetch<ArticlePayload | null>(articleBySlugQuery, {
      slug: params.slug,
    }),
  ])

  //   if (!article) {
  //     return {
  //       notFound: true,
  //       revalidate: 1,
  //     }
  //   }

  return {
    props: {
      article,
      settings: settings ?? {},
      draftMode,
      token: draftMode ? readToken : null,
    },
    revalidate: 10,
  }
}

export const getStaticPaths = async () => {
  const client = getClient()
  const paths = await client.fetch<string[]>(articlePathsQuery)

  return {
    paths: paths?.map((slug) => resolveHref('article', slug)) || [],
    fallback: true,
  }
}
