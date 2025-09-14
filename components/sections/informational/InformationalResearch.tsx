import { CustomPortableText } from 'components/shared/CustomPortableText'

interface InformationalResearchProps {
  title: string
  body: any[]
}

export const InformationalResearch: React.FC<InformationalResearchProps> = ({
  title,
  body,
}) => {
  return (
    <div className="my-[2rem] xl:my-[4rem] flex flex-col gap-y-12 px-8 xl:px-16">
      <div
        className={`flex flex-col-reverse lg:flex-row justify-between items-center gap-x-12`}
      >
        <div className="flex flex-col gap-y-8 xl:gap-y-12 w-full">
          <h2 className="text-2xl xl:text-3xl 2xl:text-4xl font-sofia font-bold">
            {title}
          </h2>
          <CustomPortableText
            value={body}
            paragraphClasses="font-sofia font-light xl:text-lg 2xl:text-xl"
            listItemClasses="font-sofia font-light xl:text-lg 2xl:text-xl"
            bulletClasses="list-disc marker:text-black pl-6 space-y-4"
            numberClasses="list-decimal marker:text-black pl-6 space-y-4"
            headingClasses={{
              h2: 'font-sofia font-bold text-2xl xl:text-3xl mb-6',
              h3: 'font-sofia font-bold text-xl xl:text-2xl mb-4',
            }}
          />
        </div>
      </div>
    </div>
  )
}
