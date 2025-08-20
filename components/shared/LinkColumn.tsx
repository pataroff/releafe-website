import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'

const socialIcons: Record<string, JSX.Element> = {
  linkedin: <FontAwesomeIcon icon={faLinkedinIn} color="white" size="lg" />,
  facebook: <FontAwesomeIcon icon={faFacebookF} color="white" size="lg" />,
  twitter: <FontAwesomeIcon icon={faXTwitter} color="white" size="lg" />,
  instagram: <FontAwesomeIcon icon={faInstagram} color="white" size="lg" />,
}

import Link from 'next/link'
import Image from 'next/image'
import { urlForImage } from 'lib/sanity.image'

import { deleteCookie } from 'cookies-next'

const handleResetConsent = () => {
  deleteCookie('localConsent')
  window.dispatchEvent(new Event('reset-cookie-consent'))
}

export const LinkColumn = ({
  title,
  links,
}: {
  title: string
  links: { label?: string; url: string; iconSrc?: {}; platform?: string }[]
}) => {
  const isSocialColumn = links.every((link) => !!link.platform)

  return (
    <div
      className={`flex flex-col gap-y-2 ${isSocialColumn ? 'items-start' : ''}`}
    >
      {title !== 'Social Media Links' && (
        <h1 className="font-sofia font-medium text-lg text-white text-nowrap mb-1">
          {title}
        </h1>
      )}

      <div className={isSocialColumn ? 'flex gap-4' : 'flex flex-col gap-y-2'}>
        {links.map((link, index) => {
          const isCookieLink = link.label === 'Cookies wijzigen'
          const isSocialLink = !!link.platform

          return isCookieLink ? (
            <button
              key={index}
              onClick={handleResetConsent}
              className="font-sofia font-light text-md text-white text-nowrap leading-snug text-left"
            >
              {link.label}
            </button>
          ) : (
            <Link
              key={index}
              href={link.url}
              className={`font-sofia font-light text-md text-white leading-snug ${
                isSocialLink ? 'p-1 hover:text-gray-300' : 'text-nowrap'
              }`}
            >
              {isSocialLink ? (
                socialIcons[link.platform] // @TODO Do we need a fallback here?
              ) : link.iconSrc ? (
                <Image
                  src={urlForImage(link.iconSrc).url()}
                  alt={link.label}
                  width={150}
                  height={50}
                />
              ) : (
                link.label
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
