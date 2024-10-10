import { resolveHref } from 'lib/sanity.links'
import Link from 'next/link'
import Image from 'next/image'
import { MenuItem } from 'types'

interface NavbarProps {
  menuItems?: MenuItem[]
}

export function Navbar({ menuItems }: NavbarProps) {
  return (
    <div className="sticky top-0 z-10 flex flex-wrap items-center gap-x-5 bg-white/80 px-4 py-4 backdrop-blur md:px-16 md:py-5 lg:px-32">
      <Link
        key="home"
        className={`text-lg font-extrabold text-black hover:text-black md:text-xl`}
        href={'/'}
      >
        <Image
          src={require('../../public/images/releafe_app_icon_logo.png')}
          alt="Releafe App Icon Logo"
          width={60}
          height={60}
        />
      </Link>
      {menuItems &&
        menuItems.map((menuItem) => {
          const href = resolveHref(menuItem?._type, menuItem?.slug)
          if (!href) {
            return null
          }
          return (
            <Link
              key={href}
              className={`text-lg hover:text-black md:text-xl ${
                menuItem?._type === 'home'
                  ? 'font-extrabold text-black'
                  : 'text-gray-600'
              }`}
              href={href}
            >
              {menuItem.title}
            </Link>
          )
        })}
    </div>
  )
}
