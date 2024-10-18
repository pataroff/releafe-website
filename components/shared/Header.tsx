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
      <div className="text-2xl font-sofia font-extrabold md:text-5xl">
        {title}
      </div>
      {/* Description */}
      {description && (
        <div className="mt-4 font-sofia font-light text-md md:text-xl">
          <CustomPortableText value={description} />
        </div>
      )}
      <div className="flex justify-center items-center rounded-full h-[60px] w-[18rem] mt-4 bg-[#c5d5bc] ">
        <button className="font-sofia font-extrabold text-white text-xl leading-none mb-1">
          Probeer Releafe gratis
        </button>
      </div>
    </div>
  )
}
