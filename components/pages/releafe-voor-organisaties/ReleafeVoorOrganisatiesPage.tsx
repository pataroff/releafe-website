import React, { useState } from 'react'

import ScrollUp from 'components/shared/ScrollUp'

import { Section } from 'types'
import { sectionRenderers } from 'components/sections'

export const ReleafeVoorOrganisatiesPage = ({ page }) => {
  const { sections } = page

  const [bedrijvenIndex, setBedrijvenIndex] = useState<number>(0)

  if (!sections || sections.length === 0) return

  // Find the index of the hero section
  const heroIndex = sections.findIndex(
    (section: Section) => section.sectionType === 'hero',
  )

  // Split sections into two groups
  const beforeHero =
    heroIndex === -1 ? sections : sections.slice(0, heroIndex + 1)

  const afterHero = heroIndex === -1 ? [] : sections.slice(heroIndex + 1)

  // Extract informationalOrganisaties sections
  const organisatiesSections = afterHero.filter(
    (s) => s.sectionVariant === 'informationalOrganisaties',
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
          let renderedOrganisaties = false

          return (
            <div className="bg-gradient-to-b from-white via-[#c5d5bc50] to-white h-full">
              {afterHero.map((section: Section, index: number) => {
                if (section.sectionVariant === 'informationalOrganisaties') {
                  if (renderedOrganisaties) return null
                  renderedOrganisaties = true

                  return (
                    <section
                      key={index}
                      className="mt-[4rem] lg:mt-[6rem] px-8 lg:px-16 xl:px-32 flex flex-col justify-center items-center max-w-[1440px] place-self-center"
                    >
                      <div className="relative rounded-[2.5rem] w-full h-full bg-white shadow-lg p-8">
                        <div className="flex flex-row flex-wrap lg:flex-nowrap gap-y-3 gap-x-5 justify-center lg:absolute lg:-top-5 lg:left-1/2 lg:transform lg:-translate-x-1/2 z-10">
                          {organisatiesSections.map((s, i) => (
                            <button
                              key={i}
                              className={`rounded-xl w-full ${
                                bedrijvenIndex === i
                                  ? 'bg-gradient-to-b from-[#c5d5bc] to-[#8fa58b] text-white'
                                  : 'bg-gray-200 hover:bg-gray-300 text-black'
                              } font-sofia font-semibold text-nowrap text-md xl:text-lg py-2 px-12 transition duration-300 ease-in-out`}
                              onClick={() => setBedrijvenIndex(i)}
                            >
                              {s.buttonText}
                            </button>
                          ))}
                        </div>

                        {/* Render only active section */}
                        {(() => {
                          const activeSection =
                            organisatiesSections[bedrijvenIndex] || null
                          if (!activeSection) return null
                          const renderSectionFn =
                            sectionRenderers[activeSection.sectionType]

                          if (!renderSectionFn) return null

                          return (
                            <React.Fragment key={section._id}>
                              {renderSectionFn(
                                activeSection,
                                index + beforeHero.length,
                              )}
                            </React.Fragment>
                          )
                        })()}
                      </div>
                    </section>
                  )
                }

                // Render normal section
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
