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

import { deleteCookie } from 'cookies-next'

import { urlForImage } from 'lib/sanity.image'

const handleResetConsent = () => {
  deleteCookie('localConsent')
  window.dispatchEvent(new Event('reset-cookie-consent'))
}

function LinkColumn({
  title,
  links,
}: {
  title: string
  links: { label?: string; url: string; iconSrc?: {}; platform?: string }[]
}) {
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

export function Footer({ footer }) {
  const { sections } = footer

  if (!sections || sections.length === 0) return null

  return (
    <footer className="bottom-0 w-full h-full lg:h-[400px] bg-[#96a58d] px-5 lg:px-32 flex flex-col justify-between pt-12 pb-8">
      <div className="flex flex-col justify-center gap-y-8 lg:flex-row gap-x-20 lg:gap-x-16 xl:gap-x-32">
        {/* Column Links */}
        {sections.map((section, index) => (
          <LinkColumn
            key={index}
            title={section.title}
            links={section.customElements}
          />
        ))}
      </div>

      <h3 className="font-sofia font-light text-white text-md lg:text-sm text-center my-[1.25rem] lg:mb-0">
        Copyright © {new Date().getFullYear()} Releafe. Alle rechten
        voorbehouden.
      </h3>
    </footer>
  )
}
