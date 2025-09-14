import { privacyVerklaringPageQuery } from 'lib/sanity.queries'
import { useLiveQuery } from 'next-sanity/preview'
import type { PagePayload } from 'types'

import { PrivacyverklaringPage } from './PrivacyverklaringPage'

export function PrivacyverklaringPagePreview({ page: initialPage }) {
  const [page] = useLiveQuery<PagePayload | null>(
    initialPage,
    privacyVerklaringPageQuery,
  )

  if (!page) {
    return (
      <div className="text-center">
        Please start editing your Algemene voorwaarden document to see the
        preview!
      </div>
    )
  }

  return <PrivacyverklaringPage page={page} />
}
