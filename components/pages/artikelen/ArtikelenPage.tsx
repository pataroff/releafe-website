import React, { useState } from 'react'

import Layout from 'components/shared/Layout'
import ScrollUp from 'components/shared/ScrollUp'

import Link from 'next/link'
import Image from 'next/image'

import HomePageHead from '../home/HomePageHead'

const articlesData = [
  {
    category: 'Mindfulness',
    image: '/images/articles/mindfulness_article_image_1.jpg',
    title: 'Wat is mindfulness en hoe werkt het precies?',
    slug: 'wat-is-mindfulness-en-hoe-werkt-het-precies',
  },
]

const ArtikelenPage = ({ settings, page }) => {
  return (
    <>
      <HomePageHead page={page} settings={settings} />
      <Layout settings={settings} route={'Ontdek Releafe'}>
        {/* Features Section */}
        <section className="min-h-[calc(100vh-120px)] bg-[#F7F7F7] pt-[5rem] xl:flex xl:pt-0 ">
          {/* Features Box */}
          <div className="bg-white rounded-3xl shadow-xl xl:max-w-screen-xl 2xl:max-w-screen-2xl my-[2rem] xl:my-[4rem] mx-4 xl:mx-auto pt-14 py-8">
            <div className="px-8 xl:px-32">
              <h1 className="text-2xl font-sofia font-bold xl:text-5xl text-center">
                Artikelen
              </h1>
              <p className="mt-4 font-sofia font-light text-center text-md xl:text-lg 2xl:text-xl">
                Hieronder vind je praktische tips en inzichten om je mentale
                welzijn te verbeteren. Van stress en angst tot mindfulness—lees
                hoe je met kleine aanpassingen meer rust en balans in je
                dagelijks leven brengt.
              </p>
            </div>

            {/* Articles Wrapper */}
            <div className="mt-[2rem] xl:mt-[4rem] xl:px-16 px-8">
              {/* Articles Container */}
              <ul className="flex flex-col xl:flex-row gap-x-8 gap-y-8">
                {/* Article Box */}
                {articlesData.map((article, index) => {
                  const { category, image, title, slug } = article

                  return (
                    <li key={index}>
                      <Link
                        href={`/artikelen/${slug}`}
                        // @TODO Is there a better way of doing this?
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
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default ArtikelenPage
