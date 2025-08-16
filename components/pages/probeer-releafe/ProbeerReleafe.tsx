import ScrollUp from 'components/shared/ScrollUp'

import { Section } from 'types'
import { sectionRenderers } from 'components/sections'

const ProbeerReleafePage = ({ page }) => {
  const { sections } = page

  if (!sections || sections.length === 0) return null

  return (
    <>
      {sections.map((section: Section, index: number) => {
        const renderSectionFn = sectionRenderers[section.sectionType]
        return renderSectionFn ? renderSectionFn(section, index) : null
      })}
      <ScrollUp />
    </>
  )
}

export default ProbeerReleafePage
