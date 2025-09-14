import { algemeneVoorwaardenPageQuery } from 'lib/sanity.queries'
import { useLiveQuery } from 'next-sanity/preview'
import type { PagePayload } from 'types'

import { AlgemeneVoorwaardenPage } from './AlgemeneVoorwaardenPage'

export function AlgemeneVoorwaardenPagePreview({ page: initialPage }) {
  const [page] = useLiveQuery<PagePayload | null>(
    initialPage,
    algemeneVoorwaardenPageQuery,
  )

  if (!page) {
    return (
      <div className="text-center">
        Please start editing your Algemene voorwaarden document to see the
        preview!
      </div>
    )
  }

  return <AlgemeneVoorwaardenPage page={page} />
}
