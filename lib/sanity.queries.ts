import { groq } from 'next-sanity'

// SINGLETONS
export const settingsQuery = groq`
  *[_type == "settings"][0]{
    siteTitle,
    siteDescription,
    ogImage
  }
`

export const navbarQuery = groq`
  *[_type == "navbar"][0]{
    _id,
    navbarItems[]->{
      _id,
      _type,
      title,
      slug {
        current
      }
    }
  }
`

export const homePageQuery = groq`
  *[_type == "home"][0]{
    _id,
    sections[]->{
      _id,
      sectionType,
      title,
      body,
      customElement->{
        _type,
        ...
      },
      ctaElement->{
        _type,
        callToActionTitle,
        callToActionText,
        callToActionButtonText,
        callToActionLink
      }
    }
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

export const partnersQuery = groq`
  *[_type == "partners"][0]{
  title,
    partners[]{
      name,
      logo,
      alt,
      url
    }
  }
`

export const featuresQuery = groq`
  *[_type == "features"][0]{
    title,
    features[]{
      title,
      description,
      image,
      ctaText,
      ctaLink
    }
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

export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(_createdAt desc){
    _id,
    quote,
    authorName,
    authorLocation,
    authorRole,
    topic
  }
`

export const faqQuery = groq`
  *[_type == "faq"] | order(_createdAt asc){
    _id,
    question,
    answer
  }
`
