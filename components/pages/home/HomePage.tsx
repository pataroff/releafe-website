import React, { useState, useEffect } from 'react'

import { ProjectListItem } from 'components/pages/home/ProjectListItem'
import { Header } from 'components/shared/Header'
import Layout from 'components/shared/Layout'
import ScrollUp from 'components/shared/ScrollUp'
import { resolveHref } from 'lib/sanity.links'
import Link from 'next/link'
import Image from 'next/image'
import type {
  ArticlePayload,
  FAQPayload,
  FeaturesPayload,
  HomePagePayload,
  PartnersPayload,
  TestimonialPayload,
} from 'types'
import { SettingsPayload } from 'types'

import HomePageHead from './HomePageHead'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons'
import { urlForImage } from 'lib/sanity.image'

export interface HomePageProps {
  settings?: SettingsPayload
  page?: HomePagePayload
  features?: FeaturesPayload
  partners?: PartnersPayload
  preview?: boolean
  articles?: ArticlePayload[]
  testimonials?: TestimonialPayload[]
  faq?: FAQPayload[]
}

export function HomePage({
  page,
  settings,
  features,
  partners,
  preview,
  articles,
  testimonials,
  faq,
}: HomePageProps) {
  useEffect(() => {
    // Preloading images for optimization
    features?.features.forEach(({ image }) => {
      const img = new window.Image()
      img.src = urlForImage(image).url()
    })
  }, [])

  const { overview, showcaseProjects, title = 'Personal website' } = page ?? {}

  const [featuresSelectedIndex, setFeaturesSelectedIndex] = useState<number>(0)

  const [testimonialsActiveIndex, setTestimonialsActiveIndex] =
    useState<number>(0)
  const [articlesActiveIndex, setArticlesActiveIndex] = useState<number>(0)

  const handleTestimonialsNext = () => {
    setTestimonialsActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const handleTestimonialsPrev = () => {
    setTestimonialsActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    )
  }

  const handleArticlesNext = () => {
    setArticlesActiveIndex((prev) => (prev + 1) % articles.length)
  }

  const handleArticlesPrev = () => {
    setArticlesActiveIndex((prev) =>
      prev === 0 ? articles.length - 1 : prev - 1,
    )
  }

  const FAQItem: React.FC<{ question: string; answer: string }> = ({
    question,
    answer,
  }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <div className="border-b-2 flex flex-col w-full">
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="font-sofia font-normal text-lg my-4">{question}</h1>
          <button onClick={() => setIsOpen(!isOpen)}>
            <FontAwesomeIcon
              icon={faChevronDown}
              size="xl"
              className={`transform transition-transform duration-300 ease-out ${
                isOpen ? 'rotate-180' : 'rotate-0'
              }`}
            />
          </button>
        </div>
        {isOpen && (
          <h2 className="font-sofia font-light text-lg mb-4">{answer}</h2>
        )}
      </div>
    )
  }

  return (
    <>
      <HomePageHead page={page} settings={settings} />
      <Layout settings={settings} preview={preview} route={'Home'}>
        {/* Main Section */}
        <section className="h-full">
          <div className="relative w-full h-[200px] lg:h-[480px] 2xl:h-[580px] z-0 mb-[40px]">
            {/* Hero Image Container */}
            <span className="absolute w-full h-[200px] lg:h-full">
              <Image
                src="/images/hero_image.jpeg"
                alt="Hero Image"
                fill
                className="object-cover object-bottom"
                priority
              />
              {/* Bottom Blur */}
              <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-white to-transparent" />
            </span>
          </div>
          {/* Header Container */}
          {/* @TODO: Is there a better way of doing this? */}
          <div className="mt-[2rem] px-8 lg:px-16 xl:px-32 max-w-[1440px] place-self-center">
            {title && <Header centered title={title} description={overview} />}
          </div>
        </section>

        {/* Features Section */}
        <section className="mt-[4rem] lg:mt-[6rem] px-5 lg:px-32 xl:px-64 2xl:px-96 flex flex-col justify-center items-center">
          {/* Title */}
          <h1 className="text-2xl font-sofia font-bold md:text-4xl text-center px-5">
            {features?.title}
          </h1>

          {/* Features Box */}
          <div className="relative mt-[2rem] lg:mt-[4rem] rounded-[2.5rem] max-w-[1440px] w-full h-full bg-[#f0f4ed] shadow-sm p-8 lg:p-0">
            {/* Features Selection Row Container */}
            <div className="flex flex-row flex-wrap lg:flex-nowrap gap-2.5 justify-center lg:absolute lg:-top-5 lg:left-1/2 lg:transform lg:-translate-x-1/2 z-10 ">
              {/* Feature Selection Box */}
              {features?.features.map((feature, index) => {
                const { title, description, image, ctaText, ctaLink } = feature
                return (
                  <button
                    key={index}
                    onClick={() => setFeaturesSelectedIndex(index)}
                    className={`${featuresSelectedIndex === index ? 'bg-[#96a78d] hover:bg-[#8d9b81]' : 'bg-[#c5d4bc] hover:bg-[#b7c6ae]'} rounded-lg text-sm lg:text-lg font-sofia font-bold text-white text-nowrap py-2 px-4 transition duration-300 ease-in-out`}
                  >
                    {title}
                  </button>
                )
              })}
            </div>

            {/* Features Data Container */}
            <div className="flex flex-col-reverse lg:flex-row w-full h-full items-center lg:py-12 2xl:py-14 pr-0 lg:pr-14 2xl:pr-16">
              <div className="w-full h-[600px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] relative">
                <Image
                  className="object-contain"
                  src={
                    features?.features[featuresSelectedIndex]?.image
                      ? urlForImage(
                          features.features[featuresSelectedIndex].image,
                        ).url()
                      : ''
                  }
                  alt={features?.features[featuresSelectedIndex].title}
                  fill
                  priority
                />
              </div>

              <div className="flex flex-col items-center gap-y-4 my-8 w-full">
                <div className="h-[300px] flex flex-col justify-center">
                  <p className="font-sofia font-light text-md xl:text-lg text-center">
                    {features?.features[featuresSelectedIndex].description}
                  </p>
                </div>

                <Link
                  href={
                    features?.features[featuresSelectedIndex]?.ctaLink
                      ? features.features[featuresSelectedIndex].ctaLink
                      : '/'
                  }
                  className="
    relative flex justify-center items-center rounded-full overflow-hidden h-[50px] lg:h-[60px] w-full lg:w-[18rem] mt-4 
    bg-gradient-to-b from-[#c5d5bc] to-[#8fa58b] text-white font-sofia font-bold text-md xl:text-lg
    leading-none"
                >
                  {/* Pseudo-element for the hover effect */}
                  <span className="absolute inset-0 bg-black opacity-0 rounded-full transition-opacity duration-300 ease-out z-0 hover:opacity-15"></span>

                  {/* Text above the overlay */}
                  <p className="relative z-10 pointer-events-none">
                    {features?.features[featuresSelectedIndex].ctaText}
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Credibility Section */}
        <section className="my-[4rem] lg:my-[6rem]">
          {/* Custom Image  */}
          <div className="w-full h-[140px] lg:h-[350px] relative">
            <div className="absolute inset-x-0 top-0 z-10 h-7 lg:h-14 bg-gradient-to-b from-white to-transparent" />
            <Image
              className="object-cover object-top"
              src="/images/hero_image.jpeg"
              alt="Custom Image"
              fill
            />
            <div className="absolute inset-x-0 bottom-0 h-7 lg:h-14 bg-gradient-to-t from-white to-transparent" />
          </div>

          {/* Credibility Container */}
          <div className="mt-[2rem] lg:mt-[4rem] flex flex-col gap-y-14 md:px-32 lg:px-64">
            <h1 className="text-2xl font-sofia font-bold md:text-4xl text-center">
              {/* @OTODO: Better destructuring on the top level of the component? */}
              {partners?.title}
            </h1>

            {/* Credibity Logo Row Container */}
            <div className="flex flex-col lg:flex-row lg:gap-x-32 2xl:gap-x-48 gap-y-28 lg:gap-y-32 justify-center items-center px-32 xl:px-64">
              {partners.partners.map((partner, index) => {
                const { name, logo, alt, url } = partner

                return (
                  <Image
                    key={index}
                    src={urlForImage(logo).url()}
                    alt={alt}
                    className="max-w-[125px] lg:max-w-[150px] h-auto"
                    width={150}
                    height={150}
                  />
                )
              })}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mt-[4rem] lg:mt-[6rem] w-full px-5 lg:px-32 xl:px-64">
          <h1 className="text-2xl font-sofia font-bold md:text-4xl text-center">
            Echte verhalen, echte impact
          </h1>

          {/* Testimonials Wrapper */}
          <div className="mt-[2rem] lg:mt-[4rem] mx-auto max-w-[1440px]">
            {/* Testimonials Container */}
            <ul className="relative h-[450px]">
              {/* Testimonial Box */}
              {testimonials.map((testimonial, index) => {
                const { quote, authorName, authorLocation, authorRole, topic } =
                  testimonial
                // Calculate the relative position of the element
                const relativeIndex = index - testimonialsActiveIndex

                // Dynamically compute the translateX value
                const translateXValue = `calc(${relativeIndex * 100}% + ${
                  relativeIndex * 36
                }px)`
                return (
                  <li
                    key={index}
                    style={{
                      transform: `translateX(${translateXValue})`,
                      transition: 'transform 0.2s ease-in-out',
                    }}
                    className={`rounded-[2.5rem] absolute w-full lg:w-[350px] h-[450px] bg-gradient-to-b from-[#c5d5bc] to-[#8fa58b] px-8 py-10 flex flex-col justify-between shadow-md`}
                  >
                    {/* Quotation Mark Icon + Quote */}
                    <div>
                      {/* Quotation Mark Icon Container */}
                      <div className="w-[25%]">
                        <Image
                          src="/images/quotation_mark_icon.png"
                          alt="Quotation Mark Icon"
                          className="w-full h-full"
                          width={512}
                          height={512}
                        />
                      </div>

                      {/* Quote */}
                      <h2 className="mt-4 font-sofia font-normal text-lg leading-tight text-white">
                        {quote}
                      </h2>
                    </div>

                    <div>
                      <h3 className="font-sofia font-medium text-md text-white">
                        {`${authorName}, ${authorLocation} ${authorRole}`}
                      </h3>

                      <h4 className="font-sofia font-light text-sm leading-tight text-white">
                        {topic}
                      </h4>
                    </div>
                  </li>
                )
              })}
            </ul>
            {/* Testimonial Control Buttons */}
            <ul className="mt-[2rem] lg:mt-[4rem] w-full h-14 flex flex-row gap-x-4 justify-center lg:justify-end">
              <li
                className={`flex justify-center items-center rounded-full w-10 h-10 bg-[#c5d6bc] hover:bg-[#b7c6ae] transform duration-300 ease-in-out ${testimonialsActiveIndex === 0 ? 'opacity-50' : 'opacity-100'}`}
              >
                <button
                  className="h-[2.5rem] w-[2.5rem] rounded-full"
                  disabled={testimonialsActiveIndex === 0 ? true : false}
                  onClick={() => handleTestimonialsPrev()}
                >
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    color="white"
                    size="lg"
                  />
                </button>
              </li>
              <li
                className={`flex justify-center items-center rounded-full w-10 h-10 bg-[#96a78d] hover:bg-[#8d9b81] transform duration-300 ease-in-out ${testimonialsActiveIndex === testimonials.length - 1 ? 'opacity-50' : 'opacity-100'}`}
              >
                <button
                  className="h-[2.5rem] w-[2.5rem] rounded-full"
                  disabled={
                    testimonialsActiveIndex === testimonials.length - 1
                      ? true
                      : false
                  }
                  onClick={() => handleTestimonialsNext()}
                >
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    color="white"
                    size="lg"
                  />
                </button>
              </li>
            </ul>
          </div>
        </section>

        {/* Blog Section */}
        <section className="my-[4rem] lg:my-[6rem] w-full px-5 lg:px-32 xl:px-64">
          <h1 className="text-2xl font-sofia font-bold md:text-4xl text-center">
            Doe meer inspiratie op in blogs speciaal voor jou geschreven door
            professionals
          </h1>

          {/* Articles Wrapper */}
          <div className="mt-[2rem] lg:mt-[4rem] mx-auto max-w-[1440px] ">
            {/* Articles Container */}
            <ul className="relative h-[400px]">
              {/* Article Box */}
              {articles.map((article, index) => {
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
                    href={`/blogs/${slug}`}
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
                        {category?.title}
                      </h2>
                      <h3 className="font-sofia font-normal text-md">
                        {title}
                      </h3>
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
                  href="/blogs"
                >
                  Bekijk alle blogs
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
                    <FontAwesomeIcon
                      icon={faChevronLeft}
                      color="white"
                      size="lg"
                    />
                  </button>
                </li>
                <li
                  className={`flex justify-center items-center rounded-full w-10 h-10 bg-[#96a78d] hover:bg-[#8d9b81] transform duration-300 ease-in-out ${articlesActiveIndex === articles.length - 1 ? 'opacity-50' : 'opacity-100'}`}
                >
                  <button
                    className="h-[2.5rem] w-[2.5rem] rounded-full"
                    disabled={
                      articlesActiveIndex === articles.length - 1 ? true : false
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

        {/* FAQ Section */}
        {/* <section className="my-[4rem] lg:my-[6rem] px-5 lg:px-32 flex flex-col justify-center items-center">
          <h1 className="text-2xl font-sofia font-bold md:text-4xl text-center">
            Veel gestelde vragen
          </h1>

          <div className="mt-[2rem] lg:mt-[4rem] w-full">
            <div className="border-b-2">
              <h1 className="font-sofia font-normal uppercase text-2xl my-4">
                Algemeen
              </h1>
            </div>
            {faq.map((faq, index) => {
              const { question, answer } = faq
              return <FAQItem key={index} question={question} answer={answer} />
            })}
          </div>
        </section> */}

        {/* Workaround: scroll to top on route change */}
        <ScrollUp />
      </Layout>
    </>
  )
}
