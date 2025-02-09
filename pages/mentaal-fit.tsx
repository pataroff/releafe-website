import { readToken } from 'lib/sanity.api'
import { getClient } from 'lib/sanity.client'
import { settingsQuery } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import { SettingsPayload } from 'types'

import MentaalFitPage from 'components/pages/mentaal-fit/MentaalFitPage'

export default function MentaalFitRoute(props) {
  const { settings } = props

  return <MentaalFitPage settings={settings} />
}

export const getStaticProps: GetStaticProps<any, any> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [settings] = await Promise.all([
    client.fetch<SettingsPayload | null>(settingsQuery),
  ])

  return {
    props: {
      settings: settings ?? {},
      draftMode,
      token: draftMode ? readToken : null,
    },
  }
}
