import { HomePage } from 'components/pages/home/HomePage'
import HomePagePreview from 'components/pages/home/HomePagePreview'
import { readToken } from 'lib/sanity.api'
import { getClient } from 'lib/sanity.client'
import {
  settingsQuery,
  navbarQuery,
  homePageQuery,
  featuresQuery,
  partnersQuery,
  testimonialsQuery,
  articlesQuery,
  faqQuery,
} from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import {
  SettingsPayload,
  NavbarPayload,
  HomePagePayload,
  FeaturesPayload,
  PartnersPayload,
  TestimonialPayload,
  ArticlePayload,
  FAQPayload,
} from 'types'

import type { SharedPageProps } from './_app'

interface PageProps extends SharedPageProps {
  settings: SettingsPayload
  navbar: NavbarPayload
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
  const {
    settings,
    navbar,
    page,
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
        settings={settings}
        navbar={navbar}
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
      settings={settings}
      navbar={navbar}
      page={page}
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

  const [
    settings,
    navbar,
    page,
    features,
    partners,
    testimonials,
    articles,
    faq,
  ] = await Promise.all([
    client.fetch<SettingsPayload | null>(settingsQuery),
    client.fetch<NavbarPayload | null>(navbarQuery),
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
      settings: settings ?? {},
      navbar: navbar ?? {},
      page: page ?? fallbackPage,
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
