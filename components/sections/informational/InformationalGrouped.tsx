import { CustomPortableText } from 'components/shared/CustomPortableText'

import Image from 'next/image'

import { Section } from 'types'

import { urlForImage } from 'lib/sanity.image'

interface InformationalGroupedProps {
  // FUNCTION OVERLOAD
  firstSection: Section
  secondSection?: Section
  groupIndex: number
}

export const InformationalGrouped: React.FC<InformationalGroupedProps> = ({
  firstSection,
  secondSection,
  groupIndex,
}) => {
  const isEvenGroup = groupIndex % 2 === 0

  // Compute fallback image and title
  const imageSection = firstSection?.image
    ? firstSection
    : secondSection?.image
      ? secondSection
      : null

  return (
    <div
      className={`flex flex-col ${
        isEvenGroup ? 'xl:flex-row' : 'xl:flex-row-reverse'
      } items-center gap-x-12 gap-y-8`}
    >
      {/* Text column */}
      <div className="flex flex-col gap-y-8 xl:w-1/2">
        {[firstSection, secondSection].map((section) => {
          if (!section) return null
          return (
            <div
              key={section._id}
              className="flex flex-col gap-y-4 lg:gap-y-8 w-full"
            >
              <h2 className="text-2xl xl:text-3xl font-sofia font-bold">
                {section.title}
              </h2>

              <CustomPortableText
                value={section.body}
                headingClasses={{
                  h3: 'text-md xl:text-lg 2xl:text-xl font-sofia font-light',
                }}
                paragraphClasses="text-md xl:text-lg font-sofia font-light"
              />
            </div>
          )
        })}
      </div>

      {/* Fallback image logic */}
      {imageSection && (
        <div className="relative rounded-3xl overflow-hidden h-[400px] lg:h-[500px] xl:h-[700px] w-full xl:w-1/2 shadow-sm">
          <Image
            src={urlForImage(imageSection.image).url()}
            alt={imageSection.title}
            fill
            className="object-cover"
          />
        </div>
      )}
    </div>
  )
}
