import React, { useState } from 'react'

import { resolveHref } from 'lib/sanity.links'
import Link from 'next/link'
import Image from 'next/image'
import { MenuItem } from 'types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

interface NavbarProps {
  menuItems?: MenuItem[]
  route?: string
}

export function Navbar({ menuItems, route }: NavbarProps) {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState<boolean>(false)

  // @TODO: Is there a better way of doing this?
  const checkRoute = (route: string) => {
    if (route == 'Mentale klachten' || route == 'Mentaal fit') {
      return true
    } else {
      return false
    }
  }

  return (
    <>
      {/* Navbar Container */}
      <div
        className={`${checkRoute(route) ? 'sticky' : 'fixed'} top-0 z-50 w-full`}
      >
        {/* Navbar (desktop) */}
        <nav className="hidden lg:flex items-center justify-between px-4 py-4 md:px-16 md:py-8 lg:px-20">
          {/* Top Shadow */}
          <div
            className={`absolute inset-x-0 top-0 h-28 z-0 ${checkRoute(route) ? 'bg-white' : 'bg-gradient-to-b from-black to-transparent opacity-50'}`}
          />
          <div className="flex items-center gap-x-5 z-10">
            {/* Logo */}
            <Link key="home" href={'/'}>
              <Image
                className="drop-shadow-lg"
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
                    className={`text-lg font-sofia font-bold ${checkRoute(route) ? 'text-black' : 'text-white'} md:text-md`}
                    href={href}
                  >
                    {menuItem.title}
                  </Link>
                )
              })}
          </div>

          <div className="flex items-center gap-x-5 z-10">
            {menuItems &&
              menuItems.slice(3, 6).map((menuItem, index) => {
                const href = resolveHref(menuItem?._type, menuItem?.slug)
                if (!href) {
                  return null
                }

                return index == 2 ? (
                  <Link key={href} href={href}>
                    <button className="text-lg font-sofia font-bold text-white leading-none rounded-full h-[50px] w-[16rem] bg-[#96a68d] hover:bg-[#8d9b81] transition duration-300 ease-in-out">
                      {menuItem.title}
                    </button>
                  </Link>
                ) : (
                  <Link
                    key={href}
                    className={`text-lg font-sofia font-bold ${checkRoute(route) ? 'text-black' : 'text-white'} md:text-md`}
                    href={href}
                  >
                    {menuItem.title}
                  </Link>
                )
              })}
          </div>
        </nav>
        {/* Navbar (mobile + tablet) */}
        <nav className="lg:hidden fixed top-0 w-full z-50">
          {/* Top Shadow */}
          <div
            className={`absolute inset-x-0 top-0 h-20 z-0 ${checkRoute(route) ? 'bg-white' : 'bg-gradient-to-b from-black to-transparent opacity-50'}`}
          />
          <div className="absolute flex flex-row w-full justify-between items-center p-2">
            {/* Logo */}
            <Link key="home" href={'/'}>
              <Image
                src="/images/releafe_app_icon_logo.png"
                alt="Releafe App Icon Logo"
                width={60}
                height={60}
              />
            </Link>

            <div className="flex flex-row gap-x-4 items-center">
              {/* Menu Item (CTA) */}
              {menuItems &&
                menuItems[menuItems.length - 1] &&
                (() => {
                  const menuItem = menuItems[menuItems.length - 1]
                  const href = resolveHref(menuItem?._type, menuItem?.slug)
                  if (href) {
                    return (
                      <Link key={href} href={href}>
                        <button className="text-md font-sofia font-bold text-white leading-none rounded-full h-[50px] w-[13rem] bg-[#96a68d] hover:bg-[#8d9b81] transition duration-300 ease-in-out">
                          {menuItem.title}
                        </button>
                      </Link>
                    )
                  }
                })()}

              <button
                className="w-8 h-8 relative"
                onClick={() => setIsHamburgerMenuOpen(!isHamburgerMenuOpen)}
              >
                {/* Hamburger Icon */}
                <FontAwesomeIcon
                  icon={faBars}
                  color={`${checkRoute(route) ? 'gray' : 'white'}`}
                  size="2xl"
                  className={`absolute top-0 left-0 transition-opacity transform duration-300 ease-out ${
                    isHamburgerMenuOpen ? 'opacity-0 z-0' : 'opacity-100 z-10'
                  }`}
                />

                {/* Close Icon */}
                <FontAwesomeIcon
                  icon={faXmark}
                  color={`${checkRoute(route) ? 'gray' : 'white'}`}
                  size="2xl"
                  className={`absolute top-0 left-[2px] left transition-opacity transform duration-300 ease-out ${
                    isHamburgerMenuOpen ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Navbar Links (mobile + tablet) */}
          <div
            className={`absolute top-0 right-0 h-screen w-screen bg-[#c5d4bc] transition-all duration-300 ease-in-out ${
              isHamburgerMenuOpen
                ? 'translate-x-0 opacity-100 visible'
                : 'translate-x-full opacity-0 invisible'
            } pt-[76px]`}
          >
            <ul className="flex flex-col gap-y-8 pl-[1rem]">
              {menuItems &&
                menuItems
                  .slice(0, menuItems.length - 1)
                  .map((menuItem, index) => {
                    const href = resolveHref(menuItem?._type, menuItem?.slug)
                    if (!href) {
                      return null
                    }

                    return (
                      <li
                        key={index}
                        className="text-2xl font-sofia font-medium text-white"
                      >
                        <Link
                          href={href}
                          onClick={() =>
                            setIsHamburgerMenuOpen(!isHamburgerMenuOpen)
                          }
                        >
                          {menuItem.title}
                        </Link>
                      </li>
                    )
                  })}
            </ul>
          </div>
        </nav>
      </div>
    </>
  )
}
