import { CustomPortableText } from 'components/shared/CustomPortableText'
import { urlForImage } from 'lib/sanity.image'

import Image from 'next/image'

interface InformationalMockupProps {
  title: string
  body: any[]
  image: any
  // FUNCTION OVERLOAD
  index: number
}

export const InformationalMockup: React.FC<InformationalMockupProps> = ({
  title,
  body,
  image,
  index,
}) => {
  return (
    <div className="my-[2rem] 2xl:my-[4rem] flex flex-col gap-y-24 xl:gap-y-12 2xl:gap-y-14 px-8 xl:px-24 2xl:px-32">
      <div
        className={`flex flex-col-reverse xl:${
          index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
        } justify-between items-center gap-y-12 gap-x-12`}
      >
        {/* Feature Text Container */}
        <div className="flex flex-col gap-y-8 lg:gap-y-12 w-full xl:w-1/2">
          <h2 className="text-2xl xl:text-3xl 2xl:text-4xl font-sofia font-bold">
            {title}
          </h2>

          <CustomPortableText
            value={body}
            headingClasses={{
              h3: 'text-md xl:text-lg 2xl:text-xl font-sofia font-light',
            }}
          />
        </div>

        {/* Releafe Feature Image Container */}
        {image && (
          <div className="w-full xl:w-1/3 2xl:w-1/3 h-[400px] lg:h-[500px] xl:h-[700px] 2xl:h-[600px] relative my-[4rem] lg:my-[6rem] xl:my-[8rem]">
            <Image
              className={`object-contain ${
                index % 2 === 1
                  ? 'scale-125 lg:scale-150'
                  : 'scale-110 lg:scale-125'
              }`}
              src={urlForImage(image).url()}
              alt=""
              fill
            />
          </div>
        )}
      </div>
    </div>
  )
}
