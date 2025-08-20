import { readToken } from 'lib/sanity.api'
import { getClient } from 'lib/sanity.client'
import { blogsPageQuery, categoriesQuery } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import { PagePayload, CategoryPayload } from 'types'

import { BlogsPage } from 'components/pages/blogs/BlogsPage'
import { BlogsPagePreview } from 'components/pages/blogs/BlogsPagePreview'

export default function BlogsRoute({ page, categories, draftMode }) {
  if (draftMode) {
    return <BlogsPagePreview page={page} categories={categories} />
  }

  return <BlogsPage page={page} categories={categories} />
}

export const getStaticProps: GetStaticProps<any> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [page, categories] = await Promise.all([
    client.fetch<PagePayload | null>(blogsPageQuery),
    client.fetch<CategoryPayload[] | null>(categoriesQuery),
  ])

  return {
    props: {
      page: page ?? {},
      categories: categories ?? [],
      draftMode,
      token: draftMode ? readToken : null,
    },
  }
}
