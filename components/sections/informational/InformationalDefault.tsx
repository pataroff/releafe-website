import { useState } from 'react'

import Image from 'next/image'

import { urlForImage } from 'lib/sanity.image'

import { CustomPortableText } from 'components/shared/CustomPortableText'
import { FearDisorders } from 'components/shared/FearDisorders'
import { PanicDisorders } from 'components/shared/PanicDisorders'

interface InformationalDefaultProps {
  title: string
  body: any[]
  image: any
  customElementsVariant: string
  customElements: any[]
  // FUNCTION OVERLOAD
  index: number
}

export const InformationalDefault: React.FC<InformationalDefaultProps> = ({
  title,
  body,
  image,
  customElementsVariant,
  customElements,
  index,
}) => {
  const isEven = index % 2 === 0

  const [fearSubdisorderIndex, setFearSubdisorderIndex] = useState<number>(0)
  const [panicSubdisorderIndex, setPanicSubdisorderIndex] = useState<number>(0)
  return (
    <section className="mt-[2rem] xl:mt-[6rem] w-full scroll-mt-[5.5rem] xl:scroll-mt-[2.5rem]">
      <div className="my-[2rem] lg:my-[4rem] flex flex-col place-self-center gap-y-12 lg:gap-y-16 px-8 xl:px-32 max-w-[1440px]">
        <div className="flex flex-col">
          <div
            className={`flex ${
              isEven ? 'flex-col xl:flex-row' : 'flex-col xl:flex-row-reverse'
            } items-center gap-x-12 gap-y-8`}
          >
            {/* Text */}
            <div className="flex flex-col gap-y-4 lg:gap-y-8 w-full xl:w-1/2">
              <h2 className="text-2xl xl:text-3xl font-sofia font-bold">
                {title}
              </h2>

              <CustomPortableText
                value={body}
                headingClasses={{
                  h3: 'text-md xl:text-lg font-sofia font-light',
                }}
                paragraphClasses="text-md font-sofia font-light"
                linkClasses="text-md font-sofia font-light"
              />

              {/* Custom Elements Only for Paniek */}
              {customElementsVariant === 'paniek' && customElements && (
                <PanicDisorders
                  customElements={customElements}
                  selectedIndex={panicSubdisorderIndex}
                  setSelectedIndex={setPanicSubdisorderIndex}
                />
              )}
            </div>

            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden h-[400px] lg:h-[500px] w-full xl:w-1/2 shadow-sm">
              <Image
                src={urlForImage(image).url()}
                alt={title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Custom Elements Only for Angst */}
          {customElementsVariant === 'angst' && customElements && (
            <FearDisorders
              customElements={customElements}
              selectedIndex={fearSubdisorderIndex}
              setSelectedIndex={setFearSubdisorderIndex}
            />
          )}
        </div>
      </div>
    </section>
  )
}
