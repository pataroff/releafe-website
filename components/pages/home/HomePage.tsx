import React from 'react'

import ScrollUp from 'components/shared/ScrollUp'

import { PagePayload } from 'types'
import { sectionRenderers } from 'components/sections'

export interface HomePageProps {
  page?: PagePayload
}

export function HomePage({ page }: HomePageProps) {
  const { sections } = page

  return (
    <>
      {sections.map((section) => {
        const renderSectionFn = sectionRenderers[section.sectionType]

        if (!renderSectionFn) return null

        return (
          <React.Fragment key={section._id}>
            {renderSectionFn(section)}
          </React.Fragment>
        )
      })}

      {/* Workaround: scroll to top on route change */}
      <ScrollUp />
    </>
  )
}
