import { readToken } from 'lib/sanity.api'
import { getClient } from 'lib/sanity.client'
import { settingsQuery, homePageQuery } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import { SettingsPayload, HomePagePayload } from 'types'

import MentaleKlachtenPage from 'components/pages/mentale-klachten/MentaleKlachtenPage'

export default function MentaleKlachtenRoute(props) {
  const { settings, page } = props

  return <MentaleKlachtenPage settings={settings} page={page} />
}

const fallbackPage: HomePagePayload = {
  title: '',
  overview: [],
  showcaseProjects: [],
}

export const getStaticProps: GetStaticProps<any, any> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [settings, page] = await Promise.all([
    client.fetch<SettingsPayload | null>(settingsQuery),
    client.fetch<HomePagePayload | null>(homePageQuery),
  ])

  return {
    props: {
      page: page ?? fallbackPage,
      settings: settings ?? {},
      draftMode,
      token: draftMode ? readToken : null,
    },
  }
}
