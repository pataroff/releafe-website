import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { urlForImage } from 'lib/sanity.image'

import { CTAElement } from 'types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

interface ArticlesDefaultProps {
  _id: string
  title: string
  customElements: any[]
  ctaElement: CTAElement
}

export const ArticlesDefault: React.FC<ArticlesDefaultProps> = ({
  _id,
  title,
  customElements,
  ctaElement,
}) => {
  const [articlesActiveIndex, setArticlesActiveIndex] = useState<number>(0)

  const handleArticlesNext = () => {
    setArticlesActiveIndex((prev) => (prev + 1) % customElements.length)
  }

  const handleArticlesPrev = () => {
    setArticlesActiveIndex((prev) =>
      prev === 0 ? customElements.length - 1 : prev - 1,
    )
  }

  return (
    <section
      key={_id}
      className="my-[4rem] lg:my-[6rem] w-full px-5 lg:px-32 xl:px-64"
    >
      <h1 className="text-2xl font-sofia font-bold md:text-4xl text-center">
        {title}
      </h1>

      {/* Articles Wrapper */}
      <div className="mt-[2rem] lg:mt-[4rem] mx-auto max-w-[1440px] ">
        {/* Articles Container */}
        <ul className="relative h-[400px]">
          {/* Article Box */}
          {customElements.map((article, index) => {
            const { category, coverImage, title, slug } = article

            // Calculate the relative position of the element
            const relativeIndex = index - articlesActiveIndex

            // Dynamically compute the translateX value
            const translateXValue = `calc(${relativeIndex * 100}% + ${
              relativeIndex * 36
            }px)`
            return (
              <Link
                key={index}
                href={`/blogs/${slug.current}`}
                style={{
                  transform: `translateX(${translateXValue})`,
                  transition: 'transform 0.2s ease-in-out',
                }}
                className={`rounded-[2.5rem] overflow-hidden absolute w-full xl:w-[600px] h-[400px] bg-gradient-to-b from-[#c5d5bc] to-[#8fa58b] flex flex-col justify-between shadow-md `}
              >
                {/* Image Container */}
                <div className="w-full h-[260px] relative">
                  <Image
                    src={urlForImage(coverImage).url()}
                    alt={`Image for article with ${title}`}
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
                {/* Text Container */}
                <div className="rounded-[2.5rem] rounded-t-none bg-white h-[140px] w-full absolute bottom-0 left-0 flex flex-col justify-center px-8">
                  <h2 className="font-sofia font-light text-md">
                    {category.title}
                  </h2>
                  <h3 className="font-sofia font-normal text-md">{title}</h3>
                </div>
              </Link>
            )
          })}
        </ul>
        {/* Articles Control Buttons */}
        <ul className="mt-[2rem] lg:mt-[4rem] w-full h-14 flex flex-col-reverse lg:flex-row justify-center lg:justify-end items-center">
          <li className="relative h-full w-full mt-[2rem]">
            <Link
              className="absolute left-1/2 transform -translate-x-1/2 lg:-translate-x-[56px] underline font-sofia font-normal text-lg"
              href={ctaElement.callToActionLink}
            >
              {ctaElement.callToActionButtonText}
            </Link>
          </li>
          <ul className="flex flex-row gap-x-4">
            <li
              className={`flex justify-center items-center rounded-full w-10 h-10 bg-[#c5d6bc] hover:bg-[#b7c6ae] transform duration-300 ease-in-out ${articlesActiveIndex === 0 ? 'opacity-50' : 'opacity-100'}`}
            >
              <button
                className="h-[2.5rem] w-[2.5rem] rounded-full"
                disabled={articlesActiveIndex === 0 ? true : false}
                onClick={() => handleArticlesPrev()}
              >
                <FontAwesomeIcon icon={faChevronLeft} color="white" size="lg" />
              </button>
            </li>
            <li
              className={`flex justify-center items-center rounded-full w-10 h-10 bg-[#96a78d] hover:bg-[#8d9b81] transform duration-300 ease-in-out ${articlesActiveIndex === customElements.length - 1 ? 'opacity-50' : 'opacity-100'}`}
            >
              <button
                className="h-[2.5rem] w-[2.5rem] rounded-full"
                disabled={
                  articlesActiveIndex === customElements.length - 1
                    ? true
                    : false
                }
                onClick={() => handleArticlesNext()}
              >
                <FontAwesomeIcon
                  icon={faChevronRight}
                  color="white"
                  size="lg"
                />
              </button>
            </li>
          </ul>
        </ul>
      </div>
    </section>
  )
}
