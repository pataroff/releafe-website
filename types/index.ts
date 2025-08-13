import type {
  PortableTextBlock,
  PortableTextMarkDefinition,
} from '@portabletext/types'
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
  companyName?: string
  companyLogo: Image
  altText?: string
  companyWebsite?: string
}

export interface FeatureItem {
  _type: string
  featureName: string
  featureDescrption: string
  image: Image
  ctaElement: CTAElement
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

export interface CTAElement {
  _type: string
  callToActionTitle?: string
  callToActionText?: string
  callToActionButtonText?: string
  callToActionLink?: string
}

export interface Section {
  _id: string
  sectionType: string
  sectionVariant: string
  title?: string
  body?: PortableTextMarkDefinition[]
  image: Image
  customElements?: any[] // you can replace with more specific type if you want
  ctaElement?: CTAElement
}

// SINGLETONS
export interface SettingsPayload {
  siteTitle?: string
  siteDescription?: string
  navbarItems?: NavbarItem[]
  ogImage?: Image
}

export interface NavbarPayload {
  navbarItems?: NavbarItem[]
}

export interface PagePayload {
  sections?: Section[]
}
