import { inDeMediaPageQuery } from 'lib/sanity.queries'
import { useLiveQuery } from 'next-sanity/preview'
import type { PagePayload } from 'types'

import { InDeMediaPage } from './InDeMediaPage'

export function InDeMediaPagePreview({ page: initialPage }) {
  const [page] = useLiveQuery<PagePayload | null>(
    initialPage,
    inDeMediaPageQuery,
  )

  if (!page) {
    return (
      <div className="text-center">
        Please start editing your In de media document to see the preview!
      </div>
    )
  }

  return <InDeMediaPage page={page} />
}
