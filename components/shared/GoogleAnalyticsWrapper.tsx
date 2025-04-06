'use client'

import { useEffect, useState } from 'react'
import { hasCookie, getCookie } from 'cookies-next'
import Script from 'next/script'

export const GoogleAnalyticsWrapper = () => {
  const [hasConsent, setHasConsent] = useState(false)

  useEffect(() => {
    if (hasCookie('localConsent') && getCookie('localConsent') === 'true') {
      setHasConsent(true)
    }
  }, [])

  if (!hasConsent) return null

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-9V9F5J3NT7"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-9V9F5J3NT7');
        `}
      </Script>
    </>
  )
}
