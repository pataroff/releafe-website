import 'tailwindcss/tailwind.css'

import { GoogleAnalytics } from '@next/third-parties/google'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <GoogleAnalytics gaId="G-9V9F5J3NT7" />
    </html>
  )
}
