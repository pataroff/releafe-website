import type { PortableTextBlock } from '@portabletext/types'
import { CustomPortableText } from 'components/shared/CustomPortableText'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'

import Link from 'next/link'
import Image from 'next/image'

const linkColumns = [
  {
    title: 'Hulp',
    links: [
      { label: 'Contact', href: 'mailto:info@releafe.nl' },
      { label: 'Algemene voorwaarden', href: '/' },
      { label: 'Privacybeleid', href: '/' },
      { label: 'Cookies wijzigen', href: '/' },
    ],
  },
  {
    title: 'Over',
    links: [
      { label: 'Over ons', href: '/over-ons' },
      { label: 'In de media', href: '/in-de-media' },
      { label: 'Artikelen', href: '/artikelen' },
      { label: 'Onderzoek', href: '/onderzoek' },
    ],
  },
  {
    title: 'Informatie over mentaal welzijn',
    links: [
      { label: 'Mentale klachten', href: '/mentale-klachten' },
      { label: 'Mentaal fit', href: '/mentaal-fit' },
      { label: 'Ontdek Releafe', href: '/ontdek-releafe' },
    ],
  },
  {
    title: 'Download de app',
    links: [
      {
        label: 'Google Play',
        href: '/probeer-releafe',
        iconSrc: '/images/Google_Play_Badge_Dutch.png',
      },
      {
        label: 'App Store',
        href: '/probeer-releafe',
        iconSrc: '/images/App_Store_Badge_Dutch.svg',
      },
    ],
  },
]

const socialLinks = [
  // { icon: faFacebookF, href: '#', label: 'Facebook' },
  // { icon: faInstagram, href: '#', label: 'Instagram' },
  // { icon: faXTwitter, href: '#', label: 'Twitter' },
  {
    icon: faLinkedinIn,
    href: 'https://www.linkedin.com/company/releafeapp/',
    label: 'LinkedIn',
  },
]

function LinkColumn({
  title,
  links,
}: {
  title: string
  links: { label: string; href: string; iconSrc?: string }[]
}) {
  return (
    <div className="flex flex-col gap-y-2">
      <h1 className="font-sofia font-medium text-lg text-white text-nowrap mb-1">
        {title}
      </h1>
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.href}
            className="font-sofia font-light text-md text-white text-nowrap leading-snug"
          >
            {!link.iconSrc ? (
              link.label
            ) : (
              <Image
                src={link.iconSrc!} // Non-null assertion because icons are guaranteed for this column
                alt={link.label}
                width={150}
                height={50}
              />
            )}
          </Link>
        )
      })}
    </div>
  )
}

export function Footer() {
  return (
    <footer className="bottom-0 w-full h-full lg:h-[400px] bg-[#96a58d] px-5 lg:px-32 flex flex-col justify-between pt-12 pb-8">
      <div className="flex flex-col gap-y-8 lg:flex-row gap-x-20 2xl:gap-x-40">
        {/* Column Links */}
        {linkColumns.map((column, index) => (
          <LinkColumn key={index} title={column.title} links={column.links} />
        ))}
        {/* Social Media Links */}
        <div className="flex flex-row justify-center items-center gap-x-6 h-8">
          {socialLinks.map((social, index) => {
            return (
              <Link key={index} href={social.href} aria-label={social.label}>
                <FontAwesomeIcon icon={social.icon} color="white" size="lg" />
              </Link>
            )
          })}
        </div>
      </div>

      <h3 className="font-sofia font-light text-white text-md lg:text-sm text-center my-[1.25rem] lg:mb-0">
        Copyright © {new Date().getFullYear()} Releafe. Alle rechten
        voorbehouden.
      </h3>
    </footer>
  )
}
