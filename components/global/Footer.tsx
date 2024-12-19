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
    title: 'Abonneren',
    links: ['Gratis proberen', 'Abonnement', 'Reviews', 'Voor bedrijven'],
  },
  {
    title: 'Hulp',
    links: [
      'Veelgestelde vragen',
      'Contact',
      'Algemene voorwaarden',
      'Privacybeleid',
      'Cookies wijzigen',
    ],
  },
  {
    title: 'Over',
    links: ['Releafe', 'De app', 'In de media'],
  },
  {
    title: 'Informatie over mentaal welzijn',
    links: ['Mentale klachten', 'Mentaal fit', 'Artikelen'],
  },
  {
    title: 'Download de app',
    links: [
      {
        label: 'Google Play',
        href: '#',
        iconSrc: '/images/Google_Play_Badge_Dutch.png',
      },
      {
        label: 'App Store',
        href: '#',
        iconSrc: 'images/App_Store_Badge_Dutch.svg',
      },
    ],
  },
]

const socialLinks = [
  // { icon: faFacebookF, href: '#', label: 'Facebook' },
  // { icon: faInstagram, href: '#', label: 'Instagram' },
  // { icon: faXTwitter, href: '#', label: 'Twitter' },
  { icon: faLinkedinIn, href: '#', label: 'LinkedIn' },
]

function LinkColumn({
  title,
  links,
}: {
  title: string
  links: (string | { label: string; href: string; iconSrc: string })[]
}) {
  return (
    <div className="flex flex-col gap-y-2">
      <h1 className="font-sofia font-medium text-lg text-white text-nowrap mb-1">
        {title}
      </h1>
      {links.map((link, index) => {
        if (typeof link === 'string') {
          return (
            <Link
              key={index}
              className="font-sofia font-light text-md text-white text-nowrap leading-snug"
              href="#"
            >
              {link}
            </Link>
          )
        }
        return (
          <Link key={index} href={link.href}>
            <Image
              src={link.iconSrc!} // Non-null assertion because icons are guaranteed for this column
              alt={link.label}
              width={150}
              height={50}
            />
          </Link>
        )
      })}
    </div>
  )
}

export function Footer({ footer }: { footer: PortableTextBlock[] }) {
  return (
    <footer className="bottom-0 w-full h-full lg:h-[400px] bg-[#96a58d] px-5 lg:px-32 flex flex-col justify-between py-12">
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
