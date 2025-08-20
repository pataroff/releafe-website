import { mentaleKlachtenPageQuery } from 'lib/sanity.queries'
import { useLiveQuery } from 'next-sanity/preview'
import type { PagePayload } from 'types'

import { MentaleKlachtenPage } from './MentaleKlachtenPage'

export function MentaleKlachtenPreview({ page: initialPage }) {
  const [page] = useLiveQuery<PagePayload | null>(
    initialPage,
    mentaleKlachtenPageQuery,
  )

  if (!page) {
    return (
      <div className="text-center">
        Please start editing your Mentale klachten document to see the preview!
      </div>
    )
  }

  return <MentaleKlachtenPage page={page} />
}
