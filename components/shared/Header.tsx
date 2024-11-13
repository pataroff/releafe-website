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
      <h1 className="text-2xl font-sofia font-bold md:text-5xl">{title}</h1>
      {/* Description */}
      {description && (
        <div className="mt-4 font-sofia font-light text-md md:text-xl">
          <CustomPortableText value={description} />
        </div>
      )}
      <button
        className="
        flex justify-center items-center rounded-full h-[60px] w-[18rem] mt-4 bg-[#c5d5bc] hover:bg-[#b7c6ae] transform duration-300 ease-in-out 
        font-sofia font-bold text-white text-xl leading-none"
      >
        Probeer Releafe gratis
      </button>
    </div>
  )
}
