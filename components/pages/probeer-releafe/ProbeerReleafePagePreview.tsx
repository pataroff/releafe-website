import { probeerReleafePageQuery } from 'lib/sanity.queries'
import { useLiveQuery } from 'next-sanity/preview'
import type { PagePayload } from 'types'

import { ProbeerReleafePage } from './ProbeerReleafePage'

export function ProbeerReleafePagePreview({ page: initialPage }) {
  const [page] = useLiveQuery<PagePayload | null>(
    initialPage,
    probeerReleafePageQuery,
  )

  if (!page) {
    return (
      <div className="text-center">
        Please start editing your Probeer Releafe document to see the preview!
      </div>
    )
  }

  return <ProbeerReleafePage page={page} />
}
