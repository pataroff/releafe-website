import { mentaalFitPageQuery } from 'lib/sanity.queries'
import { useLiveQuery } from 'next-sanity/preview'
import type { PagePayload } from 'types'

import { MentaalFitPage } from './MentaalFitPage'

export function MentaalFitPagePreview({ page: initialPage }) {
  const [page] = useLiveQuery<PagePayload | null>(
    initialPage,
    mentaalFitPageQuery,
  )

  if (!page) {
    return (
      <div className="text-center">
        Please start editing your Mentaal fit document to see the preview!
      </div>
    )
  }

  return <MentaalFitPage page={page} />
}
