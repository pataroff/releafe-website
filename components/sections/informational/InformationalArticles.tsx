import { useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import { urlForImage } from 'lib/sanity.image'

interface InformationalArticlesProps {
  customElements: any[]
  // FUNCTION OVERLOAD
  categories: { title: string }[]
}

export const InformationalArticles: React.FC<InformationalArticlesProps> = ({
  customElements,
  categories,
}) => {
  const categoryTitles = Array.from(
    new Set(
      categories
        .map((category) => category.title) // map category titles
        .filter(Boolean),
    ),
  )

  const [selectedCategory, setSelectedCategory] = useState<string>('')

  const filteredArticles =
    selectedCategory === ''
      ? customElements
      : customElements.filter(
          (article) => article.category?.title === selectedCategory,
        )

  return (
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

      {filteredArticles.length === 0 ? (
        <div className="flex-grow flex items-center justify-center">
          <p className="font-sofia font-light text-center text-md xl:text-lg 2xl:text-xl">
            Geen artikelen gevonden voor deze categorie.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => {
            const { category, title, slug, coverImage } = article
            return (
              <Link
                key={index}
                href={`/blogs/${slug.current}`}
                className="relative w-full h-[400px] rounded-[2.5rem] overflow-hidden bg-gradient-to-b from-[#c5d5bc] to-[#8fa58b] flex flex-col shadow-md"
              >
                {/* Image Section */}
                <div className="relative w-full h-[260px]">
                  {coverImage && (
                    <Image
                      src={urlForImage(coverImage).url()}
                      alt={`Image for article with ${title}`}
                      fill
                      className="object-cover object-top"
                    />
                  )}
                </div>

                {/* Text Section */}
                <div className="rounded-[2.5rem] rounded-t-none bg-white w-full h-[140px] flex flex-col justify-center px-6 py-4">
                  <h2 className="font-sofia font-light text-md">
                    {category?.title}
                  </h2>
                  <h3 className="font-sofia font-normal text-md">{title}</h3>
                </div>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}
