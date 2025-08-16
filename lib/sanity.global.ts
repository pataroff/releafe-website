import { getClient } from './sanity.client'
import { readToken } from './sanity.api'

import { settingsQuery, navbarQuery, footerQuery } from './sanity.queries'
import { SettingsPayload, NavbarPayload, FooterPayload } from 'types'

export async function fetchGlobalData(draftMode = false) {
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [settings, navbar, footer] = await Promise.all([
    client.fetch<SettingsPayload | null>(settingsQuery),
    client.fetch<NavbarPayload | null>(navbarQuery),
    client.fetch<FooterPayload | null>(footerQuery),
  ])

  return {
    settings: settings ?? {},
    navbar: navbar ?? {},
    footer: footer ?? {},
  }
}
