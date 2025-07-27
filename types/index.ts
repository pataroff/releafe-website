import type { PortableTextBlock } from '@portabletext/types'
import type { Image } from 'sanity'

export interface NavbarItem {
  _type: string
  title: string
  slug: string
}

export interface MilestoneItem {
  description?: string
  duration?: {
    start?: string
    end?: string
  }
  image?: Image
  tags?: string[]
  title?: string
}

export interface ShowcaseProject {
  _type: string
  coverImage?: Image
  overview?: PortableTextBlock[]
  slug?: string
  tags?: string[]
  title?: string
}

export interface CompanyItem {
  _type: string
  name: string
  logo: Image
  alt?: string
  url?: string
}

export interface FeatureItem {
  _type: string
  title: string
  description: string
  image: Image
  ctaText: string
  ctaLink: string
}

// Page payloads

export interface HomePagePayload {
  footer?: PortableTextBlock[]
  overview?: PortableTextBlock[]
  showcaseProjects?: ShowcaseProject[]
  title?: string
}

export interface PagePayload {
  body?: PortableTextBlock[]
  name?: string
  overview?: PortableTextBlock[]
  title?: string
  slug?: string
}

export interface PartnersPayload {
  title?: string
  partners?: CompanyItem[]
}

export interface FeaturesPayload {
  title?: string
  features?: FeatureItem[]
}

export interface ProjectPayload {
  client?: string
  coverImage?: Image
  description?: PortableTextBlock[]
  duration?: {
    start?: string
    end?: string
  }
  overview?: PortableTextBlock[]
  site?: string
  slug: string
  tags?: string[]
  title?: string
}

export interface SettingsPayload {
  navbarItems?: NavbarItem[]
  ogImage?: Image
}

export interface CategoryPayload {
  title: string
}

export interface ArticlePayload {
  category: { title: string }
  title: string
  slug: string
  authorName: string
  authorRole: string
  coverImage?: {
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  body: any[] // You likely use `PortableText` rendering component for this
  callToActionTitle?: string
  callToActionText?: string
  callToActionButtonText?: string
  callToActionLink?: string
  externalResources?: any[]
}

export interface TestimonialPayload {
  quote: string
  authorName: string
  authorLocation: string
  authorRole: string
  topic: string
}

export interface FAQPayload {
  question: string
  answer: string
}
