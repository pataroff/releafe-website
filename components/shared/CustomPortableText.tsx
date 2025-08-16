import { useState } from 'react'

import axios from 'axios'

import { PortableText, PortableTextComponents } from '@portabletext/react'
import { PortableTextBlock } from 'sanity'

import Image from 'next/image'
import { CTAItem } from './CTAItem'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

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

const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

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
  const [hasSubscribed, setHasSubscribed] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!emailRegex.test(email)) {
      console.log('Invalid email address provided')
      return
    }

    try {
      const response = await axios.post('/api/subscribe', { email })
      console.log('Success:', response.data)
      setHasSubscribed(true)
    } catch (error) {
      console.error('Error:', error.response?.data || 'Unknown error')
      setHasSubscribed(false)
    }
  }

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
      // ✅ Add custom type for inline CTA
      cta: ({ value }) => (
        // @TODO Make the `CTAItem` take `route` param from `useRouter` and determine gradient colors based on route!
        <CTAItem
          callToActionLink={value.callToActionLink}
          callToActionButtonText={value.callToActionButtonText}
        />
      ),
      emailSubscription: ({ value }) => (
        <div className="space-y-6">
          <h2 className="font-sofia font-bold text-xl xl:text-2xl 2xl:text-3xl">
            {value.heading}
          </h2>
          {hasSubscribed ? (
            <h3 className="font-sofia font-light text-lg xl:text-xl 2xl:text-2xl">
              {value.successMessage}
            </h3>
          ) : (
            <form
              className="flex flex-col items-center lg:flex-row gap-x-2 gap-y-3 w-full"
              onSubmit={handleSubmit}
            >
              <input
                className="rounded-full bg-gray-100 w-full xl:w-2/3 font-sofia text-md xl:text-lg h-[50px] xl:h-[60px] p-6 outline-none z-10"
                type="email"
                placeholder={value.placeholder}
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="cursor-pointer flex justify-center items-center rounded-full h-[50px] xl:h-[60px] w-full xl:w-1/2 lg:w-1/3 bg-[#c5d5bc] hover:bg-[#b7c6ae] transform duration-300 ease-in-out font-sofia font-bold text-white text-lg lg:text-xl leading-none"
                type="submit"
                value={value.buttonText}
              />
            </form>
          )}
        </div>
      ),
      inlineSocialMedia: ({ value }) => (
        <Link href={value.url} target="_blank" className="block w-fit h-fit">
          <FontAwesomeIcon
            icon={value.platform === 'linkedin' ? faLinkedin : null}
            className="text-3xl xl:text-4xl 2xl:text-5xl"
          />
        </Link>
      ),
    },
  }

  return <PortableText value={value} components={components} />
}
