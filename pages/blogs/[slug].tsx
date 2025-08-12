import BlogPage from 'components/pages/blogs/BlogPage'
// import ArticlePreview from 'components/pages/artikelen/ArticlePreview'
import { readToken } from 'lib/sanity.api'
import { getClient } from 'lib/sanity.client'
import {
  articleBySlugQuery,
  articlePathsQuery,
  settingsQuery,
} from 'lib/sanity.queries'
import type { GetStaticProps } from 'next'
import { ArticlePayload } from 'types'

import type { SharedPageProps } from '../_app'

interface PageProps extends SharedPageProps {
  article?: ArticlePayload
}

interface Query {
  slug?: string
}

export default function BlogSlugRoute(props: PageProps) {
  const { article, draftMode } = props

  // Uncomment if you want preview mode with a separate component
  // if (draftMode) {
  //   return <ArticlePreview article={article} settings={settings} />
  // }

  // Show a loading or fallback UI when fallback: true and page is not yet generated
  if (!article) {
    return <div>Loading article...</div>
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

  // If article not found, return 404 (optional)
  if (!article) {
    return {
      notFound: true,
      revalidate: 10,
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
