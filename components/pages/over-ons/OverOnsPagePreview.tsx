import { overOnsPageQuery } from 'lib/sanity.queries'
import { useLiveQuery } from 'next-sanity/preview'
import type { PagePayload } from 'types'

import { OverOnsPage } from './OverOnsPage'

export function OverOnsPagePreview({ page: initialPage }) {
  const [page] = useLiveQuery<PagePayload | null>(initialPage, overOnsPageQuery)

  if (!page) {
    return (
      <div className="text-center">
        Please start editing your Over ons document to see the preview!
      </div>
    )
  }

  return <OverOnsPage page={page} />
}
