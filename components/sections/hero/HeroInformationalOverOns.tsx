import Image from 'next/image'
import Link from 'next/link'

import { CustomPortableText } from 'components/shared/CustomPortableText'

import { urlForImage } from 'lib/sanity.image'

interface HeroInformationalOverOnsProps {
  _id: string
  title: string
  body: any[]
  image: any
}

export const HeroInformationalOverOns: React.FC<
  HeroInformationalOverOnsProps
> = ({ _id, title, body, image }) => {
  return (
    <section
      key={_id}
      className="xl:min-h-[calc(100vh-120px)] bg-[#F7F7F7] xl:flex xl:flex-col xl:justify-center"
    >
      {/* Main Wrapper */}
      <div className="flex flex-col min-h-full w-full px-8 lg:px-16 xl:px-32 pb-4 xl:pb-8 pt-28 xl:pt-12 2xl:pt-16 max-w-[1440px] place-self-center">
        {/* Main Container */}
        <div className="flex flex-col-reverse xl:flex-row justify-between items-center bg-white rounded-3xl xl:px-12 px-8 py-8 gap-y-8 shadow-lg">
          {/* Text Container */}
          <div className="space-y-8 xl:w-1/2 w-full">
            <h1 className="text-3xl/[2.5rem] font-sofia font-bold xl:text-4xl/[3rem] 2xl:text-5xl/[4rem]">
              {title}
            </h1>
            <CustomPortableText
              value={body}
              paragraphClasses="text-md xl:text-lg font-sofia font-light"
            />
          </div>
          {/* Image Container */}
          <div className="relative rounded-3xl overflow-hidden w-full xl:w-[400px] xl:h-[400px] lg:h-[881px] md:h-[600px] h-[300px] shadow-md">
            <Image src={urlForImage(image).url()} alt={'Releafe Logo'} fill />
          </div>
        </div>
        {/* Scroll Button */}
        <button
          onClick={() => {
            document
              .getElementById('letter-section')
              ?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="mt-[2rem] xl:mt-[4rem] w-16 h-16 rounded-[1.75rem] hover:bg-gray-200 flex justify-center self-center items-center transform duration-300 ease-in-out"
        >
          <Image
            src="/images/chevron_down.png"
            alt="Chevron Down"
            width={40}
            height={40}
          />
        </button>
      </div>
    </section>
  )
}
