import { Footer } from 'components/global/Footer'
import { Navbar } from 'components/global/Navbar'
import { NavbarPayload, SettingsPayload } from 'types'

import { CookiesConsent } from 'components/global/CookiesConsent'
import { GoogleAnalyticsWrapper } from './GoogleAnalyticsWrapper'

const fallbackSettings: SettingsPayload = {
  navbarItems: [],
}

export interface LayoutProps {
  children: React.ReactNode
  settings: SettingsPayload | undefined
  navbar: NavbarPayload | undefined
  preview?: boolean
  route?: string
}

export default function Layout({
  children,
  settings = fallbackSettings,
  navbar,
  route, // route = PageTitle
}: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white text-black overflow-hidden">
      <Navbar navbarItems={navbar?.navbarItems} route={route} />
      <main className="flex-grow">{children}</main>
      <CookiesConsent />
      <GoogleAnalyticsWrapper />
      {route !== 'Probeer Releafe gratis' && <Footer />}
    </div>
  )
}
