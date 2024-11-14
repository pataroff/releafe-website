import type { PortableTextBlock } from '@portabletext/types'
import { CustomPortableText } from 'components/shared/CustomPortableText'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faFacebookF,
  faInstagram,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons'

import Link from 'next/link'
import Image from 'next/image'

const linkColumns = [
  {
    title: 'Bedrijf',
    links: [
      'Over',
      'Carrieres',
      'Pers',
      'Blog',
      'Ontmoet onze instructeur',
      'Releafe Wetenschap',
    ],
  },
  {
    title: 'Aanbiedingen',
    links: [
      'Koop een cadeau',
      'Verzilveren cadeau',
      'Gezinsplan',
      'Releafe Business',
    ],
  },
  {
    title: 'Hulp',
    links: [
      'Veelgestelde vragen',
      'Neem contact met ons op',
      'Voorwaarden',
      'Privacybeleid',
      'Afmelden voor gerichte advertenties',
      'Cookies',
      'Toegankelijkheidsverklaring',
    ],
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
    <footer className="bottom-0 w-full h-[400px] bg-[#96a58d] px-32 flex flex-col justify-between pt-4 pb-8">
      <div className="flex flex-row gap-x-28 2xl:gap-x-48 mt-[2rem]">
        {linkColumns.map((column, index) => (
          <LinkColumn key={index} title={column.title} links={column.links} />
        ))}
        {/* Social Media Links Row Container*/}
        <div className="flex flex-row items-center gap-x-6 h-8">
          <Link href="#">
            <FontAwesomeIcon icon={faFacebookF} color="white" size="lg" />
          </Link>
          <Link href="#">
            <FontAwesomeIcon icon={faInstagram} color="white" size="lg" />
          </Link>
          <Link href="#">
            <FontAwesomeIcon icon={faXTwitter} color="white" size="lg" />
          </Link>
        </div>
      </div>

      <h3 className="font-sofia font-light text-white text-sm text-center">
        Copyright © 2024 Releafe. Alle rechten voorbehouden.
      </h3>
    </footer>
  )
}
