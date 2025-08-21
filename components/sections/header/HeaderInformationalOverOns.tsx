import { CustomPortableText } from 'components/shared/CustomPortableText'

interface HeaderInformationalOverOnsProps {
  title: string
  body: any[]
}

export const HeaderInformationalOverOns: React.FC<
  HeaderInformationalOverOnsProps
> = ({ title, body }) => {
  return (
    <section>
      <h2 className="font-sofia font-bold text-3xl xl:text-4xl 2xl:text-5xl text-center text-white">
        {title}
      </h2>

      <CustomPortableText
        value={body}
        paragraphClasses="mt-[2rem] font-sofia font-light text-white text-center xl:text-lg 2xl:text-xl"
      />
    </section>
  )
}
