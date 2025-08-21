import Image from 'next/image'

import { CustomPortableText } from 'components/shared/CustomPortableText'

import { urlForImage } from 'lib/sanity.image'

interface HeroCallToActionProps {
  title: string
  body: any[]
  image: any
}

export const HeroCallToAction: React.FC<HeroCallToActionProps> = ({
  title,
  body,
  image,
}) => {
  return (
    <section className="xl:min-h-[calc(100vh-120px)] bg-[#F7F7F7] xl:flex">
      <div className="flex flex-col-reverse xl:flex-row justify-center items-center max-w-[1440px] min-h-full mx-auto px-8 xl:px-16 py-12 xl:gap-x-12">
        <div className="flex flex-col gap-y-6 w-full xl:w-2/3 bg-white p-10 xl:p-12 rounded-3xl shadow-xl">
          <h1 className="font-sofia font-bold text-3xl xl:text-4xl 2xl:text-5xl">
            {title}
          </h1>

          <div className="space-y-6">
            <CustomPortableText
              value={body}
              headingClasses={{
                h2: 'font-sofia font-bold text-xl xl:text-2xl 2xl:text-3xl',
              }}
              paragraphClasses="font-sofia font-light text-md xl:text-lg"
            />
          </div>
        </div>

        {/* Image Container */}
        <div className="w-full xl:w-1/3 h-[600px] lg:h-[700px] xl:h-[600px] 2xl:h-[700px] relative">
          <Image
            className="object-contain xl:scale-110"
            src={urlForImage(image).url()}
            alt="Hero (Call To Action)"
            fill
          />
        </div>
      </div>
    </section>
  )
}
