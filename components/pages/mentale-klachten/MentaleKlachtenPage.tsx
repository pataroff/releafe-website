import ScrollUp from 'components/shared/ScrollUp'

import { sectionRenderers } from 'components/sections'
import { Section } from 'types'

const MentaleKlachtenPage = ({ page }) => {
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

  return (
    <>
      {/* Render all sections before (and including) hero */}
      {beforeHero.map((section: Section, index: number) => {
        const renderSectionFn = sectionRenderers[section.sectionType]
        return renderSectionFn ? renderSectionFn(section, index) : null
      })}

      {/* Wrap all sections after hero in gradient background */}
      {afterHero.length > 0 && (
        <div className="bg-gradient-to-b from-white via-[#c5d5bc50] to-white h-full">
          {afterHero.map((section: Section, index: number) => {
            const renderSectionFn = sectionRenderers[section.sectionType]
            return renderSectionFn
              ? renderSectionFn(section, index + beforeHero.length)
              : null
          })}
        </div>
      )}

      <ScrollUp />
    </>
  )
}

export default MentaleKlachtenPage
