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

export interface ArticlePayload {
  _id: string
  title?: string
  excerpt?: string
  body?: PortableTextBlock[]
  publishedAt?: string
  coverImage?: Image
  slug?: string
  author?: {
    name?: string
    image?: Image
    bio?: string
  }
  categories?: {
    title?: string
    slug?: string
  }[]
}
