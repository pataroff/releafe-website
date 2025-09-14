import React from 'react'

import ScrollUp from 'components/shared/ScrollUp'

import { Section } from 'types'
import { sectionRenderers } from 'components/sections'

export const AlgemeneVoorwaardenPage = ({ page }) => {
  const { sections } = page

  if (!sections || sections.length === 0) return null

  return (
    <>
      <section className="flex flex-col bg-[#F7F7F7] pt-[5rem] pb-[2rem] xl:flex xl:pt-0 px-8 lg:px-16 xl:px-32">
        <div className="bg-white rounded-3xl shadow-xl my-[2rem] xl:my-[4rem] mx-auto max-w-[1440px] py-4 xl:py-0">
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
        </div>
      </section>
    </>
  )
}
