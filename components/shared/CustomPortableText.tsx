import { PortableText, PortableTextComponents } from '@portabletext/react'
import { PortableTextBlock } from 'sanity'

import Image from 'next/image'
import { CTAItem } from './CTAItem'

interface Props {
  value: PortableTextBlock[]
  paragraphClasses?: string
  listItemClasses?: string
  bulletClasses?: string
  numberClasses?: string
  linkClasses?: string
  headingClasses?: {
    h2?: string
    h3?: string
  }
  components?: Partial<PortableTextComponents>
}

export const CustomPortableText = ({
  value,
  paragraphClasses = '',
  listItemClasses = '',
  bulletClasses = '',
  numberClasses = '',
  linkClasses = '',
  headingClasses = {},
  components: customComponents = {},
}: Props) => {
  const components: PortableTextComponents = {
    block: {
      normal: ({ children }) => <p className={paragraphClasses}>{children}</p>,
      h2: ({ children }) => <h2 className={headingClasses.h2}>{children}</h2>,
      h3: ({ children }) => <h3 className={headingClasses.h3}>{children}</h3>,
    },
    list: {
      bullet: ({ children }) => <ul className={bulletClasses}>{children}</ul>,
      number: ({ children }) => <ol className={numberClasses}>{children}</ol>,
    },
    listItem: {
      bullet: ({ children }) => <li className={listItemClasses}>{children}</li>,
      number: ({ children }) => <li className={listItemClasses}>{children}</li>,
    },
    marks: {
      strong: ({ children }) => (
        <strong className="font-semibold">{children}</strong>
      ),
      em: ({ children }) => <em className="italic">{children}</em>,
      link: ({ value, children }) => (
        <a
          href={value.href}
          target="_blank"
          rel="noopener"
          className={`${linkClasses} underline inline-flex items-center`}
        >
          {children}
          <Image
            src="/images/external_link.png"
            width={20}
            height={20}
            alt="External Link Icon"
            className="ml-2"
          />
        </a>
      ),
    },
    types: {
      // ✅ Add custom type for inline CTA
      cta: ({ value }) => (
        // @TODO Make the `CTAItem` take `route` param from `useRouter` and determine gradient colors based on route!
        <CTAItem
          callToActionLink={value.callToActionLink}
          callToActionButtonText={value.callToActionButtonText}
        />
      ),
    },
  }

  return <PortableText value={value} components={components} />
}
