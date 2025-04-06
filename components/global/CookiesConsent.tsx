'use client'

import React, { useState, useEffect } from 'react'
import { hasCookie, setCookie } from 'cookies-next'
import Link from 'next/link'

export const CookiesConsent: React.FC<{}> = () => {
  const [hideConsent, setHideConsent] = useState<boolean>(false)

  useEffect(() => {
    setHideConsent(hasCookie('localConsent'))
  }, [])

  const acceptCookie = () => {
    setHideConsent(true)
    setCookie('localConsent', 'true', {})

    // Immediately inject Google Analytics after consent
    if (typeof window !== 'undefined') {
      // Load the GA script
      const script1 = document.createElement('script')
      script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-9V9F5J3NT7'
      script1.async = true
      document.head.appendChild(script1)

      // Configure GA
      const script2 = document.createElement('script')
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-9V9F5J3NT7');
      `
      document.head.appendChild(script2)
    }
  }

  const declineCookie = () => {
    setHideConsent(true)
    setCookie('localConsent', 'false', {})
  }

  if (hideConsent) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 flex flex-col xl:flex-row xl:items-center gap-y-4 justify-between p-8 bg-[#96a58d] z-50">
      <span className="font-sofia font-normal text-white">
        Deze website gebruikt cookies om de gebruikerservaring te verbeteren.
        Door onze website te gebruiken stem je in met alle gebruiksvoorwaarden
        zoals beschreven in onze{' '}
        <Link href="/" className="font-sofia font-bold">
          Privacyverklaring
        </Link>
        .
      </span>

      <div className="space-x-4">
        <button
          className="rounded-3xl overflow-hidden bg-white px-8 py-2 drop-shadow-md font-sofia"
          onClick={acceptCookie}
        >
          Accepteren
        </button>
        <button
          className="rounded-3xl overflow-hidden bg-white px-8 py-2 drop-shadow-md font-sofia"
          onClick={declineCookie}
        >
          Weigeren
        </button>
      </div>
    </div>
  )
}
