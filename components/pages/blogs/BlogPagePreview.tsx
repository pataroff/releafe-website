import { articleBySlugQuery } from 'lib/sanity.queries'
import { useLiveQuery } from 'next-sanity/preview'
import type { ArticlePayload } from 'types'

import { BlogPage } from './BlogPage'

export function BlogPagePreview({
  article: initialArticle,
}: {
  article: ArticlePayload
}) {
  const [article] = useLiveQuery<ArticlePayload | null>(
    initialArticle,
    articleBySlugQuery,
    { slug: initialArticle.slug },
  )

  if (!article) {
    return (
      <div className="text-center">
        Please start editing your Blog document to see the preview!
      </div>
    )
  }

  return <BlogPage article={article} />
}
