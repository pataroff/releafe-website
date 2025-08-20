import ScrollUp from 'components/shared/ScrollUp'

import { Section } from 'types'
import { sectionRenderers } from 'components/sections'

export const OnderzoekPage = ({ page }) => {
  const { sections } = page

  if (!sections || sections.length === 0) return null

  return (
    <>
      <section className="min-h-[calc(100vh-120px)] bg-[#F7F7F7] pt-[5rem] xl:flex xl:pt-0 px-8 lg:px-16 xl:px-32">
        <div className="bg-white rounded-3xl shadow-xl my-[2rem] xl:my-[4rem] mx-auto max-w-[1440px]">
          {sections.map((section: Section, index: number) => {
            const renderSectionFn = sectionRenderers[section.sectionType]
            return renderSectionFn ? renderSectionFn(section, index) : null
          })}

          <ScrollUp />
        </div>
      </section>
    </>
  )
}
