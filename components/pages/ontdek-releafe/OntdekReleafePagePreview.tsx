import { ontdekReleafePageQuery } from 'lib/sanity.queries'
import { useLiveQuery } from 'next-sanity/preview'
import type { PagePayload } from 'types'

import { OntdekReleafePage } from './OntdekReleafePage'

export function OntdekReleafePagePreview({ page: initialPage }) {
  const [page] = useLiveQuery<PagePayload | null>(
    initialPage,
    ontdekReleafePageQuery,
  )

  if (!page) {
    return (
      <div className="text-center">
        Please start editing your Ontdek Releafe document to see the preview!
      </div>
    )
  }

  return <OntdekReleafePage page={page} />
}
