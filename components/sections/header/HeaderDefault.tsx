import { CustomPortableText } from 'components/shared/CustomPortableText'

interface HeaderDefaultProps {
  _id: string
  title: string
  body: any[]
}

export const HeaderDefault: React.FC<HeaderDefaultProps> = ({
  _id,
  title,
  body,
}) => {
  return (
    <section
      key={_id}
      id="header-section"
      className="mt-[2rem] xl:mt-[6rem] scroll-mt-[5.5rem] lg:scroll-mt-[2.5rem] px-8 lg:px-16 xl:px-32 max-w-[1440px] place-self-center"
    >
      <h1 className="text-3xl font-sofia font-bold xl:text-5xl text-center ">
        {title}
      </h1>

      <CustomPortableText
        value={body}
        paragraphClasses="mt-4 font-sofia font-light text-center text-md xl:text-xl"
      />
    </section>
  )
}
