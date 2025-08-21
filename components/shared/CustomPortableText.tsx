import { PortableText, PortableTextComponents } from '@portabletext/react'
import { PortableTextBlock } from 'sanity'

import Image from 'next/image'

import { CTAItem } from './CTAItem'
import { EmailSubscription } from './EmailSubscription'
import { InlineSocialMedia } from './InlineSocialMedia'

interface Props {
  value: PortableTextBlock[]
  paragraphClasses?: string
  listItemClasses?: string
  bulletClasses?: string
  numberClasses?: string
  linkClasses?: string
  headingClasses?: {
    h1?: string
    h2?: string
    h3?: string
    h4?: string
    h5?: string
    h6?: string
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
      h1: ({ children }) => <h1 className={headingClasses.h1}>{children}</h1>,
      h2: ({ children }) => <h2 className={headingClasses.h2}>{children}</h2>,
      h3: ({ children }) => <h3 className={headingClasses.h3}>{children}</h3>,
      h4: ({ children }) => <h4 className={headingClasses.h4}>{children}</h4>,
      h5: ({ children }) => <h5 className={headingClasses.h5}>{children}</h5>,
      h6: ({ children }) => <h6 className={headingClasses.h6}>{children}</h6>,
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
      cta: ({ value }) => (
        <CTAItem
          callToActionLink={value.callToActionLink}
          callToActionButtonText={value.callToActionButtonText}
        />
      ),
      emailSubscription: ({ value }) => <EmailSubscription value={value} />,
      inlineSocialMedia: ({ value }) => <InlineSocialMedia value={value} />,
    },
  }

  return <PortableText value={value} components={components} />
}
