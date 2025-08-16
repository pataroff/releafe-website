import ScrollUp from 'components/shared/ScrollUp'

import { Section } from 'types'
import { sectionRenderers } from 'components/sections'

const MentaalFitPage = ({ page }) => {
  const { sections } = page

  if (!sections || sections.length === 0) return null

  // Find hero index
  const heroIndex = sections.findIndex(
    (section) => section.sectionType === 'hero',
  )

  const beforeHero =
    heroIndex === -1 ? sections : sections.slice(0, heroIndex + 1)
  const afterHero = heroIndex === -1 ? [] : sections.slice(heroIndex + 1)

  // Extract grouped sections
  const sectionsToGroup = afterHero.filter(
    (s) => s.sectionVariant === 'informationalGrouped',
  )

  return (
    <>
      {/* Render sections before (and including) hero */}
      {beforeHero.map((section: Section, index: number) => {
        const renderSectionFn = sectionRenderers[section.sectionType]
        return renderSectionFn ? renderSectionFn(section, index) : null
      })}

      {/* Sections after hero wrapped in gradient */}
      {afterHero.length > 0 && (
        <div className="bg-gradient-to-b from-white via-[#c5d5bc50] to-white h-full">
          {afterHero.map((section: Section, index) => {
            const renderSectionFn = sectionRenderers[section.sectionType]
            if (!renderSectionFn) return null

            // If this section is part of grouped sections, only render for the first in the pair
            if (section.sectionVariant === 'informationalGrouped') {
              const indexInGroup = sectionsToGroup.indexOf(section)
              if (indexInGroup % 2 === 1) return null // skip second in pair

              const firstSection = section
              const secondSection = sectionsToGroup[indexInGroup + 1] || null
              const groupIndex = Math.floor(indexInGroup / 2)

              return renderSectionFn(
                firstSection,
                '', // @TODO This needs to be fixed!
                index + beforeHero.length,
                firstSection,
                secondSection,
                groupIndex,
              )
            }

            // Normal section rendering (CTA, header, etc.)
            return renderSectionFn(section, index + beforeHero.length)
          })}
        </div>
      )}

      <ScrollUp />
    </>
  )
}

export default MentaalFitPage
