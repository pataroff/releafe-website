import Image from 'next/image'
import Link from 'next/link'

import { CustomPortableText } from 'components/shared/CustomPortableText'

import { urlForImage } from 'lib/sanity.image'

import { useRouter } from 'next/router'

interface HeroInformationalProps {
  title: string
  body: any[]
  image: any
  ctaElement: any
}

export const HeroInformational: React.FC<HeroInformationalProps> = ({
  title,
  body,
  image,
  ctaElement,
}) => {
  const router = useRouter()
  const { route } = router

  const isMentaleKlachtenPage = route === '/mentale-klachten'
  const isMentaalFitPage = route === '/mentaal-fit'

  const gradientVariant = isMentaleKlachtenPage
    ? 'bg-gradient-to-b from-[#d4e3c4] to-[#849b6f]'
    : isMentaalFitPage
      ? 'bg-gradient-to-b from-[#a8d5ba] to-[#5c946e]'
      : 'bg-gradient-to-b from-[#c5d5bc] to-[#8fa58b]'

  return (
    <section className="xl:min-h-[calc(100vh-120px)] xl:flex">
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
              className={`flex justify-center items-center rounded-full h-[50px] lg:h-[60px] w-full mt-4 ${gradientVariant} transform duration-300 ease-in-out font-sofia font-bold text-white text-md xl:text-lg leading-none`}
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
            priority
            src={urlForImage(image).url()}
            alt="Hero Image (Informational)"
            fill // fill = absolute positioning, therefore container needs relative
            className={
              isMentaalFitPage
                ? 'object-cover object-left'
                : 'object-cover object-center'
            }
          />
        </div>
      </div>
    </section>
  )
}
