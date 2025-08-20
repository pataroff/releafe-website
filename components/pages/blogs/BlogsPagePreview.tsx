import { blogsPageQuery, categoriesQuery } from 'lib/sanity.queries'
import { useLiveQuery } from 'next-sanity/preview'
import { CategoryPayload, type PagePayload } from 'types'

import { BlogsPage } from './BlogsPage'

export function BlogsPagePreview({
  page: initialPage,
  categories: initialCategories,
}) {
  const [page] = useLiveQuery<PagePayload | null>(initialPage, blogsPageQuery)

  const [categories] = useLiveQuery<CategoryPayload | null>(
    initialCategories,
    categoriesQuery,
  )

  if (!page) {
    return (
      <div className="text-center">
        Please start editing your Blogs document to see the preview!
      </div>
    )
  }

  return <BlogsPage page={page} categories={categories} />
}
