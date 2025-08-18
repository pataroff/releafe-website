import Image from 'next/image'

import { urlForImage } from 'lib/sanity.image'

interface CompaniesDefaultProps {
  _id: string
  title: string
  customElements: any[]
}

export const CompaniesDefault: React.FC<CompaniesDefaultProps> = ({
  _id,
  title,
  customElements,
}) => {
  return (
    <section key={_id} className="my-[4rem] lg:my-[6rem]">
      {/* Credibility Container */}
      <div className="mt-[2rem] lg:mt-[4rem] flex flex-col gap-y-14 md:px-32 lg:px-64">
        <h1 className="text-2xl font-sofia font-bold md:text-4xl text-center">
          {title}
        </h1>

        {/* Credibity Logo Row Container */}
        <div className="flex flex-col lg:flex-row lg:gap-x-32 2xl:gap-x-48 gap-y-28 lg:gap-y-32 justify-center items-center px-32 xl:px-64">
          {customElements.map((company, index) => {
            const { companyLogo, altText } = company

            return (
              <Image
                key={index}
                src={urlForImage(companyLogo).url()}
                alt={altText}
                className="max-w-[125px] lg:max-w-[150px] h-auto"
                width={150}
                height={150}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
