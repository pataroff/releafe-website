import React from 'react'
import { Section } from 'types'
import { sectionRenderers } from 'components/sections'

import ScrollUp from 'components/shared/ScrollUp'

export const InDeMediaPage = ({ page }) => {
  const { sections } = page

  if (!sections || sections.length === 0) return null

  return (
    <>
      {sections.map((section: Section, index: number) => {
        const renderSectionFn = sectionRenderers[section.sectionType]
        if (!renderSectionFn) return null

        return (
          <React.Fragment key={section._id}>
            {renderSectionFn(section, index)}
          </React.Fragment>
        )
      })}

      <ScrollUp />
    </>
  )
}
