import { CustomPortableText } from 'components/shared/CustomPortableText'

interface HeaderInformationalOverOnsProps {
  _id: string
  title: string
  body: any[]
}

export const HeaderInformationalOverOns: React.FC<
  HeaderInformationalOverOnsProps
> = ({ _id, title, body }) => {
  return (
    <section key={_id}>
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
