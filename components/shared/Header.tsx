import Link from 'next/link'
import { CustomPortableText } from 'components/shared/CustomPortableText'

interface HeaderProps {
  centered?: boolean
  description?: any[]
  title?: string
}
export function Header(props: HeaderProps) {
  const { title, description, centered = false } = props
  if (!description && !title) {
    return null
  }
  return (
    <div
      className={`flex flex-col justify-center items-center gap-y-2
    ${centered ? 'text-center' : ''}`}
    >
      {/* Title */}
      <h1 className="text-2xl font-sofia font-bold lg:text-5xl">{title}</h1>
      {/* Description */}
      {description && (
        <div className="mt-4 font-sofia font-light text-md lg:text-lg 2xl:text-xl">
          <CustomPortableText value={description} />
        </div>
      )}

      <Link
        href="/probeer-releafe"
        className="
    relative flex justify-center items-center rounded-full overflow-hidden h-[50px] lg:h-[60px] w-full lg:w-[18rem] mt-4 
    bg-gradient-to-b from-[#c5d5bc] to-[#8fa58b] text-white font-sofia font-bold text-lg xl:text-lg 
    leading-none"
      >
        {/* Pseudo-element for the hover effect */}
        <span className="absolute inset-0 bg-black opacity-0 rounded-full transition-opacity duration-300 ease-out z-0 hover:opacity-15"></span>

        {/* Text above the overlay */}
        <p className="relative z-10 pointer-events-none">Probeer Releafe nu</p>
      </Link>
    </div>
  )
}
