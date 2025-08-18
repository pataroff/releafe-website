import ScrollUp from 'components/shared/ScrollUp'

import { Section } from 'types'
import { sectionRenderers } from 'components/sections'

const BlogsPage = ({ page, categories }) => {
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

  // return (
  //   <>
  //     <section className="min-h-[calc(100vh-120px)] bg-[#F7F7F7] pt-[5rem] flex flex-col xl:pt-0 px-8 lg:px-16 xl:px-32">
  //       <div className="bg-white rounded-3xl shadow-xl my-[2rem] xl:my-[4rem] mx-auto pt-14 py-8 w-full max-w-[1440px] place-self-center flex-grow flex flex-col">
  //         <div className="px-8 lg:px-16 xl:px-32">
  //           <h1 className="text-2xl font-sofia font-bold xl:text-5xl text-center">
  //             Blogs
  //           </h1>
  //           <p className="mt-4 font-sofia font-light text-center text-md xl:text-lg 2xl:text-xl">
  //             Vind hier nog meer inspiratie in blogs speciaal voor jou
  //             geschreven door professionals.
  //           </p>
  //         </div>

  //           {/* Articles */}

  //       </div>
  //     </section>
  //   </>
  // )
}

export default BlogsPage
