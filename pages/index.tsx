import { HomePage } from 'components/pages/home/HomePage'
import HomePagePreview from 'components/pages/home/HomePagePreview'
import { readToken } from 'lib/sanity.api'
import { getClient } from 'lib/sanity.client'
import {
  homePageQuery,
  featuresQuery,
  partnersQuery,
  testimonialsQuery,
  articlesQuery,
  faqQuery,
} from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import {
  HomePagePayload,
  FeaturesPayload,
  PartnersPayload,
  TestimonialPayload,
  ArticlePayload,
  FAQPayload,
} from 'types'

import type { SharedPageProps } from './_app'

interface PageProps extends SharedPageProps {
  page: HomePagePayload
  features: FeaturesPayload
  partners: PartnersPayload
  testimonials: TestimonialPayload[]
  articles: ArticlePayload[]
  faq: FAQPayload[]
}

interface Query {
  [key: string]: string
}

export default function IndexPage(props: PageProps) {
  const { page, features, partners, draftMode, testimonials, articles, faq } =
    props

  if (draftMode) {
    return (
      <HomePagePreview
        page={page}
        features={features}
        partners={partners}
        testimonials={testimonials}
        articles={articles}
        faq={faq}
      />
    )
  }

  return (
    <HomePage
      page={page}
      features={features}
      partners={partners}
      testimonials={testimonials}
      articles={articles}
      faq={faq}
    />
  )
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [page, features, partners, testimonials, articles, faq] =
    await Promise.all([
      client.fetch<HomePagePayload | null>(homePageQuery),
      client.fetch<FeaturesPayload | null>(featuresQuery),
      client.fetch<PartnersPayload | null>(partnersQuery),
      client.fetch<TestimonialPayload[] | null>(testimonialsQuery),
      client.fetch<ArticlePayload[] | null>(articlesQuery),
      client.fetch<FAQPayload[] | null>(faqQuery),
    ])

  return {
    props: {
      // @TODO: Add proper fallbacks!
      page: page ?? {},
      features: features ?? {},
      partners: partners ?? {},
      testimonials: testimonials ?? [],
      articles: articles ?? [],
      faq: faq ?? [],
      draftMode,
      token: draftMode ? readToken : null,
    },
  }
}
