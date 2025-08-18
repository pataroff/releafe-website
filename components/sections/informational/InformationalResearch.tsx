import { CustomPortableText } from 'components/shared/CustomPortableText'

interface InformationalResearchProps {
  _id: string
  title: string
  body: any[]
}

export const InformationalResearch: React.FC<InformationalResearchProps> = ({
  _id,
  title,
  body,
}) => {
  return (
    <div
      key={_id}
      className="my-[2rem] xl:my-[4rem] flex flex-col gap-y-12 px-8 xl:px-16"
    >
      <div
        key={_id}
        className={`flex flex-col-reverse lg:flex-row justify-between items-center gap-x-12`}
      >
        <div className="flex flex-col gap-y-8 xl:gap-y-12 w-full">
          <h2 className="text-2xl xl:text-3xl 2xl:text-4xl font-sofia font-bold">
            {title}
          </h2>

          <CustomPortableText
            value={body}
            headingClasses={{
              h3: 'text-md xl:text-lg 2xl:text-xl font-sofia font-bold',
            }}
            paragraphClasses="font-sofia font-light text-md xl:text-lg 2xl:text-xl"
          />
        </div>
      </div>
    </div>
  )
}
