import { releafeVoorOrganisatiesPageQuery } from 'lib/sanity.queries'
import { useLiveQuery } from 'next-sanity/preview'
import type { PagePayload } from 'types'

import { ReleafeVoorOrganisatiesPage } from './ReleafeVoorOrganisatiesPage'

export function ReleafeVoorOrganisatiesPagePreview({ page: initialPage }) {
  const [page] = useLiveQuery<PagePayload | null>(
    initialPage,
    releafeVoorOrganisatiesPageQuery,
  )

  if (!page) {
    return (
      <div className="text-center">
        Please start editing your Over ons document to see the preview!
      </div>
    )
  }

  return <ReleafeVoorOrganisatiesPage page={page} />
}
