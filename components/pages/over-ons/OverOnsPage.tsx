import React from 'react'

import ScrollUp from 'components/shared/ScrollUp'

import { Section } from 'types'
import { sectionRenderers } from 'components/sections'

export const OverOnsPage = ({ page }) => {
  const { sections } = page

  if (!sections || sections.length === 0) return

  // Find the index of the hero section
  const heroIndex = sections.findIndex(
    (section: Section) => section.sectionType === 'hero',
  )

  // Split sections into two groups
  const beforeHero =
    heroIndex === -1 ? sections : sections.slice(0, heroIndex + 1)

  const afterHero = heroIndex === -1 ? [] : sections.slice(heroIndex + 1)

  const headerInformationalSections = afterHero.filter(
    (s) =>
      s.sectionType === 'header' && s.sectionVariant === 'informationalOverOns',
  )

  return (
    <>
      {/* Sections before (and including) hero */}
      {beforeHero.map((section, index) => {
        const renderSectionFn = sectionRenderers[section.sectionType]
        if (!renderSectionFn) return null

        return (
          <React.Fragment key={section._id}>
            {renderSectionFn(section, index)}
          </React.Fragment>
        )
      })}

      {afterHero.length > 0 &&
        (() => {
          let renderedInformational = false

          return (
            <div className="bg-[#f7f7f7] to-white flex flex-col">
              {afterHero.map((section: Section, index: number) => {
                if (
                  section.sectionType === 'header' &&
                  section.sectionVariant === 'informationalOverOns'
                ) {
                  if (renderedInformational) return null
                  renderedInformational = true

                  return (
                    <div
                      key={index}
                      className="bg-[#8fa58b] py-[4rem] xl:py-[6rem]"
                    >
                      <div className="max-w-[1440px] space-y-12 mx-auto px-8 lg:px-16 xl:px-32">
                        {headerInformationalSections.map((s, i) => {
                          const renderSectionFn =
                            sectionRenderers[s.sectionType]

                          if (!renderSectionFn) return null

                          return (
                            <React.Fragment key={s._id}>
                              {renderSectionFn(
                                s,
                                beforeHero.length + index + i,
                              )}
                            </React.Fragment>
                          )
                        })}
                      </div>
                    </div>
                  )
                }

                // Render normal sections
                const renderSectionFn = sectionRenderers[section.sectionType]
                if (!renderSectionFn) return null

                return (
                  <React.Fragment key={section._id}>
                    {renderSectionFn(section, index + beforeHero.length)}
                  </React.Fragment>
                )
              })}
            </div>
          )
        })()}

      <ScrollUp />
    </>
  )
}
