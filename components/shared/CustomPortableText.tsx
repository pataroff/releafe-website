import { PortableText, PortableTextComponents } from '@portabletext/react'
import { PortableTextBlock } from 'sanity'

interface Props {
  value: PortableTextBlock[]
  paragraphClasses?: string
  listItemClasses?: string
  bulletClasses?: string
  numberClasses?: string
  headingClasses?: {
    h2?: string
    h3?: string
  }
}

export const CustomPortableText = ({
  value,
  paragraphClasses = '',
  listItemClasses = '',
  bulletClasses = '',
  numberClasses = '',
  headingClasses = {},
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
          className="text-[#96a58d] hover:underline"
        >
          {children}
        </a>
      ),
    },
  }

  return <PortableText value={value} components={components} />
}
