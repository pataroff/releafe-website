import Link from 'next/link'

import { CTAElement } from 'types'

interface CTADefaultProps {
  _id: string
  ctaElement: CTAElement
}

export const CTADefault: React.FC<CTADefaultProps> = ({ _id, ctaElement }) => {
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
