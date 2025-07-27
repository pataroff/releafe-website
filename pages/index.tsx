import { HomePage } from 'components/pages/home/HomePage'
import HomePagePreview from 'components/pages/home/HomePagePreview'
import { readToken } from 'lib/sanity.api'
import { getClient } from 'lib/sanity.client'
import {
  homePageQuery,
  settingsQuery,
  featuresQuery,
  partnersQuery,
  testimonialsQuery,
  articlesQuery,
  faqQuery,
} from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import {
  HomePagePayload,
  SettingsPayload,
  FeaturesPayload,
  PartnersPayload,
  TestimonialPayload,
  ArticlePayload,
  FAQPayload,
} from 'types'

import type { SharedPageProps } from './_app'

interface PageProps extends SharedPageProps {
  page: HomePagePayload
  settings: SettingsPayload
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
  const {
    page,
    settings,
    features,
    partners,
    draftMode,
    testimonials,
    articles,
    faq,
  } = props

  if (draftMode) {
    return (
      <HomePagePreview
        page={page}
        settings={settings}
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
      settings={settings}
      features={features}
      partners={partners}
      testimonials={testimonials}
      articles={articles}
      faq={faq}
    />
  )
}

const fallbackPage: HomePagePayload = {
  title: '',
  overview: [],
  showcaseProjects: [],
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [settings, page, features, partners, testimonials, articles, faq] =
    await Promise.all([
      client.fetch<SettingsPayload | null>(settingsQuery),
      client.fetch<HomePagePayload | null>(homePageQuery),
      client.fetch<FeaturesPayload | null>(featuresQuery),
      client.fetch<PartnersPayload | null>(partnersQuery),
      client.fetch<TestimonialPayload[] | null>(testimonialsQuery),
      client.fetch<ArticlePayload[] | null>(articlesQuery),
      client.fetch<FAQPayload[] | null>(faqQuery),
    ])

  return {
    props: {
      page: page ?? fallbackPage,
      // @TODO: Add proper fallbacks!
      settings: settings ?? {},
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
