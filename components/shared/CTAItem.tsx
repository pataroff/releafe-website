import Link from 'next/link'
import { useRouter } from 'next/router'

interface CTAItemProps {
  callToActionLink: string
  callToActionButtonText: string
}

export const CTAItem = ({
  callToActionLink,
  callToActionButtonText,
}: CTAItemProps) => {
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
    <Link
      href={callToActionLink}
      className={`relative flex justify-center items-center rounded-full h-[50px] lg:h-[60px]
        w-full lg:w-[24rem]
       ${gradientVariant} transform duration-300 ease-in-out font-sofia font-bold text-white text-md xl:text-lg leading-none`}
    >
      {/* Hover overlay */}
      <span className="absolute inset-0 bg-black opacity-0 rounded-full transition-opacity duration-300 ease-out z-0 hover:opacity-15"></span>

      {/* CTA Text */}
      <p className="relative z-10 pointer-events-none">
        {callToActionButtonText}
      </p>
    </Link>
  )
}
