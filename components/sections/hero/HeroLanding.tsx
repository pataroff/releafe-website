import Image from 'next/image'
import Link from 'next/link'

import { CustomPortableText } from 'components/shared/CustomPortableText'

import { urlForImage } from 'lib/sanity.image'

interface HeroLandingProps {
  _id: string
  title: string
  body: any[]
  image: any
  ctaElement: any
}

export const HeroLanding: React.FC<HeroLandingProps> = ({
  _id,
  title,
  body,
  image,
  ctaElement,
}) => {
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
}
