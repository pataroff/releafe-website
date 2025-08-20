import { onderzoekPageQuery } from 'lib/sanity.queries'
import { useLiveQuery } from 'next-sanity/preview'
import type { PagePayload } from 'types'

import { OnderzoekPage } from './OnderzoekPage'

export function OnderzoekPagePreview({ page: initialPage }) {
  const [page] = useLiveQuery<PagePayload | null>(
    initialPage,
    onderzoekPageQuery,
  )

  if (!page) {
    return (
      <div className="text-center">
        Please start editing your Onderzoek document to see the preview!
      </div>
    )
  }

  return <OnderzoekPage page={page} />
}
