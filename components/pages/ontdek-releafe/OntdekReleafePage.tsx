import ScrollUp from 'components/shared/ScrollUp'

import { Section } from 'types'
import { sectionRenderers } from 'components/sections'

const OntdekReleafePage = ({ page }) => {
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
        return renderSectionFn ? renderSectionFn(section, index) : null
      })}

      {/* Sections after hero wrapped in gradient */}
      {afterHero.length > 0 && (
        <div className="bg-gradient-to-b from-white via-[#c5d5bc50] to-white h-full">
          {/* Render other sections normally */}
          {otherSections.map((section, index) => {
            const renderSectionFn = sectionRenderers[section.sectionType]
            return renderSectionFn
              ? renderSectionFn(section, index + beforeHero.length)
              : null
          })}

          {/* Wrap all mockup sections together */}
          {mockupSections.length > 0 && (
            <div className="max-w-[1440px] place-self-center">
              <div className="bg-white rounded-3xl shadow-xl my-[2rem] xl:my-[6rem] mx-4 lg:mx-16 xl:mx-32 py-8">
                {mockupSections.map((section, index) => {
                  const renderSectionFn = sectionRenderers[section.sectionType]
                  return renderSectionFn
                    ? renderSectionFn(section, index + beforeHero.length)
                    : null
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

export default OntdekReleafePage
