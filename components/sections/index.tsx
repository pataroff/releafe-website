import { useState, useRef, useEffect } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { FeatureItem, Section } from 'types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { urlForImage } from 'lib/sanity.image'
import { urlForFile } from 'lib/sanity.file'
import { CustomPortableText } from 'components/shared/CustomPortableText'

import { FAQItem } from 'components/shared/FAQItem'

// Helper functions (utils)
const formatDate = (date: Date) => {
  return date.toLocaleDateString('nl-NL', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

const renderHeroSection = (section: Section) => {
  const { _id, sectionVariant, title, body, image, ctaElement } = section

  switch (sectionVariant) {
    case 'landing':
      return (
        <section key={_id} className="h-full">
          {/* Hero Image */}
          <div className="relative w-full h-[200px] lg:h-[480px] 2xl:h-[580px] z-0 mb-[40px]">
            <span className="absolute w-full h-[200px] lg:h-full">
              <Image
                src={urlForImage(image).url()}
                alt="Hero Image"
                fill
                className="object-cover object-bottom"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-white to-transparent" />
            </span>
          </div>

          <div className="mt-[2rem] px-8 lg:px-16 xl:px-32 max-w-[1440px] place-self-center">
            <div className="flex flex-col justify-center items-center gap-y-2 text-center">
              {/* Title */}
              <h1 className="text-2xl font-sofia font-bold xl:text-5xl mb-4">
                {title}
              </h1>

              {/* Description */}
              <CustomPortableText
                value={body}
                headingClasses={{
                  h2: 'font-sofia font-light text-md xl:text-lg 2xl:text-xl',
                }}
              />

              <Link
                href={ctaElement.callToActionLink}
                className="relative flex justify-center items-center rounded-full overflow-hidden h-[50px] lg:h-[60px] w-full lg:w-[18rem] mt-4 bg-gradient-to-b from-[#c5d5bc] to-[#8fa58b] text-white font-sofia font-bold text-md xl:text-lg leading-none"
              >
                {/* Pseudo-element for the hover effect */}
                <span className="absolute inset-0 bg-black opacity-0 rounded-full transition-opacity duration-300 ease-out z-0 hover:opacity-15"></span>

                {/* Text above the overlay */}
                <p className="relative z-10 pointer-events-none">
                  {ctaElement.callToActionButtonText}
                </p>
              </Link>
            </div>
          </div>
        </section>
      )

    case 'cta':
      return (
        <section className="xl:min-h-[calc(100vh-120px)] bg-[#F7F7F7] xl:flex">
          <div className="flex flex-col-reverse justify-between xl:flex-row xl:justify-center xl:items-center max-w-[1440px] min-h-full mx-auto pt-[5rem] xl:pt-0 px-8 py-12">
            <div className="flex flex-col gap-y-6 w-full xl:w-3/4 bg-white p-10 xl:p-12 rounded-3xl shadow-xl">
              <h1 className="font-sofia font-bold text-3xl xl:text-4xl 2xl:text-5xl">
                {title}
              </h1>

              <div className="space-y-6">
                <CustomPortableText
                  value={body}
                  headingClasses={{
                    h1: 'font-sofia font-bold text-xl xl:text-2xl 2xl:text-3xl',
                    h2: 'font-sofia font-bold text-xl xl:text-2xl 2xl:text-3xl',
                    h3: 'font-sofia font-light text-md lg:text-lg xl:text-xl',
                  }}
                />
              </div>
            </div>

            {/* Image Container */}
            <div className="w-full xl:w-1/2 h-[600px] lg:h-[700px] xl:h-[600px] 2xl:h-[700px] relative">
              <Image
                className="object-contain xl:scale-110"
                src={urlForImage(image).url()}
                alt=""
                fill
              />
            </div>
          </div>
        </section>
      )

    case 'informational':
      return (
        <section key={_id} className="xl:min-h-[calc(100vh-120px)] xl:flex">
          {/* Main Wrapper */}
          <div className="flex flex-col xl:flex-row min-h-full w-full">
            {/* Hero Text Container */}
            <div className="flex flex-col justify-center h-full w-full xl:w-1/2 bg-[#c5d5bc] bg-opacity-15 gap-y-12 px-12 xl:px-24 pb-4 xl:pb-8 pt-28 xl:pt-12 2xl:pt-16">
              <h1 className="text-3xl/[2.5rem] font-sofia font-bold xl:text-4xl/[3rem] 2xl:text-5xl/[4rem]">
                {title}
              </h1>

              <CustomPortableText
                value={body}
                headingClasses={{
                  h3: 'text-md 2xl:text-xl font-sofia font-light',
                }}
                paragraphClasses="text-sm 2xl:text-lg font-sofia font-light"
              />

              {/* Buttons Container */}
              <div className="flex flex-col items-center gap-y-6">
                {/* @TODO Button color dynamic? How to? */}
                <Link
                  href={ctaElement.callToActionLink}
                  className="flex justify-center items-center rounded-full h-[50px] lg:h-[60px] w-full mt-4 bg-gradient-to-b from-[#d4e3c4] to-[#849b6f] transform duration-300 ease-in-out font-sofia font-bold text-white text-md xl:text-lg leading-none"
                >
                  {/* Pseudo-element for the hover effect */}
                  <span className="absolute inset-0 bg-black opacity-0 rounded-full transition-opacity duration-300 ease-out z-0 hover:opacity-15"></span>

                  {/* Text above the overlay */}
                  <p className="relative z-10 pointer-events-none">
                    {ctaElement.callToActionButtonText}
                  </p>
                </Link>

                <button
                  onClick={() => {
                    document
                      // @TODO How are we gonna fix this?
                      .getElementById('header-section')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="w-16 h-16 rounded-[1.75rem] hover:bg-gray-200 flex justify-center items-center transform duration-300 ease-in-out"
                >
                  <Image
                    src="/images/chevron_down.png"
                    alt="Chevron Down"
                    width={40}
                    height={40}
                  />
                </button>
              </div>
            </div>

            {/* Hero Image Container */}
            <div className="relative h-[400px] lg:h-[500px] xl:min-h-full w-full xl:w-1/2">
              <Image
                src={urlForImage(image).url()}
                alt="Mentale Klachten Hero Image" // @TODO Do we need alt text field in the schema?
                fill // fill = absolute positioning, therefore container needs relative
                className="object-cover object-center" // @TODO 'object-cover object-left' if 'mentaal-fit'?
              />
            </div>
          </div>
        </section>
      )
    case 'informationalOverOns':
      return (
        <section className="xl:min-h-[calc(100vh-120px)] bg-[#F7F7F7] xl:flex xl:flex-col xl:justify-center">
          {/* Main Wrapper */}
          <div className="flex flex-col min-h-full w-full px-8 lg:px-16 xl:px-32 pb-4 xl:pb-8 pt-28 xl:pt-12 2xl:pt-16 max-w-[1440px] place-self-center">
            {/* Main Container */}
            <div className="flex flex-col-reverse xl:flex-row justify-between items-center bg-white rounded-3xl xl:px-12 px-8 py-8 gap-y-8 shadow-lg">
              {/* Text Container */}
              <div className="space-y-8 xl:w-1/2 w-full">
                <h1 className="text-3xl/[2.5rem] font-sofia font-bold xl:text-4xl/[3rem] 2xl:text-5xl/[4rem]">
                  {title}
                </h1>
                <CustomPortableText
                  value={body}
                  paragraphClasses="text-md xl:text-lg font-sofia font-light"
                />
              </div>
              {/* Image Container */}
              <div className="relative rounded-3xl overflow-hidden w-full xl:w-[400px] xl:h-[400px] lg:h-[881px] md:h-[600px] h-[300px] shadow-md">
                <Image
                  src={urlForImage(image).url()}
                  alt={'Releafe Logo'}
                  fill
                />
              </div>
            </div>
            {/* Scroll Button */}
            <button
              onClick={() => {
                document
                  .getElementById('letter-section')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="mt-[2rem] xl:mt-[4rem] w-16 h-16 rounded-[1.75rem] hover:bg-gray-200 flex justify-center self-center items-center transform duration-300 ease-in-out"
            >
              <Image
                src="/images/chevron_down.png"
                alt="Chevron Down"
                width={40}
                height={40}
              />
            </button>
          </div>
        </section>
      )
  }
}

const renderInfographicSection = (section: Section) => {
  const { _id, title, customElements } = section

  const [factsActiveIndex, setFactsActiveIndex] = useState<number>(0)

  const handleFactsNext = () => {
    setFactsActiveIndex((prev) => (prev + 1) % customElements.length)
  }

  const handleFactsPrev = () => {
    setFactsActiveIndex((prev) =>
      prev === 0 ? customElements.length - 1 : prev - 1,
    )
  }

  return (
    <section
      key={_id}
      className="mt-[4rem] lg:mt-[6rem] w-full px-8 lg:px-16 xl:px-64"
    >
      <h1 className="text-2xl font-sofia font-bold xl:text-4xl 2xl:text-5xl text-center">
        {title}
      </h1>

      <div className="mt-[2rem] lg:mt-[4rem] max-w-[1440px] mx-auto">
        {/* Testimonials Container */}
        <ul className="relative h-[450px]">
          {/* Testimonial Box */}
          {customElements.map((fact, index) => {
            const { factTitle, factDescription } = fact

            // Calculate the relative position of the element
            const relativeIndex = index - factsActiveIndex

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
                className={`rounded-[2.5rem] absolute w-full lg:w-[350px] h-[450px] bg-gradient-to-b from-[#c5d5bc] to-[#8fa58b] px-8 py-10 flex flex-col justify-center items-center space-y-2 shadow-md`}
              >
                {/* Number Text */}
                <h1 className="mt-4 font-sofia font-normal text-5xl leading-tight text-white text-center">
                  {factTitle}
                </h1>

                <h2 className="font-sofia font-normal text-white text-xl text-center">
                  {factDescription}
                </h2>
              </li>
            )
          })}
        </ul>
        {/* Testimonial Control Buttons */}
        <ul className="mt-[2rem] lg:mt-[4rem] w-full h-14 flex flex-row gap-x-4 justify-center lg:justify-end">
          <li
            className={`flex justify-center items-center rounded-full w-10 h-10 bg-[#c5d6bc] hover:bg-[#b7c6ae] transform duration-300 ease-in-out ${factsActiveIndex === 0 ? 'opacity-50' : 'opacity-100'}`}
          >
            <button
              className="h-[2.5rem] w-[2.5rem] rounded-full"
              disabled={factsActiveIndex === 0 ? true : false}
              onClick={() => handleFactsPrev()}
            >
              <FontAwesomeIcon icon={faChevronLeft} color="white" size="lg" />
            </button>
          </li>
          <li
            className={`flex justify-center items-center rounded-full w-10 h-10 bg-[#96a78d] hover:bg-[#8d9b81] transform duration-300 ease-in-out ${factsActiveIndex === customElements.length - 1 ? 'opacity-50' : 'opacity-100'}`}
          >
            <button
              className="h-[2.5rem] w-[2.5rem] rounded-full"
              disabled={
                factsActiveIndex === customElements.length - 1 ? true : false
              }
              onClick={() => handleFactsNext()}
            >
              <FontAwesomeIcon icon={faChevronRight} color="white" size="lg" />
            </button>
          </li>
        </ul>
      </div>
    </section>
  )
}

const renderFeaturesSection = (section: Section) => {
  const { _id, title, customElements } = section
  const [featuresSelectedIndex, setFeaturesSelectedIndex] = useState<number>(0)

  const selectedFeature = customElements[featuresSelectedIndex]
  const { featureName, featureDescription, image, ctaElement } = selectedFeature

  return (
    <section
      key={_id}
      className="mt-[4rem] lg:mt-[6rem] px-5 lg:px-32 xl:px-64 2xl:px-96 flex flex-col justify-center items-center"
    >
      {/* Title */}
      <h1 className="text-2xl font-sofia font-bold md:text-4xl text-center px-5">
        {title}
      </h1>

      {/* Features Box */}
      <div className="relative mt-[2rem] lg:mt-[4rem] rounded-[2.5rem] max-w-[1440px] w-full h-full bg-[#f0f4ed] shadow-sm p-8 lg:p-0">
        {/* Features Selection Row Container */}
        <div className="flex flex-row flex-wrap lg:flex-nowrap gap-2.5 justify-center lg:absolute lg:-top-5 lg:left-1/2 lg:transform lg:-translate-x-1/2 z-10 ">
          {/* Feature Selection Box */}
          {customElements.map((feature: FeatureItem, index: number) => {
            const { featureName } = feature
            return (
              <button
                key={index}
                onClick={() => setFeaturesSelectedIndex(index)}
                className={`${featuresSelectedIndex === index ? 'bg-[#96a78d] hover:bg-[#8d9b81]' : 'bg-[#c5d4bc] hover:bg-[#b7c6ae]'} rounded-lg text-sm lg:text-lg font-sofia font-bold text-white text-nowrap py-2 px-4 transition duration-300 ease-in-out`}
              >
                {featureName}
              </button>
            )
          })}
        </div>

        {/* Features Data Container */}
        <div className="flex flex-col-reverse lg:flex-row w-full h-full items-center lg:py-12 2xl:py-14 pr-0 lg:pr-14 2xl:pr-16">
          <div className="w-full h-[600px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] relative">
            <Image
              className="object-contain"
              src={image ? urlForImage(image).url() : ''}
              alt={featureName}
              fill
              priority
            />
          </div>

          <div className="flex flex-col items-center gap-y-4 my-8 w-full">
            <div className="h-[300px] flex flex-col justify-center">
              <p className="font-sofia font-light text-md xl:text-lg text-center">
                {featureDescription}
              </p>
            </div>

            <Link
              href={ctaElement.callToActionLink}
              className="
            relative flex justify-center items-center rounded-full overflow-hidden h-[50px] lg:h-[60px] w-full lg:w-[18rem] mt-4 
            bg-gradient-to-b from-[#c5d5bc] to-[#8fa58b] text-white font-sofia font-bold text-md xl:text-lg
            leading-none"
            >
              {/* Pseudo-element for the hover effect */}
              <span className="absolute inset-0 bg-black opacity-0 rounded-full transition-opacity duration-300 ease-out z-0 hover:opacity-15"></span>

              {/* Text above the overlay */}
              <p className="relative z-10 pointer-events-none">
                {ctaElement.callToActionButtonText}
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

const renderCompaniesSection = (section: Section) => {
  const { _id, title, customElements } = section

  return (
    <section key={_id} className="my-[4rem] lg:my-[6rem]">
      {/* Credibility Container */}
      <div className="mt-[2rem] lg:mt-[4rem] flex flex-col gap-y-14 md:px-32 lg:px-64">
        <h1 className="text-2xl font-sofia font-bold md:text-4xl text-center">
          {title}
        </h1>

        {/* Credibity Logo Row Container */}
        <div className="flex flex-col lg:flex-row lg:gap-x-32 2xl:gap-x-48 gap-y-28 lg:gap-y-32 justify-center items-center px-32 xl:px-64">
          {customElements.map((company, index) => {
            const { companyLogo, altText } = company

            return (
              <Image
                key={index}
                src={urlForImage(companyLogo).url()}
                alt={altText}
                className="max-w-[125px] lg:max-w-[150px] h-auto"
                width={150}
                height={150}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

const renderCustomImageSection = (section: Section) => {
  const { _id, title, image } = section

  return (
    <section key={_id} className="my-[4rem] lg:my-[6rem]">
      {/* Custom Image  */}
      <div className="w-full h-[140px] lg:h-[350px] relative">
        <div className="absolute inset-x-0 top-0 z-10 h-7 lg:h-14 bg-gradient-to-b from-white to-transparent" />
        <Image
          className="object-cover object-top"
          src={urlForImage(image).url()}
          alt="Custom Image"
          fill
        />
        <div className="absolute inset-x-0 bottom-0 h-7 lg:h-14 bg-gradient-to-t from-white to-transparent" />
      </div>
    </section>
  )
}

const renderVideoSection = (section: Section) => {
  const { video } = section

  const videoRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current.play()
        } else {
          videoRef.current.pause()
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the video is visible
      },
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current)
      }
    }
  }, [])

  return (
    <section className="mt-[4rem] lg:mt-[6rem] px-8 lg:px-16 xl:px-32 flex flex-col justify-center items-center max-w-[1440px] place-self-center">
      <div className="mt-[2rem] lg:mt-[4rem] w-full">
        {/* Video Container */}
        <div className="relative rounded-3xl overflow-hidden h-[400px] lg:h-[500px] xl:h-[700px] 2xl:h-[700px] w-full shadow-md">
          <video
            ref={videoRef}
            src={urlForFile(video)}
            className="object-contain xl:object-cover w-full h-full"
            controls
            muted
          />
        </div>
      </div>
    </section>
  )
}

const renderHeaderSection = (section: Section) => {
  const { _id, sectionVariant, title, body } = section

  switch (sectionVariant) {
    case 'default':
      return (
        <section
          key={_id}
          id="header-section"
          className="mt-[2rem] xl:mt-[6rem] scroll-mt-[5.5rem] lg:scroll-mt-[2.5rem] px-8 lg:px-16 xl:px-32 max-w-[1440px] place-self-center"
        >
          <h1 className="text-3xl font-sofia font-bold xl:text-5xl text-center ">
            {title}
          </h1>

          <CustomPortableText
            value={body}
            paragraphClasses="mt-4 font-sofia font-light text-center text-md xl:text-xl"
          />
        </section>
      )

    case 'informational':
      return (
        <>
          <div>
            <h2 className="font-sofia font-bold text-3xl xl:text-4xl 2xl:text-5xl text-center text-white">
              {title}
            </h2>

            <CustomPortableText
              value={body}
              paragraphClasses="mt-[2rem] font-sofia font-light text-white text-center xl:text-lg 2xl:text-xl"
            />
          </div>
        </>
      )
  }
}

const renderTestimonialsSection = (section: Section) => {
  const { _id, title, customElements } = section

  const [testimonialsActiveIndex, setTestimonialsActiveIndex] =
    useState<number>(0)

  const handleTestimonialsNext = () => {
    setTestimonialsActiveIndex((prev) => (prev + 1) % customElements.length)
  }

  const handleTestimonialsPrev = () => {
    setTestimonialsActiveIndex((prev) =>
      prev === 0 ? customElements.length - 1 : prev - 1,
    )
  }

  return (
    <section
      key={_id}
      className="mt-[4rem] lg:mt-[6rem] w-full px-5 lg:px-32 xl:px-64"
    >
      <h1 className="text-2xl font-sofia font-bold md:text-4xl text-center">
        {title}
      </h1>

      {/* Testimonials Wrapper */}
      <div className="mt-[2rem] lg:mt-[4rem] mx-auto max-w-[1440px]">
        {/* Testimonials Container */}
        <ul className="relative h-[450px]">
          {/* Testimonial Box */}
          {customElements.map((testimonial, index) => {
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
              <FontAwesomeIcon icon={faChevronLeft} color="white" size="lg" />
            </button>
          </li>
          <li
            className={`flex justify-center items-center rounded-full w-10 h-10 bg-[#96a78d] hover:bg-[#8d9b81] transform duration-300 ease-in-out ${testimonialsActiveIndex === customElements.length - 1 ? 'opacity-50' : 'opacity-100'}`}
          >
            <button
              className="h-[2.5rem] w-[2.5rem] rounded-full"
              disabled={
                testimonialsActiveIndex === customElements.length - 1
                  ? true
                  : false
              }
              onClick={() => handleTestimonialsNext()}
            >
              <FontAwesomeIcon icon={faChevronRight} color="white" size="lg" />
            </button>
          </li>
        </ul>
      </div>
    </section>
  )
}

const renderArticlesSection = (section: Section) => {
  const { _id, title, customElements, ctaElement } = section

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
                    {/* @TODO: Fix the 'category' fetching, maybe make it a list instead! */}
                    Mindfulness
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

const renderFaqSection = (section: Section) => {
  const { _id, title, customElements } = section

  return (
    <section
      key={_id}
      className="my-[4rem] lg:my-[6rem] px-5 lg:px-32 flex flex-col justify-center items-center"
    >
      <h1 className="text-2xl font-sofia font-bold md:text-4xl text-center">
        {title}
      </h1>

      <div className="mt-[2rem] lg:mt-[4rem] w-full">
        <div className="border-b-2">
          <h1 className="font-sofia font-normal uppercase text-2xl my-4">
            Algemeen
          </h1>
        </div>
        {customElements.map((faq, index) => {
          const { question, answer } = faq
          return <FAQItem key={index} question={question} answer={answer} />
        })}
      </div>
    </section>
  )
}

const renderCoreValuesSection = (section: Section) => {
  const { _id, title, customElements } = section

  const [valuesActiveIndex, setValuesActiveIndex] = useState<number>(0)

  const handleValuesNext = () => {
    setValuesActiveIndex((prev) => (prev + 1) % customElements.length)
  }

  const handleValuesPrev = () => {
    setValuesActiveIndex((prev) =>
      prev === 0 ? customElements.length - 1 : prev - 1,
    )
  }
  return (
    <section key={_id} className="mt-[4rem] lg:mt-[6rem] w-full">
      <h2 className="font-sofia font-bold text-3xl xl:text-4xl text-center">
        {title}
      </h2>
      {/* Core Values Wrapper */}
      <div className="mt-[2rem] lg:mt-[4rem] mx-auto max-w-[1440px] px-8 lg:px-16 xl:px-32">
        {/* Core Values Container */}
        <ul className="relative h-[450px]">
          {/* Core Values Box */}
          {customElements.map((value, index) => {
            const { coreValueEmoji, coreValueTitle, coreValueDescription } =
              value

            // Calculate the relative position of the element
            const relativeIndex = index - valuesActiveIndex

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
                className={`rounded-[2.5rem] absolute w-[350px] h-[450px] bg-gradient-to-b from-[#c5d5bc] to-[#8fa58b] px-8 py-10 flex flex-col justify-center items-center space-y-2 shadow-md`}
              >
                <h2 className="mt-4 font-sofia font-normal text-5xl leading-tight text-white text-center">
                  {coreValueEmoji}
                </h2>

                <h3 className="font-sofia font-semibold text-white text-2xl text-center">
                  {coreValueTitle}
                </h3>
                <h3 className="font-sofia font-light text-white text-lg text-center">
                  {coreValueDescription}
                </h3>
              </li>
            )
          })}
        </ul>
        {/* Core Values Control Buttons */}
        <ul className="mt-[2rem] lg:mt-[4rem] w-full h-14 flex flex-row gap-x-4 justify-center lg:justify-end">
          <li
            className={`flex justify-center items-center rounded-full w-10 h-10 bg-[#c5d6bc] hover:bg-[#b7c6ae] transform duration-300 ease-in-out ${valuesActiveIndex === 0 ? 'opacity-50' : 'opacity-100'}`}
          >
            <button
              className="h-[2.5rem] w-[2.5rem] rounded-full"
              disabled={valuesActiveIndex === 0 ? true : false}
              onClick={() => handleValuesPrev()}
            >
              <FontAwesomeIcon icon={faChevronLeft} color="white" size="lg" />
            </button>
          </li>
          <li
            className={`flex justify-center items-center rounded-full w-10 h-10 bg-[#96a78d] hover:bg-[#8d9b81] transform duration-300 ease-in-out ${valuesActiveIndex === customElements.length - 1 ? 'opacity-50' : 'opacity-100'}`}
          >
            <button
              className="h-[2.5rem] w-[2.5rem] rounded-full"
              disabled={
                valuesActiveIndex === customElements.length - 1 ? true : false
              }
              onClick={() => handleValuesNext()}
            >
              <FontAwesomeIcon icon={faChevronRight} color="white" size="lg" />
            </button>
          </li>
        </ul>
      </div>
    </section>
  )
}

const renderInformationalSection = (
  section: Section,
  index: number,
  selectedCategory: string,
  firstSection: any,
  secondSection: any,
  groupIndex: number,
) => {
  const { _id, sectionVariant, title, body, image, customElements } = section

  switch (sectionVariant) {
    case 'informational':
      const isEven = index % 2 === 0

      const [fearSubdisorderIndex, setFearSubdisorderIndex] =
        useState<number>(0)
      const [panicSubdisorderIndex, setPanicSubdisorderIndex] =
        useState<number>(0)

      return (
        <section
          key={_id}
          className="mt-[2rem] xl:mt-[6rem] w-full scroll-mt-[5.5rem] xl:scroll-mt-[2.5rem]"
        >
          <div className="my-[2rem] lg:my-[4rem] flex flex-col place-self-center gap-y-12 lg:gap-y-16 px-8 xl:px-32 max-w-[1440px]">
            <div className="flex flex-col">
              <div
                className={`flex ${
                  isEven
                    ? 'flex-col xl:flex-row'
                    : 'flex-col xl:flex-row-reverse'
                } items-center gap-x-12 gap-y-8`}
              >
                {/* Text */}
                <div className="flex flex-col gap-y-4 lg:gap-y-8 w-full xl:w-1/2">
                  <h2 className="text-2xl xl:text-3xl font-sofia font-bold">
                    {title}
                  </h2>

                  <CustomPortableText
                    value={body}
                    headingClasses={{
                      h3: 'text-md xl:text-lg font-sofia font-light',
                    }}
                    paragraphClasses="text-md font-sofia font-light"
                    linkClasses="text-md font-sofia font-light"
                  />

                  {/* Custom Elements Only for Paniek */}
                  {title === 'Paniek' && customElements && (
                    <PanicDisorders
                      customElements={customElements}
                      selectedIndex={panicSubdisorderIndex}
                      setSelectedIndex={setPanicSubdisorderIndex}
                    />
                  )}
                </div>

                {/* Image */}
                <div className="relative rounded-3xl overflow-hidden h-[400px] lg:h-[500px] w-full xl:w-1/2 shadow-sm">
                  <Image
                    src={urlForImage(image).url()}
                    alt={title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Custom Elements Only for Angst */}
              {/* @TODO: What if Nynke changes the title? */}
              {title === 'Angst' && customElements && (
                <FearDisorders
                  customElements={customElements}
                  selectedIndex={fearSubdisorderIndex}
                  setSelectedIndex={setFearSubdisorderIndex}
                />
              )}
            </div>
          </div>
        </section>
      )

    case 'informationalGrouped':
      return (
        // Wrapper
        // @TODO Shouldn't this wrapper be lifted to the high level function wrap everything in `afterHero`?
        <section
          key={_id}
          className="mt-[2rem] xl:mt-[6rem] px-8 lg:px-16 xl:px-32 max-w-[1440px] place-self-center"
        >
          <InformationalGrouped
            firstSection={firstSection}
            secondSection={secondSection}
            groupIndex={groupIndex}
          />
        </section>
      )

    case 'informationalMockup':
      return (
        <InformationalMockup
          index={index}
          title={title}
          body={body}
          image={image}
        />
      )
    case 'informationalOrganisaties':
      return (
        <>
          {/* Bedrijven Data Container */}
          <div className="flex flex-col-reverse xl:flex-row items-center w-full gap-x-8 gap-y-8 xl:p-8">
            <div className="flex flex-col gap-y-8 w-full xl:w-1/2">
              <h2 className="text-2xl 2xl:text-4xl font-sofia font-bold">
                {title}
              </h2>

              <CustomPortableText
                value={body}
                headingClasses={{
                  h3: 'text-md xl:text-lg 2xl:text-xl font-sofia font-light',
                }}
              />
            </div>

            {/* Media Container */}
            {image ? (
              <div className="relative rounded-3xl overflow-hidden h-[400px] lg:h-[500px] xl:h-[600px] w-full xl:w-1/2 mt-[2rem] xl:mt-0">
                <Image
                  src={urlForImage(image).url()}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            ) : null}
          </div>
        </>
      )
    case 'informationalLetter':
      return (
        <section
          key={_id}
          id="letter-section"
          className="bg-[#F7F7F7] scroll-mt-[4rem] xl:-scroll-mt-[1rem] flex justify-center py-14 px-8 lg:px-32 xl:px-64"
        >
          {/* Letter Box */}
          <div className="rounded-3xl -sm w-full lg:w-[600px] h-full bg-white space-y-8 p-10">
            <CustomPortableText
              value={body}
              paragraphClasses="font-sofia font-light italic text-md xl:text-lg 2xl:text-xl"
            />
          </div>
        </section>
      )
    case 'informationalMedia':
      return (
        <section className="xl:min-h-[calc(100vh-120px)] bg-[#F7F7F7] pt-[5rem] px-8 xl:flex xl:pt-0 ">
          <div className="bg-white rounded-3xl shadow-xl my-[2rem] xl:my-[4rem] max-w-[1440px] mx-auto px-8 py-12 xl:px-16 flex flex-col gap-y-12 h-full place-self-center">
            {customElements.map((media, index) => {
              const { title, date, src, videoFile, isEmbedded } = media

              return (
                <div key={index} className="flex flex-col gap-y-8">
                  <div className="flex flex-col gap-y-4">
                    <h3 className="font-sofia font-bold text-xl">{title}</h3>
                    <p className="font-sofia font-normal text-md">
                      {formatDate(new Date(date))}
                    </p>
                  </div>

                  {isEmbedded ? (
                    <iframe
                      className="w-full"
                      src={src}
                      height="399"
                      width="504"
                      title="Embedded post"
                    ></iframe>
                  ) : (
                    <video
                      src={urlForFile(videoFile)}
                      className="object-cover w-full h-[400px]"
                      controls
                      playsInline
                    />
                  )}
                </div>
              )
            })}
          </div>
        </section>
      )
    case 'informationalArticles':
      const filteredArticles =
        selectedCategory === ''
          ? customElements
          : customElements.filter(
              (article) => article.category?.title === selectedCategory,
            )

      return (
        <div className="flex flex-col xl:flex-row gap-x-8 gap-y-8 flex-grow flex-wrap">
          {filteredArticles.length === 0 ? (
            <div className="flex-grow flex items-center justify-center">
              <p className="font-sofia font-light text-center text-md xl:text-lg 2xl:text-xl">
                Geen artikelen gevonden voor deze categorie.
              </p>
            </div>
          ) : (
            filteredArticles.map((article, index) => {
              const { category, title, slug, coverImage } = article
              return (
                <Link
                  key={index}
                  href={`/blogs/${slug}`}
                  className="relative rounded-[2.5rem] overflow-hidden w-full xl:w-[330px] 2xl:w-[415px] h-[400px] bg-gradient-to-b from-[#c5d5bc] to-[#8fa58b] flex flex-col justify-between shadow-md"
                >
                  <div className="w-full h-[260px] relative">
                    {coverImage && (
                      <Image
                        src={urlForImage(coverImage).url()}
                        alt={`Image for article with ${title}`}
                        fill
                        className="object-cover object-top"
                      />
                    )}
                  </div>
                  <div className="rounded-[2.5rem] rounded-t-none bg-white h-[140px] w-full absolute bottom-0 left-0 flex flex-col justify-center px-8">
                    <h2 className="font-sofia font-light text-md">
                      {category?.title}
                    </h2>
                    <h3 className="font-sofia font-normal text-md">{title}</h3>
                  </div>
                </Link>
              )
            })
          )}
        </div>
      )
    case 'informationalResearch':
      return (
        <>
          <div className="my-[2rem] xl:my-[4rem] flex flex-col gap-y-12 px-8 xl:px-16">
            <div
              key={_id}
              className={`flex flex-col-reverse lg:flex-row justify-between items-center gap-x-12`}
            >
              <div className="flex flex-col gap-y-8 xl:gap-y-12 w-full">
                <h2 className="text-2xl xl:text-3xl 2xl:text-4xl font-sofia font-bold">
                  {title}
                </h2>

                <CustomPortableText
                  value={body}
                  headingClasses={{
                    h3: 'text-md xl:text-lg 2xl:text-xl font-sofia font-bold',
                  }}
                  paragraphClasses="font-sofia font-light text-md xl:text-lg 2xl:text-xl"
                />
              </div>
            </div>
          </div>
        </>
      )
  }
}

const renderCtaSection = (section: Section) => {
  const { _id, ctaElement } = section

  const {
    callToActionButtonText,
    callToActionLink,
    callToActionTitle,
    callToActionText,
  } = ctaElement

  return (
    <section
      key={_id}
      className="my-[4rem] lg:my-[6rem] px-8 lg:px-16 xl:px-32 flex flex-col justify-center items-center place-self-center gap-y-8 max-w-[1440px]"
    >
      <h2 className="text-3xl text-center font-sofia font-bold xl:text-5xl ">
        {callToActionTitle}
      </h2>
      <p className="mt-4 text-center font-sofia font-light text-lg xl:text-xl">
        {callToActionText}
      </p>

      <Link
        href={callToActionLink}
        className="
    relative flex justify-center items-center rounded-full overflow-hidden h-[50px] w-full xl:w-1/2 2xl:w-1/3 mt-2
    bg-gradient-to-b from-[#d4e3c4] to-[#849b6f] text-white font-sofia font-bold text-md xl:text-lg 
    leading-none"
      >
        {/* Pseudo-element for the hover effect */}
        <span className="absolute inset-0 bg-black opacity-0 rounded-full transition-opacity duration-300 ease-out z-0 hover:opacity-15"></span>

        {/* Text above the overlay */}
        <p className="relative z-10 pointer-events-none">
          {callToActionButtonText}
        </p>
      </Link>
    </section>
  )
}

const renderTeamSection = (section: Section) => {
  const { _id, title, body, customElements } = section

  return (
    <section key={_id} className="mt-[4rem] xl:mt-[6rem]">
      <h2 className="font-sofia font-bold text-3xl xl:text-4xl text-center">
        {title}
      </h2>
      <div className="mt-[4rem] max-w-[1440px] mx-auto px-8 lg:px-16 xl:px-32">
        <div className="flex flex-col xl:flex-row gap-8">
          {customElements.map((teamMember, index) => {
            const {
              teamMemberName,
              teamMemberRole,
              teamMemberDescription,
              teamMemberImage,
              teamMemberSocialMediaLinks,
            } = teamMember

            return (
              <div
                key={index}
                className="flex flex-col xl:flex-row w-full shadow-md"
              >
                {/* Image Container */}
                <div className="relative rounded-3xl rounded-b-none xl:rounded-bl-3xl xl:rounded-r-none overflow-hidden xl:w-1/2 xl:h-full lg:h-[700px] md:h-[600px] h-[300px] w-full">
                  <Image
                    className={`object-cover ${index == 0 ? 'scale-110 object-[60%_100%]' : 'object-top'}`}
                    src={urlForImage(teamMemberImage).url()}
                    alt={`${teamMemberName}'s Photo`}
                    fill
                  />
                </div>

                {/* Text Container */}
                <div className="bg-white rounded-3xl rounded-t-none xl:rounded-tr-3xl xl:rounded-l-none xl:w-1/2 w-full p-8 space-y-4">
                  <h2 className="font-sofia font-bold xl:text-lg 2xl:text-xl text-lg ">
                    {teamMemberName}
                  </h2>
                  <h3 className="font-sofia font-light text-gray-500 xl:text-md 2xl:text-lg text-md">
                    {teamMemberRole}
                  </h3>
                  <CustomPortableText
                    value={teamMemberDescription}
                    headingClasses={{
                      h3: 'font-sofia font-light xl:text-md 2xl:text-md text-md xl:min-h-[300px]',
                    }}
                  />

                  {/* Divider Line */}
                  <div className="w-full border-[0.5px] border-[#c5d6bc]"></div>
                  {/* Social Media Links */}
                  <div className="flex flex-row space-x-4">
                    {teamMemberSocialMediaLinks.map((social, index) => {
                      return (
                        <Link key={index} href={social.url} target="_blank">
                          <FontAwesomeIcon
                            // @TODO Replace with a mapping function!
                            icon={faLinkedin}
                            color="#96a78d"
                            size="2xl"
                          />
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <CustomPortableText
          value={body}
          paragraphClasses="py-[4rem] font-sofia font-light text-md xl:text-lg 2xl:text-xl text-center"
        />
      </div>
    </section>
  )
}

// @TODO Extract all of the logic in such components and import them here!
// Helper Components
const FearDisorders = ({ customElements, selectedIndex, setSelectedIndex }) => {
  const selectedDisorder = customElements[selectedIndex]

  return (
    <div className="relative mt-[4rem] rounded-[2.5rem] w-full h-full xl:h-[250px] bg-white shadow-sm p-8 xl:p-0 flex flex-col xl:flex-row items-center gap-y-8">
      {/* Selection Row */}
      <div className="flex flex-row flex-wrap xl:flex-nowrap gap-2.5 justify-center xl:absolute xl:-top-5 xl:left-1/2 xl:transform xl:-translate-x-1/2 z-10">
        {customElements.map((subdisorder, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedIndex(idx)}
            className={`${
              selectedIndex === idx
                ? 'bg-gradient-to-b from-[#d4e3c4] to-[#849b6f] text-white'
                : 'bg-gray-200 hover:bg-gray-300 text-black'
            } rounded-lg text-md xl:text-lg font-sofia font-semibold text-nowrap py-2 px-10 transition duration-300 ease-in-out`}
          >
            {subdisorder.disorderName}
          </button>
        ))}
      </div>

      {/* Body */}
      <div className="flex flex-col xl:px-16 gap-y-4">
        <CustomPortableText
          value={selectedDisorder.disorderDescription}
          paragraphClasses="text-md font-sofia font-light"
        />
      </div>
    </div>
  )
}

const PanicDisorders = ({
  customElements,
  selectedIndex,
  setSelectedIndex,
}) => {
  const selectedDisorder = customElements[selectedIndex]

  return (
    <div className="relative rounded-[2.5rem] w-full h-full bg-white shadow-sm p-8">
      {/* Panic Subdisorders Selection Row */}
      <div className="flex flex-col w-full gap-y-4 lg:gap-y-8">
        <div className="flex flex-col lg:flex-row w-full justify-center gap-x-2 gap-y-4">
          {customElements.map((subdisorder, index) => {
            return (
              <button
                key={index}
                className={`rounded-xl w-full ${selectedIndex == index ? 'bg-gradient-to-b from-[#d4e3c4] to-[#849b6f] text-white' : 'bg-gray-200 hover:bg-gray-300 text-black'} font-sofia font-semibold text-sm xl:text-lg py-2 transition duration-300 ease-in-out`}
                onClick={() => setSelectedIndex(index)}
              >
                {subdisorder.disorderName}
              </button>
            )
          })}
        </div>

        <CustomPortableText
          value={selectedDisorder.disorderDescription}
          paragraphClasses="text-md font-sofia font-light"
        />
      </div>
    </div>
  )
}

const InformationalGrouped = ({
  firstSection,
  secondSection,
  groupIndex,
}: {
  firstSection: Section
  secondSection?: Section
  groupIndex: number
}) => {
  const isEvenGroup = groupIndex % 2 === 0

  return (
    <div
      className={`flex flex-col ${
        isEvenGroup ? 'xl:flex-row' : 'xl:flex-row-reverse'
      } items-center gap-x-12 gap-y-8`}
    >
      {/* Text column */}
      <div className="flex flex-col gap-y-8 xl:w-1/2">
        {[firstSection, secondSection].map((section) => {
          return (
            <div
              key={section?._id}
              className="flex flex-col gap-y-4 lg:gap-y-8 w-full"
            >
              <h2 className="text-2xl xl:text-3xl font-sofia font-bold">
                {section?.title}
              </h2>

              <CustomPortableText
                value={section?.body}
                headingClasses={{
                  h3: 'text-md xl:text-lg 2xl:text-xl font-sofia font-light',
                }}
                paragraphClasses="text-md xl:text-lg font-sofia font-light"
              />
            </div>
          )
        })}
      </div>

      {/* Image column: render only if second section has image */}
      {firstSection?.image && (
        <div className="relative rounded-3xl overflow-hidden h-[400px] lg:h-[500px] xl:h-[700px] w-full xl:w-1/2 shadow-sm">
          <Image
            src={urlForImage(firstSection.image).url()}
            alt={firstSection.title}
            fill
            className="object-cover"
          />
        </div>
      )}
    </div>
  )
}

const InformationalMockup = ({ index, title, body, image }) => {
  return (
    <div
      key={index}
      className="my-[2rem] 2xl:my-[4rem] flex flex-col gap-y-24 xl:gap-y-12 2xl:gap-y-14 px-8 xl:px-24 2xl:px-32"
    >
      <div
        className={`flex flex-col-reverse xl:${
          index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
        } justify-between items-center gap-y-12 gap-x-12`}
      >
        {/* Feature Text Container */}
        <div className="flex flex-col gap-y-8 lg:gap-y-12 w-full xl:w-1/2">
          <h2 className="text-2xl xl:text-3xl 2xl:text-4xl font-sofia font-bold">
            {title}
          </h2>

          <CustomPortableText
            value={body}
            headingClasses={{
              h3: 'text-md xl:text-lg 2xl:text-xl font-sofia font-light',
            }}
          />
        </div>

        {/* Releafe Feature Image Container */}
        {image && (
          <div className="w-full xl:w-1/3 2xl:w-1/3 h-[400px] lg:h-[500px] xl:h-[700px] 2xl:h-[600px] relative my-[4rem] lg:my-[6rem] xl:my-[8rem]">
            <Image
              className={`object-contain ${
                index % 2 === 1
                  ? 'scale-125 lg:scale-150'
                  : 'scale-110 lg:scale-125'
              }`}
              src={urlForImage(image).url()}
              alt=""
              fill
            />
          </div>
        )}
      </div>
    </div>
  )
}

export const sectionRenderers = {
  informational: renderInformationalSection,
  infographic: renderInfographicSection,
  cta: renderCtaSection,
  header: renderHeaderSection,
  customImage: renderCustomImageSection,
  video: renderVideoSection,
  hero: renderHeroSection,
  features: renderFeaturesSection,
  companies: renderCompaniesSection,
  testimonials: renderTestimonialsSection,
  articles: renderArticlesSection,
  faq: renderFaqSection,
  coreValues: renderCoreValuesSection,
  team: renderTeamSection,
}
