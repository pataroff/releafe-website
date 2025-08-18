import Image from 'next/image'

import { CustomPortableText } from 'components/shared/CustomPortableText'

import { urlForImage } from 'lib/sanity.image'

interface HeroCallToActionProps {
  _id: string
  title: string
  body: any[]
  image: any
}

export const HeroCallToAction: React.FC<HeroCallToActionProps> = ({
  _id,
  title,
  body,
  image,
}) => {
  return (
    <section
      key={_id}
      className="xl:min-h-[calc(100vh-120px)] bg-[#F7F7F7] xl:flex"
    >
      <div className="flex flex-col-reverse justify-between xl:flex-row xl:justify-center xl:items-center max-w-[1440px] min-h-full mx-auto pt-[5rem] xl:pt-0 px-8 py-12">
        <div className="flex flex-col gap-y-6 w-full xl:w-3/4 bg-white p-10 xl:p-12 rounded-3xl shadow-xl">
          <h1 className="font-sofia font-bold text-3xl xl:text-4xl 2xl:text-5xl">
            {title}
          </h1>

          <div className="space-y-6">
            <CustomPortableText
              value={body}
              headingClasses={{
                h1: 'font-sofia font-bold text-xl xl:text-2xl 2xl:text-3xl',
                h2: 'font-sofia font-bold text-xl xl:text-2xl 2xl:text-3xl',
                h3: 'font-sofia font-light text-md lg:text-lg xl:text-xl',
              }}
            />
          </div>
        </div>

        {/* Image Container */}
        <div className="w-full xl:w-1/2 h-[600px] lg:h-[700px] xl:h-[600px] 2xl:h-[700px] relative">
          <Image
            className="object-contain xl:scale-110"
            src={urlForImage(image).url()}
            alt=""
            fill
          />
        </div>
      </div>
    </section>
  )
}
