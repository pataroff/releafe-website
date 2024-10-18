import { resolveHref } from 'lib/sanity.links'
import Link from 'next/link'
import Image from 'next/image'
import { MenuItem } from 'types'

interface NavbarProps {
  menuItems?: MenuItem[]
}

export function Navbar({ menuItems }: NavbarProps) {
  return (
    <div className="fixed top-0 z-[100] flex items-center justify-between w-full px-4 py-4 md:px-16 md:py-5 lg:px-32">
      <div className="flex items-center gap-x-6">
        {/* Logo */}
        <Link key="home" href={'/'}>
          <Image
            src="/images/releafe_app_icon_logo.png"
            alt="Releafe App Icon Logo"
            width={60}
            height={60}
          />
        </Link>
        {menuItems &&
          menuItems.slice(0, 3).map((menuItem) => {
            const href = resolveHref(menuItem?._type, menuItem?.slug)
            if (!href) {
              return null
            }
            return (
              <Link
                key={href}
                className={`text-lg font-sofia font-extrabold text-white md:text-md ${
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

      <div className="flex items-center gap-x-6">
        {menuItems &&
          menuItems.slice(3, 6).map((menuItem, index) => {
            const href = resolveHref(menuItem?._type, menuItem?.slug)
            if (!href) {
              return null
            }

            return index == 2 ? (
              <Link key={href} href={href}>
                <button className="text-lg font-sofia font-extrabold text-white rounded-full h-[3rem] w-[16rem] bg-[#96a68d]">
                  {menuItem.title}
                </button>
              </Link>
            ) : (
              <Link
                key={href}
                className={`text-lg font-sofia font-extrabold text-white md:text-md ${
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
    </div>
  )
}
