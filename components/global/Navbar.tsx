import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { resolveHref } from 'lib/sanity.links'
import Link from 'next/link'
import Image from 'next/image'
import { NavbarItem } from 'types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

interface NavbarProps {
  navbarItems?: NavbarItem[]
  route?: string
}

export function Navbar({ navbarItems, route }: NavbarProps) {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState<boolean>(false)

  // @TODO: Is there a better way of doing this?
  const checkRoute = (route: string) => {
    if (route == 'Mentale klachten' || route == 'Mentaal fit') {
      return true
    } else {
      return false
    }
  }

  const FlyoutLink = ({ route, children, href, FlyoutContent }) => {
    const [open, setOpen] = useState(false)
    const showFlyout = open && FlyoutContent

    return (
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="relative h-fit w-fit"
      >
        <Link
          href={href}
          className={`text-lg font-sofia font-bold ${checkRoute(route) ? 'text-black' : 'text-white'} md:text-md`}
        >
          {children}
          <span
            style={{
              transform: showFlyout ? 'scaleX(1)' : 'scaleX(0)',
            }}
            className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-3xl bg-[#96a68d] transition-transform duration-300 ease-out"
          />
        </Link>
        {/* Transparent Hit Area */}
        <div className="absolute top-7 left-1/2 right-0 w-64 -translate-x-1/2 h-7 bg-transparent"></div>
        <AnimatePresence>
          {showFlyout && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              style={{ x: '-50%' }}
              className="absolute left-1/2 top-14 bg-white text-black"
            >
              {/* @TODO: The anchor of the content is not being shown when 'motion.div' is using 'rounded-3xl' due to 'overflow-hidden'! */}
              <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white"></div>
              <OverContent />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  const OverContent = () => {
    return (
      <div className="w-64 bg-white px-6 py-4 shadow-xl">
        <div className="my-2 space-y-4">
          <Link
            href="/releafe"
            className="block font-sofia font-medium text-lg"
          >
            Releafe
          </Link>
          <Link href="/de-app" className="block font-sofia font-medium text-lg">
            De app
          </Link>
          <Link
            href="/in-de-media"
            className="block font-sofia font-medium text-lg"
          >
            In de media
          </Link>
          <Link
            href="/artikeln"
            className="block font-sofia font-medium text-lg"
          >
            Artikeln
          </Link>
        </div>
      </div>
    )
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
            {navbarItems &&
              navbarItems.slice(0, 3).map((menuItem) => {
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
            {navbarItems &&
              navbarItems.slice(3, 6).map((menuItem, index) => {
                const href = resolveHref(menuItem?._type, menuItem?.slug)
                if (!href) {
                  return null
                }

                if (index == 1) {
                  return (
                    <FlyoutLink
                      route={route}
                      href="/over"
                      FlyoutContent={OverContent}
                    >
                      {menuItem.title}
                    </FlyoutLink>
                  )
                }

                if (index == 2) {
                  return (
                    <Link key={href} href={href}>
                      <button className="text-lg font-sofia font-bold text-white leading-none rounded-full h-[50px] w-[16rem] bg-[#96a68d] hover:bg-[#8d9b81] transition duration-300 ease-in-out">
                        {menuItem.title}
                      </button>
                    </Link>
                  )
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
              {navbarItems &&
                navbarItems[navbarItems.length - 1] &&
                (() => {
                  const menuItem = navbarItems[navbarItems.length - 1]
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
              {navbarItems &&
                navbarItems
                  .slice(0, navbarItems.length - 1)
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
