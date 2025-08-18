import Image from 'next/image'

import { urlForImage } from 'lib/sanity.image'

interface CustomImageDefaultProps {
  _id: string
  image: any
}

export const CustomImageDefault: React.FC<CustomImageDefaultProps> = ({
  _id,
  image,
}) => {
  return (
    <section key={_id} className="my-[4rem] lg:my-[6rem]">
      {/* Custom Image  */}
      <div className="w-full h-[140px] lg:h-[350px] relative">
        <div className="absolute inset-x-0 top-0 z-10 h-7 lg:h-14 bg-gradient-to-b from-white to-transparent" />
        <Image
          className="object-cover object-top"
          src={urlForImage(image).url()}
          alt="Custom Image"
          fill
        />
        <div className="absolute inset-x-0 bottom-0 h-7 lg:h-14 bg-gradient-to-t from-white to-transparent" />
      </div>
    </section>
  )
}
