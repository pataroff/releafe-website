import { groq } from 'next-sanity'

export const homePageQuery = groq`
  *[_type == "home"][0]{
    _id,
    footer,
    overview,
    showcaseProjects[]->{
      _type,
      coverImage,
      overview,
      "slug": slug.current,
      tags,
      title,
    },
    title,
  }
`

export const homePageTitleQuery = groq`
  *[_type == "home"][0].title
`

export const pagesBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    body,
    overview,
    title,
    "slug": slug.current,
  }
`

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    client,
    coverImage,
    description,
    duration,
    overview,
    site,
    "slug": slug.current,
    tags,
    title,
  }
`

export const projectPaths = groq`
  *[_type == "project" && slug.current != null].slug.current
`

export const pagePaths = groq`
  *[_type == "page" && slug.current != null].slug.current
`

export const settingsQuery = groq`
  *[_type == "settings"][0]{
    navbarItems[]->{
      _type,
      title,
      "slug": slug.current,
    },
    ogImage,
  }
`

export const categoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    title
  }
`

export const articlesQuery = groq`
  *[_type == "article" && defined(slug.current)] | order(_createdAt desc) {
    category-> {
    title
    },
    title,
    "slug": slug.current,
    authorName,
    authorRole,
    coverImage,
    callToActionTitle,
    callToActionText,
    callToActionButtonText,
    callToActionLink,
    externalResources
  }
`

export const articleBySlugQuery = `
  *[_type == "article" && slug.current == $slug][0]{
    title,
    "slug": slug.current,
    authorName,
    authorRole,
    coverImage,
    body,
    callToActionTitle,
    callToActionText,
    callToActionButtonText,
    callToActionLink,
    externalResources
  }
`

export const articlePathsQuery = `*[_type == "article" && defined(slug.current)][].slug.current`
