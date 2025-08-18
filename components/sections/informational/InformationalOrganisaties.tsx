import { CustomPortableText } from 'components/shared/CustomPortableText'
import { urlForImage } from 'lib/sanity.image'

import Image from 'next/image'

interface InformationalOrganisatiesProps {
  _id: string
  title: string
  body: any[]
  image: any
}

export const InformationalOrganisaties: React.FC<
  InformationalOrganisatiesProps
> = ({ _id, title, body, image }) => {
  return (
    <div
      key={_id}
      className="flex flex-col-reverse xl:flex-row items-center w-full gap-x-8 gap-y-8 xl:p-8"
    >
      <div className="flex flex-col gap-y-8 w-full xl:w-1/2">
        <h2 className="text-2xl 2xl:text-4xl font-sofia font-bold">{title}</h2>

        <CustomPortableText
          value={body}
          headingClasses={{
            h3: 'text-md xl:text-lg 2xl:text-xl font-sofia font-light',
          }}
        />
      </div>

      {/* Media Container */}
      {image ? (
        <div className="relative rounded-3xl overflow-hidden h-[400px] lg:h-[500px] xl:h-[600px] w-full xl:w-1/2 mt-[2rem] xl:mt-0">
          <Image
            src={urlForImage(image).url()}
            alt=""
            fill
            className="object-cover"
          />
        </div>
      ) : null}
    </div>
  )
}
