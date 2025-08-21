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
  const { sectionVariant, title, body, image, ctaElement } = section

  switch (sectionVariant) {
    case 'landing':
      return (
        <HeroLanding
          title={title}
          body={body}
          image={image}
          ctaElement={ctaElement}
        />
      )

    case 'informational':
      return (
        <HeroInformational
          title={title}
          body={body}
          image={image}
          ctaElement={ctaElement}
        />
      )
    case 'informationalOverOns':
      return (
        <HeroInformationalOverOns title={title} body={body} image={image} />
      )

    case 'cta':
      return <HeroCallToAction title={title} body={body} image={image} />
  }
}

const renderHeaderSection = (section: Section) => {
  const { sectionVariant, title, body } = section

  switch (sectionVariant) {
    case 'default':
      return <HeaderDefault title={title} body={body} />

    case 'informationalOverOns':
      return <HeaderInformationalOverOns title={title} body={body} />
  }
}

const renderFeaturesSection = (section: Section) => {
  const { title, customElements } = section

  return <FeaturesDefault title={title} customElements={customElements} />
}

const renderCompaniesSection = (section: Section) => {
  const { _id, title, customElements } = section

  return (
    <CompaniesDefault _id={_id} title={title} customElements={customElements} />
  )
}

const renderCustomImageSection = (section: Section) => {
  const { image } = section

  return <CustomImageDefault image={image} />
}

const renderTestimonialsSection = (section: Section) => {
  const { title, customElements } = section

  return <TestimonialsDefault title={title} customElements={customElements} />
}

const renderArticlesSection = (section: Section) => {
  const { title, customElements, ctaElement } = section

  return (
    <ArticlesDefault
      title={title}
      customElements={customElements}
      ctaElement={ctaElement}
    />
  )
}

const renderFaqSection = (section: Section) => {
  const { title, faqCategoryText, customElements } = section

  return (
    <FAQDefault
      title={title}
      faqCategoryText={faqCategoryText}
      customElements={customElements}
    />
  )
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
          firstSection={firstSection}
          secondSection={secondSection}
          groupIndex={groupIndex}
        />
      )

    case 'informationalMockup':
      return (
        <InformationalMockup
          index={index}
          title={title}
          body={body}
          image={image}
        />
      )

    case 'informationalOrganisaties':
      return (
        <InformationalOrganisaties title={title} body={body} image={image} />
      )

    case 'informationalOverOns':
      return <InformationalOverOns body={body} />

    case 'informationalMedia':
      return <InformationalMedia customElements={customElements} />

    case 'informationalArticles':
      return (
        <InformationalArticles
          customElements={customElements}
          categories={categories}
        />
      )

    case 'informationalResearch':
      return <InformationalResearch title={title} body={body} />
  }
}

const renderCtaSection = (section: Section) => {
  const { ctaElement } = section

  return <CTADefault ctaElement={ctaElement} />
}

const renderInfographicSection = (section: Section) => {
  const { title, customElements } = section

  return <InfographicDefault title={title} customElements={customElements} />
}

const renderVideoSection = (section: Section) => {
  const { video } = section

  return <VideoDefault video={video} />
}

const renderCoreValuesSection = (section: Section) => {
  const { title, customElements } = section

  return <CoreValuesDefault title={title} customElements={customElements} />
}

const renderTeamSection = (section: Section) => {
  const { title, body, customElements } = section

  return (
    <TeamDefault title={title} body={body} customElements={customElements} />
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
