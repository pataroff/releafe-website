import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { resolveHref } from 'lib/sanity.links'
import Link from 'next/link'
import Image from 'next/image'
import { NavbarItem } from 'types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faXmark,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons'

interface NavbarProps {
  navbarItems?: NavbarItem[]
  route?: string
}

export function Navbar({ navbarItems, route }: NavbarProps) {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState<boolean>(false)
  const isHomePage = route === 'Home'
  const isMentaleKlachtenPage = route === 'Mentale klachten'
  const isMentaalFitPage = route === 'Mentaal fit'
  const isProbeerReleafeGratisPage = route === 'Probeer Releafe gratis'

  const FlyoutLink = ({ children, href, FlyoutContent }) => {
    const [open, setOpen] = useState(false)
    const showFlyout = open && FlyoutContent

    return (
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="relative h-fit w-fit cursor-pointer"
      >
        <div
          className={`text-lg font-sofia font-bold ${isHomePage ? 'text-white' : 'text-black'} md:text-md`}
        >
          {children}
          <span
            style={{
              transform: showFlyout ? 'scaleX(1)' : 'scaleX(0)',
            }}
            className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-3xl bg-[#96a68d] transition-transform duration-300 ease-out"
          />
        </div>
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
              className="absolute left-1/2 top-14 bg-transparent text-black drop-shadow-xl"
            >
              <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white"></div>
              <div className="rounded-3xl overflow-hidden">
                <OverContent />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  const FlyoutLinkMobile = ({ children, href, FlyoutContent }) => {
    const [open, setOpen] = useState(false)
    const showFlyout = open && FlyoutContent

    return (
      <div className="relative">
        <div className="flex w-full justify-between items-center">
          <div className={`text-lg font-sofia font-bold text-white md:text-md`}>
            {children}
          </div>
          <button onClick={() => setOpen(!open)}>
            <FontAwesomeIcon
              className={`transform transition-transform duration-300 ease-out ${
                open ? 'rotate-180' : 'rotate-0'
              }`}
              icon={faChevronDown}
              color={'white'}
              size="xl"
            />
          </button>
        </div>
        <AnimatePresence>
          {showFlyout && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="absolute left-0 right-0 top-14 bg-transparent text-black"
            >
              <div className="rounded-3xl overflow-hidden">
                <OverContent />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  const OverContent = () => {
    return (
      <div className="w-full xl:w-64 bg-white px-6 py-4 shadow-xl">
        <div className="my-2 space-y-4">
          <Link
            href="/over-ons"
            className="block font-sofia font-medium text-xl lg:text-lg hover:underline"
          >
            Over ons
          </Link>
          <Link
            href="/in-de-media"
            className="block font-sofia font-medium text-xl lg:text-lg hover:underline"
          >
            In de media
          </Link>
          <Link
            href="/artikelen"
            className="block font-sofia font-medium text-xl lg:text-lg hover:underline"
          >
            Artikelen
          </Link>
          <Link
            href="/onderzoek"
            className="block font-sofia font-medium text-xl lg:text-lg hover:underline"
          >
            Onderzoek
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Navbar Container */}
      <div className={`${isHomePage ? 'fixed' : 'sticky'} top-0 z-50 w-full`}>
        {/* Navbar (desktop) */}
        {!isProbeerReleafeGratisPage && (
          <nav
            className={`hidden xl:flex items-center justify-between px-4 py-4 md:py-8 md:px-8 lg:px-16 2xl:px-20 ${isHomePage ? 'bg-transparent' : 'bg-white'}`}
          >
            {/* Top Shadow  */}
            {isHomePage && (
              <div className="absolute inset-x-0 top-0 h-28 z-0 bg-gradient-to-b from-black to-transparent opacity-50" />
            )}
            <div className="flex items-center gap-x-5 z-10">
              {/* Logo */}
              <Link key="home" href="/">
                <Image
                  className="drop-shadow-xl"
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
                      className={`text-lg font-sofia font-bold ${isHomePage ? 'text-white' : 'text-black'} md:text-md`}
                      href={href}
                    >
                      {menuItem.title}
                    </Link>
                  )
                })}
            </div>

            {/* Navbar Links */}
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
                        key={index}
                        href="/over"
                        FlyoutContent={OverContent}
                      >
                        {menuItem.title}
                      </FlyoutLink>
                    )
                  }

                  if (index == 2) {
                    return (
                      <Link
                        key={index}
                        href={href}
                        className={`
                  relative flex justify-center items-center rounded-full overflow-hidden h-[50px] w-full lg:w-[16rem] 
                  bg-gradient-to-b ${isMentaleKlachtenPage ? 'from-[#d4e3c4] to-[#849b6f]' : isMentaalFitPage ? 'from-[#a8d5ba] to-[#5c946e]' : 'from-[#c5d5bc] to-[#8fa58b]'}  text-white font-sofia font-bold text-lg lg:text-lg 
                  leading-none`}
                      >
                        {/* Pseudo-element for the hover effect */}
                        <span className="absolute inset-0 bg-black opacity-0 rounded-full transition-opacity duration-300 ease-out z-0 hover:opacity-15"></span>

                        {/* Text above the overlay */}
                        <p className="relative z-10 pointer-events-none">
                          {menuItem.title}
                        </p>
                      </Link>
                    )
                  }

                  return (
                    <Link
                      key={href}
                      className={`text-lg font-sofia font-bold ${isHomePage ? 'text-white' : 'text-black'} md:text-md`}
                      href={href}
                    >
                      {menuItem.title}
                    </Link>
                  )
                })}
            </div>
          </nav>
        )}

        {/* Navbar (probeer releafe gratis) */}
        {isProbeerReleafeGratisPage && (
          <nav className="hidden xl:flex items-center justify-center xl:py-6 bg-white">
            <div className="flex flex-row items-center justify-between xl:min-w-[1280px] 2xl:min-w-[1440px]">
              {/* Logo */}
              <Link href="/">
                <Image
                  className="drop-shadow-xl"
                  src="/images/releafe_app_icon_logo.png"
                  alt="Releafe App Icon Logo"
                  width={60}
                  height={60}
                />
              </Link>
              <Link href="/">
                <FontAwesomeIcon icon={faXmark} size="2xl" color="gray" />
              </Link>
            </div>
          </nav>
        )}

        {/* Navbar (mobile + tablet) */}
        {!isProbeerReleafeGratisPage && (
          <nav className="xl:hidden fixed top-0 w-full z-50">
            {/* Top Shadow */}
            <div
              className={`absolute inset-x-0 top-0 h-20 z-0 ${isHomePage ? 'bg-gradient-to-b from-black to-transparent opacity-50' : 'bg-white'}`}
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
                          <button
                            className={`relative flex justify-center items-center rounded-full overflow-hidden h-[50px] w-[13rem] bg-gradient-to-b ${isMentaleKlachtenPage ? 'from-[#d4e3c4] to-[#849b6f]' : isMentaalFitPage ? 'from-[#a8d5ba] to-[#5c946e]' : 'from-[#c5d5bc] to-[#8fa58b]'}  text-white font-sofia font-bold text-md leading-none`}
                          >
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
                    color={`${isHomePage ? 'white' : 'gray'}`}
                    size="2xl"
                    className={`absolute top-0 left-0 transition-opacity transform duration-300 ease-out ${
                      isHamburgerMenuOpen ? 'opacity-0 z-0' : 'opacity-100 z-10'
                    }`}
                  />

                  {/* Close Icon */}
                  <FontAwesomeIcon
                    icon={faXmark}
                    color={'white'}
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
              <ul className="flex flex-col gap-y-8 px-[1rem] md:pl-[2rem]">
                {navbarItems &&
                  navbarItems
                    .slice(0, navbarItems.length - 1)
                    .map((menuItem, index) => {
                      const href = resolveHref(menuItem?._type, menuItem?.slug)
                      if (!href) {
                        return null
                      }

                      if (index === navbarItems.length - 2) {
                        return (
                          <FlyoutLinkMobile
                            key={index}
                            href={href}
                            FlyoutContent={OverContent}
                          >
                            <li className="text-2xl font-sofia font-medium text-white">
                              {menuItem.title}
                            </li>
                          </FlyoutLinkMobile>
                        )
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
        )}

        {isProbeerReleafeGratisPage && (
          <nav className="xl:hidden fixed top-0 w-full z-50 bg-white">
            <div className="flex flex-row w-full justify-between items-center py-2 px-4">
              {/* Logo */}
              <Link key="home" href={'/'}>
                <Image
                  src="/images/releafe_app_icon_logo.png"
                  alt="Releafe App Icon Logo"
                  width={60}
                  height={60}
                />
              </Link>
              <Link href="/">
                <FontAwesomeIcon icon={faXmark} size="2xl" color="gray" />
              </Link>
            </div>
          </nav>
        )}
      </div>
    </>
  )
}
