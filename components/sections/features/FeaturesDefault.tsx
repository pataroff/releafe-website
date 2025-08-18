import { useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'

// @TODO Should we define types for all custom types?
import { FeatureItem } from 'types'

import { urlForImage } from 'lib/sanity.image'

interface FeaturesDefaultProps {
  _id: string
  title: string
  customElements: any[]
}

export const FeaturesDefault: React.FC<FeaturesDefaultProps> = ({
  _id,
  title,
  customElements,
}) => {
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
