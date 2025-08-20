import ScrollUp from 'components/shared/ScrollUp'

import { Section } from 'types'
import { sectionRenderers } from 'components/sections'

export const BlogsPage = ({ page, categories }) => {
  const { sections } = page

  if (!sections || sections.length === 0) return null

  // Find header index
  const headerIndex = sections.findIndex(
    (section) => section.sectionType === 'header',
  )

  const beforeHeader =
    headerIndex === -1 ? sections : sections.slice(0, headerIndex + 1)
  const afterHeader = headerIndex === -1 ? [] : sections.slice(headerIndex + 1)

  return (
    <>
      <section className="min-h-[calc(100vh-120px)] bg-[#F7F7F7] pt-[5rem] flex flex-col xl:pt-0 px-8 lg:px-16 xl:px-32">
        <div className="bg-white rounded-3xl shadow-xl my-[2rem] xl:my-[4rem] mx-auto w-full max-w-[1440px] place-self-center flex-grow flex flex-col">
          {/* ✅ Render all sections before (and including) header */}
          {beforeHeader.map((section: Section, index: number) => {
            const renderSectionFn = sectionRenderers[section.sectionType]
            return renderSectionFn ? renderSectionFn(section, index) : null
          })}

          {/* ✅ Render all sections after header */}
          {afterHeader.map((section, index) => {
            const renderSectionFn = sectionRenderers[section.sectionType]
            return renderSectionFn
              ? renderSectionFn(section, index, categories)
              : null
          })}
        </div>
      </section>

      <ScrollUp />
    </>
  )
}
