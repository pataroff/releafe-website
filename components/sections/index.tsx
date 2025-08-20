import { Section } from 'types'

import { HeroLanding } from './hero/HeroLanding'
import { HeroInformational } from './hero/HeroInformational'
import { HeroInformationalOverOns } from './hero/HeroInformationalOverOns'
import { HeroCallToAction } from './hero/HeroCallToAction'

import { HeaderDefault } from './header/HeaderDefault'
import { HeaderInformationalOverOns } from './header/HeaderInformationalOverOns'

import { FeaturesDefault } from './features/FeaturesDefault'
import { CompaniesDefault } from './companies/CompaniesDefault'
import { CustomImageDefault } from './custom-image/CustomImageDefault'
import { TestimonialsDefault } from './testimonials/TestimonialsDefault'
import { ArticlesDefault } from './articles/ArticlesDefault'
import { FAQDefault } from './faq/FAQDefault'

import { InformationalDefault } from './informational/InformationalDefault'
import { InformationalGrouped } from './informational/InformationalGrouped'
import { InformationalMockup } from './informational/InformationalMockup'
import { InformationalOrganisaties } from './informational/InformationalOrganisaties'
import { InformationalOverOns } from './informational/InformationalOverOns'
import { InformationalMedia } from './informational/InformationalMedia'
import { InformationalArticles } from './informational/InformationalArticles'
import { InformationalResearch } from './informational/InformationalResearch'

import { CTADefault } from './cta/CTADefault'
import { InfographicDefault } from './infographic/InfographicDefault'
import { VideoDefault } from './video/VideoDefault'
import { CoreValuesDefault } from './core-values/CoreValuesDefault'
import { TeamDefault } from './team/TeamDefault'

const renderHeroSection = (section: Section) => {
  const { _id, sectionVariant, title, body, image, ctaElement } = section

  switch (sectionVariant) {
    case 'landing':
      return (
        <HeroLanding
          _id={_id}
          title={title}
          body={body}
          image={image}
          ctaElement={ctaElement}
        />
      )

    case 'informational':
      return (
        <HeroInformational
          _id={_id}
          title={title}
          body={body}
          image={image}
          ctaElement={ctaElement}
        />
      )
    case 'informationalOverOns':
      return (
        <HeroInformationalOverOns
          _id={_id}
          title={title}
          body={body}
          image={image}
        />
      )

    case 'cta':
      return (
        <HeroCallToAction _id={_id} title={title} body={body} image={image} />
      )
  }
}

const renderHeaderSection = (section: Section) => {
  const { _id, sectionVariant, title, body } = section

  switch (sectionVariant) {
    case 'default':
      return <HeaderDefault _id={_id} title={title} body={body} />

    case 'informationalOverOns':
      return <HeaderInformationalOverOns _id={_id} title={title} body={body} />
  }
}

const renderFeaturesSection = (section: Section) => {
  const { _id, title, customElements } = section

  return (
    <FeaturesDefault _id={_id} title={title} customElements={customElements} />
  )
}

const renderCompaniesSection = (section: Section) => {
  const { _id, title, customElements } = section

  return (
    <CompaniesDefault _id={_id} title={title} customElements={customElements} />
  )
}

const renderCustomImageSection = (section: Section) => {
  const { _id, image } = section

  return <CustomImageDefault _id={_id} image={image} />
}

const renderTestimonialsSection = (section: Section) => {
  const { _id, title, customElements } = section

  return (
    <TestimonialsDefault
      _id={_id}
      title={title}
      customElements={customElements}
    />
  )
}

const renderArticlesSection = (section: Section) => {
  const { _id, title, customElements, ctaElement } = section

  return (
    <ArticlesDefault
      _id={_id}
      title={title}
      customElements={customElements}
      ctaElement={ctaElement}
    />
  )
}

const renderFaqSection = (section: Section) => {
  const { _id, title, customElements } = section

  return <FAQDefault _id={_id} title={title} customElements={customElements} />
}

const renderInformationalSection = (
  section: Section,
  index: number,
  // @TODO How do we handle the function overloads the right way?
  categories: { title: string }[],
  firstSection: any,
  secondSection: any,
  groupIndex: number,
) => {
  const {
    _id,
    sectionVariant,
    customElementsVariant,
    title,
    body,
    image,
    customElements,
  } = section

  switch (sectionVariant) {
    case 'default':
      return (
        <InformationalDefault
          _id={_id}
          title={title}
          body={body}
          image={image}
          customElementsVariant={customElementsVariant}
          customElements={customElements}
          index={index}
        />
      )

    case 'informationalGrouped':
      return (
        <InformationalGrouped
          _id={_id}
          firstSection={firstSection}
          secondSection={secondSection}
          groupIndex={groupIndex}
        />
      )

    case 'informationalMockup':
      return (
        <InformationalMockup
          _id={_id}
          index={index}
          title={title}
          body={body}
          image={image}
        />
      )

    case 'informationalOrganisaties':
      return (
        <InformationalOrganisaties
          _id={_id}
          title={title}
          body={body}
          image={image}
        />
      )

    case 'informationalOverOns':
      return <InformationalOverOns _id={_id} body={body} />

    case 'informationalMedia':
      return <InformationalMedia _id={_id} customElements={customElements} />

    case 'informationalArticles':
      return (
        <InformationalArticles
          _id={_id}
          customElements={customElements}
          categories={categories}
        />
      )

    case 'informationalResearch':
      return <InformationalResearch _id={_id} title={title} body={body} />
  }
}

const renderCtaSection = (section: Section) => {
  const { _id, ctaElement } = section

  return <CTADefault _id={_id} ctaElement={ctaElement} />
}

const renderInfographicSection = (section: Section) => {
  const { _id, title, customElements } = section

  return (
    <InfographicDefault
      _id={_id}
      title={title}
      customElements={customElements}
    />
  )
}

const renderVideoSection = (section: Section) => {
  const { _id, video } = section

  return <VideoDefault _id={_id} video={video} />
}

const renderCoreValuesSection = (section: Section) => {
  const { _id, title, customElements } = section

  return (
    <CoreValuesDefault
      _id={_id}
      title={title}
      customElements={customElements}
    />
  )
}

const renderTeamSection = (section: Section) => {
  const { _id, title, body, customElements } = section

  return (
    <TeamDefault
      _id={_id}
      title={title}
      body={body}
      customElements={customElements}
    />
  )
}

export const sectionRenderers = {
  hero: renderHeroSection,
  header: renderHeaderSection,
  features: renderFeaturesSection,
  companies: renderCompaniesSection,
  customImage: renderCustomImageSection,
  testimonials: renderTestimonialsSection,
  articles: renderArticlesSection,
  faq: renderFaqSection,
  informational: renderInformationalSection,
  cta: renderCtaSection,
  infographic: renderInfographicSection,
  video: renderVideoSection,
  coreValues: renderCoreValuesSection,
  team: renderTeamSection,
}
