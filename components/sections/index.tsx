import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { FeatureItem, Section } from 'types'

import { urlForImage } from 'lib/sanity.image'
import { CustomPortableText } from 'components/shared/CustomPortableText'

const renderHeroSection = (section: Section) => {
  const { title, body, ctaElement } = section

  return (
    <section key={section._id} className="h-full">
      {/* Hero Image */}
      <div className="relative w-full h-[200px] lg:h-[480px] 2xl:h-[580px] z-0 mb-[40px]">
        <span className="absolute w-full h-[200px] lg:h-full">
          <Image
            src="/images/hero_image.jpeg"
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
          <h1 className="text-2xl font-sofia font-bold xl:text-5xl">{title}</h1>

          {/* Description */}
          <div className="mt-4 font-sofia font-light text-md xl:text-lg 2xl:text-xl">
            <CustomPortableText value={body} />
          </div>

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
}

const renderFeaturesSection = (section: Section) => {
  const { title, customElements } = section
  const [featuresSelectedIndex, setFeaturesSelectedIndex] = useState<number>(0)

  const selectedFeature = customElements[featuresSelectedIndex]
  const { featureName, featureDescription, image, ctaElement } = selectedFeature

  return (
    <section className="mt-[4rem] lg:mt-[6rem] px-5 lg:px-32 xl:px-64 2xl:px-96 flex flex-col justify-center items-center">
      {/* Title */}
      <h1 className="text-2xl font-sofia font-bold md:text-4xl text-center px-5">
        {title}
      </h1>

      {/* Features Box */}
      <div className="relative mt-[2rem] lg:mt-[4rem] rounded-[2.5rem] max-w-[1440px] w-full h-full bg-[#f0f4ed] shadow-sm p-8 lg:p-0">
        {/* Features Selection Row Container */}
        <div className="flex flex-row flex-wrap lg:flex-nowrap gap-2.5 justify-center lg:absolute lg:-top-5 lg:left-1/2 lg:transform lg:-translate-x-1/2 z-10 ">
          {/* Feature Selection Box */}
          {customElements.map((feature: FeatureItem, index) => {
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

export const sectionRenderers = {
  hero: renderHeroSection,
  features: renderFeaturesSection,
  // Add others: partners, articles, faq, etc.
}
