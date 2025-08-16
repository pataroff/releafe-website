import { readToken } from 'lib/sanity.api'
import { getClient } from 'lib/sanity.client'
import { blogsPageQuery, categoriesQuery } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import { PagePayload, CategoryPayload } from 'types'

import BlogsPage from 'components/pages/blogs/BlogsPage'

type Props = {
  page: PagePayload
  categories: CategoryPayload[]
  draftMode: boolean
  token: string | null
}

export default function BlogsRoute({ page, categories }: Props) {
  return <BlogsPage page={page} categories={categories} />
}

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  // @TODO Do we need 2 separate queries here?
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
