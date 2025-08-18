import { CustomPortableText } from 'components/shared/CustomPortableText'

interface InformationalOverOnsProps {
  _id: string
  body: any[]
}

export const InformationalOverOns: React.FC<InformationalOverOnsProps> = ({
  _id,
  body,
}) => {
  return (
    <section
      key={_id}
      id="letter-section"
      className="bg-[#F7F7F7] scroll-mt-[4rem] xl:-scroll-mt-[1rem] flex justify-center py-14 px-8 lg:px-32 xl:px-64"
    >
      {/* Letter Box */}
      <div className="rounded-3xl -sm w-full lg:w-[600px] h-full bg-white space-y-8 p-10">
        <CustomPortableText
          value={body}
          paragraphClasses="font-sofia font-light italic text-md xl:text-lg 2xl:text-xl"
        />
      </div>
    </section>
  )
}
