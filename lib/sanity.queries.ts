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
      sectionVariant,
      title,
      body,
      image,
      customElements[]->{
        _id,
        ...,
        category->{
          title
        },
        ctaElement->{
          _type,
          callToActionTitle,
          callToActionText,
          callToActionButtonText,
          callToActionLink
        }
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

export const mentaleKlachtenPageQuery = groq`
  *[_type == "mentaleKlachten"][0]{
    _id,
    sections[]->{
      _id,
      sectionType,
      sectionVariant,
      customElementsVariant,
      title,
      body,
      image,
      customElements[]->{
        _id,
        ...,
        ctaElement->{
          _type,
          callToActionTitle,
          callToActionText,
          callToActionButtonText,
          callToActionLink
        }
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

export const mentaalFitPageQuery = groq`
  *[_type == "mentaalFit"][0]{
    _id,
    sections[]->{
      _id,
      sectionType,
      sectionVariant,
      title,
      body[]{
        ...,
        _type == "inlineCta" => @-> {
          _type,
          callToActionLink,
          callToActionButtonText
        }
      },
      image,
      customElements[]->{
        _id,
        ...,
        ctaElement->{
          _type,
          callToActionTitle,
          callToActionText,
          callToActionButtonText,
          callToActionLink
        }
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

export const ontdekReleafePageQuery = groq`
  *[_type == "ontdekReleafe"][0]{
    _id,
    sections[]->{
      _id,
      sectionType,
      sectionVariant,
      title,
      body[]{
        ...,
        _type == "inlineCta" => @-> {
          _type,
          callToActionLink,
          callToActionButtonText
        }
      },
      image,
      customElements[]->{
        _id,
        ...,
        ctaElement->{
          _type,
          callToActionTitle,
          callToActionText,
          callToActionButtonText,
          callToActionLink
        }
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

export const releafeVoorOrganisatiesPageQuery = groq`
  *[_type == "releafeOrganisaties"][0]{
    _id,
    sections[]->{
      _id,
      sectionType,
      sectionVariant,
      buttonText,
      title,
      body[]{
        ...,
        _type == "inlineCta" => @-> {
          _type,
          callToActionLink,
          callToActionButtonText
        }
      },
      image,
      video,
      customElements[]->{
        _id,
        ...,
        ctaElement->{
          _type,
          callToActionTitle,
          callToActionText,
          callToActionButtonText,
          callToActionLink
        }
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

export const overOnsPageQuery = groq`
  *[_type == "overOns"][0]{
    _id,
    sections[]->{
      _id,
      sectionType,
      sectionVariant,
      buttonText,
      title,
      body[]{
        ...,
      },
      image,
      video,
      customElements[]->{
        _id,
        ...,
        teamMemberSocialMediaLinks[]->{
          _id,
          platform,
          url
        },
        ctaElement->{
          _type,
          callToActionTitle,
          callToActionText,
          callToActionButtonText,
          callToActionLink
        },
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

export const inDeMediaPageQuery = groq`
  *[_type == "inDeMedia"][0]{
    _id,
    sections[]->{
      _id,
      sectionType,
      sectionVariant,
      buttonText,
      title,
      body[]{
        ...,
      },
      image,
      video,
      customElements[]->{
        _id,
        ...,
        ctaElement->{
          _type,
          callToActionTitle,
          callToActionText,
          callToActionButtonText,
          callToActionLink
        },
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

export const blogsPageQuery = groq`
  *[_type == "blogs"][0]{
    _id,
    sections[]->{
      _id,
      sectionType,
      sectionVariant,
      buttonText,
      title,
      body[]{
        ...,
        _type == "reference" => @-> {
          _type,
          callToActionLink,
          callToActionButtonText
        }
      },
      image,
      video,
      customElements[]->{
        _id,
        ...,
        category->{
          title
        },
        ctaElement->{
          _type,
          callToActionTitle,
          callToActionText,
          callToActionButtonText,
          callToActionLink
        },
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

export const onderzoekPageQuery = groq`
  *[_type == "onderzoek"][0]{
    _id,
    sections[]->{
      _id,
      sectionType,
      sectionVariant,
      buttonText,
      title,
      body[]{
        ...,
        _type == "reference" => @-> {
          _type,
          callToActionLink,
          callToActionButtonText
        }
      },
      image,
      video,
      customElements[]->{
        _id,
        ...,
        ctaElement->{
          _type,
          callToActionTitle,
           callToActionText,
          callToActionButtonText,
          callToActionLink
        },
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

export const probeerReleafePageQuery = groq`
  *[_type == "probeerReleafe"][0]{
    _id,
    sections[]->{
      _id,
      sectionType,
      sectionVariant,
      title,
      body[]{
        ...,
        _type == 'cta' => {
          _type,
          "callToActionLink": @->callToActionLink,
          "callToActionButtonText": @->callToActionButtonText
        },
        _type == 'inlineSocialMedia' => {
          _type,
          "platform": @->platform,
          "url": @->url
        }
      },
      image,
      customElements[]->{
        _id,
        ...,
        ctaElement->{
          _type,
          callToActionTitle,
          callToActionText,
          callToActionButtonText,
          callToActionLink
        }
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

export const footerQuery = groq`
  *[_type == "footer"][0]{
    _id,
    sections[]->{
      _id,
      sectionType,
      sectionVariant,
      title,
      body,
      image,
      customElements[]->{
        _id,
        ...,
        ctaElement->{
          _type,
          callToActionTitle,
          callToActionText,
          callToActionButtonText,
          callToActionLink
        }
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
