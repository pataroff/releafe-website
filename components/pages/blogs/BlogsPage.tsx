import React, { useState } from 'react'

import Layout from 'components/shared/Layout'
import ScrollUp from 'components/shared/ScrollUp'

import Link from 'next/link'
import Image from 'next/image'

import HomePageHead from '../home/HomePageHead'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const articlesData = [
  {
    category: 'Mindfulness',
    image: '/images/articles/mindfulness_article_image_1.jpg',
    title: 'Wat is mindfulness en hoe werkt het precies?',
    slug: 'wat-is-mindfulness-en-hoe-werkt-het-precies',
  },
]

const categories = ['Mindfulness', 'Voeding', 'Bewegen', 'Social']

const BlogsPage = ({ settings, page }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('')

  const filteredArticles =
    selectedCategory === ''
      ? articlesData
      : articlesData.filter((article) => article.category === selectedCategory)

  return (
    <>
      <HomePageHead page={page} settings={settings} />
      <Layout settings={settings} route={'Inspiratie'}>
        {/* Features Section */}
        <section className="min-h-[calc(100vh-120px)] bg-[#F7F7F7] pt-[5rem] xl:flex xl:pt-0 ">
          {/* Features Box */}
          <div className="bg-white rounded-3xl shadow-xl xl:max-w-screen-xl 2xl:max-w-screen-2xl my-[2rem] xl:my-[4rem] mx-4 xl:mx-auto pt-14 py-8">
            <div className="px-8 xl:px-32">
              <h1 className="text-2xl font-sofia font-bold xl:text-5xl text-center">
                Blogs
              </h1>
              <p className="mt-4 font-sofia font-light text-center text-md xl:text-lg 2xl:text-xl">
                Vind hier nog meer inspiratie in blogs speciaal voor jou
                geschreven door professionals.
              </p>
            </div>

            {/* Articles Wrapper */}
            <div className="mt-[2rem] xl:mt-[4rem] xl:px-16 px-8">
              {/* Dropdown Filter */}
              <div className="relative my-6 w-fit">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="rounded-full border border-gray-300 pl-6 pr-10 py-2 font-sofia text-md appearance-none"
                >
                  <option value="" disabled>
                    Filter op categorie
                  </option>
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>

                {/* Font Awesome Chevron Down Icon */}
                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                  <FontAwesomeIcon icon={faChevronDown} size="sm" />
                </div>
              </div>
              {/* Articles Container */}
              <div className="flex flex-col xl:flex-row gap-x-8 gap-y-8">
                {filteredArticles.length === 0 ? (
                  <p className="mt-4 font-sofia font-light text-center text-md xl:text-lg 2xl:text-xl w-full">
                    Geen artikelen gevonden voor deze categorie.
                  </p>
                ) : (
                  filteredArticles.map((article, index) => {
                    const { category, image, title, slug } = article

                    return (
                      <Link
                        key={index}
                        href={`/blogs/${slug}`}
                        className="rounded-[2.5rem] overflow-hidden w-full xl:w-[362px] 2xl:w-[450px] h-[400px] bg-gradient-to-b from-[#c5d5bc] to-[#8fa58b] flex flex-col justify-between drop-shadow-md"
                      >
                        {/* Image Container */}
                        <div className="w-full h-[260px] relative">
                          <Image
                            src={image}
                            alt={`Image for article with ${title}`}
                            fill
                            className="object-cover object-top"
                          />
                        </div>
                        {/* Text Container */}
                        <div className="rounded-[2.5rem] rounded-t-none bg-white h-[140px] w-full absolute bottom-0 left-0 flex flex-col justify-center px-8">
                          <h2 className="font-sofia font-light text-md">
                            {category}
                          </h2>
                          <h3 className="font-sofia font-normal text-md">
                            {title}
                          </h3>
                        </div>
                      </Link>
                    )
                  })
                )}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default BlogsPage
