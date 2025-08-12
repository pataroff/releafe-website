import { getClient } from './sanity.client'
import { readToken } from './sanity.api'

import { settingsQuery, navbarQuery } from './sanity.queries'
import { SettingsPayload, NavbarPayload } from 'types'

export async function fetchGlobalData(draftMode = false) {
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [settings, navbar] = await Promise.all([
    client.fetch<SettingsPayload | null>(settingsQuery),
    client.fetch<NavbarPayload | null>(navbarQuery),
  ])

  return {
    settings: settings ?? {},
    navbar: navbar ?? {},
  }
}
