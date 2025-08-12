import { readToken } from 'lib/sanity.api'
import { getClient } from 'lib/sanity.client'
import {
  homePageQuery,
  articlesQuery,
  categoriesQuery,
} from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import { HomePagePayload, ArticlePayload, CategoryPayload } from 'types'

import BlogsPage from 'components/pages/blogs/BlogsPage'

type Props = {
  page: HomePagePayload
  articles: ArticlePayload[]
  categories: CategoryPayload[]
  draftMode: boolean
  token: string | null
}

export default function BlogsRoute({ page, articles, categories }: Props) {
  return <BlogsPage page={page} articles={articles} categories={categories} />
}

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [page, articles, categories] = await Promise.all([
    client.fetch<HomePagePayload | null>(homePageQuery),
    client.fetch<ArticlePayload[] | null>(articlesQuery),
    client.fetch<CategoryPayload[] | null>(categoriesQuery),
  ])

  return {
    props: {
      page: page ?? {},
      articles: articles ?? [],
      categories: categories ?? [],
      draftMode,
      token: draftMode ? readToken : null,
    },
  }
}
