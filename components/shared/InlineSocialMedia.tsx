import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faFacebookF,
  faXTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'

const socialIcons: Record<string, JSX.Element> = {
  linkedin: (
    <FontAwesomeIcon
      icon={faLinkedin}
      className="text-3xl xl:text-4xl 2xl:text-5xl"
      color="black"
    />
  ),
  facebook: (
    <FontAwesomeIcon
      icon={faFacebookF}
      className="text-3xl xl:text-4xl 2xl:text-5xl"
      color="black"
    />
  ),
  twitter: (
    <FontAwesomeIcon
      icon={faXTwitter}
      className="text-3xl xl:text-4xl 2xl:text-5xl"
      color="black"
    />
  ),
  instagram: (
    <FontAwesomeIcon
      icon={faInstagram}
      className="text-3xl xl:text-4xl 2xl:text-5xl"
      color="black"
    />
  ),
}

export const InlineSocialMedia = ({ value }) => {
  if (!value.url || !socialIcons[value.platform]) return null

  return (
    <Link href={value.url} target="_blank" className="block w-fit h-fit">
      {socialIcons[value.platform]}
    </Link>
  )
}
