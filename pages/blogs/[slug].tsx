import { readToken } from 'lib/sanity.api'
import { getClient } from 'lib/sanity.client'
import { articleBySlugQuery, articlePathsQuery } from 'lib/sanity.queries'
import type { GetStaticProps } from 'next'
import { ArticlePayload } from 'types'

import type { SharedPageProps } from '../_app'

import { BlogPage } from 'components/pages/blogs/BlogPage'
import { BlogPagePreview } from 'components/pages/blogs/BlogPagePreview'

interface PageProps extends SharedPageProps {
  article?: ArticlePayload
}

interface Query {
  [key: string]: string
}

export default function BlogSlugRoute(props: PageProps) {
  const { article, draftMode } = props

  if (draftMode) {
    return <BlogPagePreview article={article} />
  }

  return <BlogPage article={article} />
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false, params = {} } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  // Fetch settings and article by slug
  const [article] = await Promise.all([
    client.fetch<ArticlePayload | null>(articleBySlugQuery, {
      slug: params.slug,
    }),
  ])

  if (!article) {
    // return 404 page manually
    return {
      notFound: true,
    }
  }

  return {
    props: {
      article,
      draftMode,
      token: draftMode ? readToken : null,
    },
    revalidate: 10,
  }
}

export const getStaticPaths = async () => {
  const client = getClient()
  // Expect articlePathsQuery to return array of slugs (strings)
  const slugs = await client.fetch<string[]>(articlePathsQuery)

  return {
    paths:
      slugs?.map((slug) => ({
        params: { slug },
      })) || [],
    fallback: 'blocking', // blocking fallback to avoid "Loading" UI flicker
  }
}
