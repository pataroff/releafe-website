import { useState } from 'react'
import ScrollUp from 'components/shared/ScrollUp'

import { Section } from 'types'
import { sectionRenderers } from 'components/sections'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

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

  const [selectedCategory, setSelectedCategory] = useState<string>('')

  const categoryTitles = Array.from(
    new Set(
      categories
        .map((category) => category.title) // map category titles
        .filter(Boolean),
    ),
  )

  return (
    <>
      <section className="min-h-[calc(100vh-120px)] bg-[#F7F7F7] pt-[5rem] flex flex-col xl:pt-0 px-8 lg:px-16 xl:px-32">
        <div className="bg-white rounded-3xl shadow-xl my-[2rem] xl:my-[4rem] mx-auto w-full max-w-[1440px] place-self-center flex-grow flex flex-col">
          {/* ✅ Render all sections before (and including) header */}
          {beforeHeader.map((section: Section, index: number) => {
            const renderSectionFn = sectionRenderers[section.sectionType]
            return renderSectionFn ? renderSectionFn(section, index) : null
          })}

          {/* ✅ Always render category dropdown right after header */}
          <div className="my-[2rem] xl:my-[4rem] px-8 xl:px-16 flex-grow flex flex-col">
            <div className="relative my-6 w-fit">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="rounded-full border border-gray-300 pl-6 pr-10 py-2 font-sofia text-md appearance-none"
              >
                <option value="">Filter op categorie</option>
                {categoryTitles.map((category: string, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                <FontAwesomeIcon icon={faChevronDown} size="sm" />
              </div>
            </div>

            {/* ✅ Render all sections after header */}
            {afterHeader.map((section, index) => {
              const renderSectionFn = sectionRenderers[section.sectionType]
              return renderSectionFn
                ? renderSectionFn(section, index, selectedCategory)
                : null
            })}
          </div>
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
