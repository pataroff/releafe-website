import { Footer } from 'components/global/Footer'
import { Navbar } from 'components/global/Navbar'
import { SettingsPayload } from 'types'

const fallbackSettings: SettingsPayload = {
  navbarItems: [],
}

export interface LayoutProps {
  children: React.ReactNode
  settings: SettingsPayload | undefined
  preview?: boolean
  route?: string
}

export default function Layout({
  children,
  settings = fallbackSettings,
  route, // route = PageTitle
}: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white text-black overflow-hidden">
      <Navbar navbarItems={settings?.navbarItems} route={route} />
      <div>{children}</div>
      {route !== 'Probeer Releafe gratis' && <Footer />}
    </div>
  )
}
