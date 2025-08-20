import { Footer } from 'components/global/Footer'
import { Navbar } from 'components/global/Navbar'
import { FooterPayload, NavbarPayload, SettingsPayload } from 'types'

import { CookiesConsent } from 'components/global/CookiesConsent'
import { GoogleAnalyticsWrapper } from './GoogleAnalyticsWrapper'

import { useRouter } from 'next/router'
import { SiteMeta } from 'components/global/SiteMeta'

export interface LayoutProps {
  settings: SettingsPayload
  navbar: NavbarPayload
  footer: FooterPayload
  children: React.ReactNode
}

export default function Layout({
  settings,
  navbar,
  footer,
  children,
}: LayoutProps) {
  const router = useRouter()
  const { route } = router
  const { navbarItems } = navbar

  return (
    <div className="flex min-h-screen flex-col bg-white text-black overflow-hidden">
      <SiteMeta settings={settings} />
      <Navbar navbarItems={navbarItems} route={route} />
      <main className="flex-grow">{children}</main>
      <CookiesConsent />
      <GoogleAnalyticsWrapper />
      {route !== '/probeer-releafe' && <Footer footer={footer} route={route} />}
    </div>
  )
}
