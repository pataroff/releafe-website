import React from 'react'

import ScrollUp from 'components/shared/ScrollUp'

import { Section } from 'types'
import { sectionRenderers } from 'components/sections'

export const OntdekReleafePage = ({ page }) => {
  const { sections } = page

  if (!sections || sections.length === 0) return null

  // Find hero index
  const heroIndex = sections.findIndex(
    (section) => section.sectionType === 'hero',
  )

  const beforeHero =
    heroIndex === -1 ? sections : sections.slice(0, heroIndex + 1)
  const afterHero = heroIndex === -1 ? [] : sections.slice(heroIndex + 1)

  // Extract mockup sections
  const mockupSections = afterHero.filter(
    (s) => s.sectionVariant === 'informationalMockup',
  )

  // Other sections after hero (non-mockup)
  const otherSections = afterHero.filter(
    (s) => s.sectionVariant !== 'informationalMockup',
  )

  return (
    <>
      {/* Sections before (and including) hero */}
      {beforeHero.map((section: Section, index: number) => {
        const renderSectionFn = sectionRenderers[section.sectionType]
        if (!renderSectionFn) return null

        return (
          <React.Fragment key={section._id}>
            {renderSectionFn(section, index)}
          </React.Fragment>
        )
      })}

      {afterHero.length > 0 && (
        <div className="bg-[#F7F7F7] flex flex-col">
          {/* Render other sections normally */}
          {otherSections.map((section, index) => {
            const renderSectionFn = sectionRenderers[section.sectionType]
            if (!renderSectionFn) return null

            return (
              <React.Fragment key={section._id}>
                {renderSectionFn(section, index + beforeHero.length)}
              </React.Fragment>
            )
          })}

          {/* Wrap all mockup sections together */}
          {mockupSections.length > 0 && (
            <div className="max-w-[1440px] place-self-center">
              <div className="bg-white rounded-3xl shadow-xl my-[2rem] xl:my-[6rem] mx-4 lg:mx-16 xl:mx-32 py-8">
                {mockupSections.map((section, index) => {
                  const renderSectionFn = sectionRenderers[section.sectionType]
                  if (!renderSectionFn) return null

                  return (
                    <React.Fragment key={section._id}>
                      {renderSectionFn(section, index + beforeHero.length)}
                    </React.Fragment>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      )}

      <ScrollUp />
    </>
  )
}
