import { readToken } from 'lib/sanity.api'
import { getClient } from 'lib/sanity.client'
import {
  homePageQuery,
  settingsQuery,
  articlesQuery,
  categoriesQuery,
} from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import {
  HomePagePayload,
  SettingsPayload,
  ArticlePayload,
  CategoryPayload,
} from 'types'

import BlogsPage from 'components/pages/blogs/BlogsPage'

type Props = {
  settings: SettingsPayload
  page: HomePagePayload
  articles: ArticlePayload[]
  categories: CategoryPayload[]
  draftMode: boolean
  token: string | null
}

export default function BlogsRoute({
  settings,
  page,
  articles,
  categories,
}: Props) {
  return (
    <BlogsPage
      settings={settings}
      page={page}
      articles={articles}
      categories={categories}
    />
  )
}

const fallbackPage: HomePagePayload = {
  title: '',
  overview: [],
  showcaseProjects: [],
}

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [settings, page, articles, categories] = await Promise.all([
    client.fetch<SettingsPayload | null>(settingsQuery),
    client.fetch<HomePagePayload | null>(homePageQuery),
    client.fetch<ArticlePayload[] | null>(articlesQuery),
    client.fetch<CategoryPayload[] | null>(categoriesQuery),
  ])

  return {
    props: {
      page: page ?? fallbackPage,
      settings: settings ?? {},
      articles: articles ?? [],
      categories: categories ?? [],
      draftMode,
      token: draftMode ? readToken : null,
    },
  }
}
