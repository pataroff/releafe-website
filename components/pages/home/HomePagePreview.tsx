import { homePageQuery } from 'lib/sanity.queries'
import { useLiveQuery } from 'next-sanity/preview'
import type { PagePayload } from 'types'

import { HomePage, HomePageProps } from './HomePage'

export function HomePagePreview({ page: initialPage }: HomePageProps) {
  const [page] = useLiveQuery<PagePayload | null>(initialPage, homePageQuery)

  if (!page) {
    return (
      <div className="text-center">
        Please start editing your Home document to see the preview!
      </div>
    )
  }

  return <HomePage page={page} />
}
