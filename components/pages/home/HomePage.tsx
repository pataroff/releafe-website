import ScrollUp from 'components/shared/ScrollUp'

import { PagePayload } from 'types'
import { sectionRenderers } from 'components/sections'

export interface HomePageProps {
  page?: PagePayload
}

export function HomePage({ page }: HomePageProps) {
  const { sections } = page

  return (
    <>
      {sections.map((section) => {
        console.log(section)
        const renderSectionFn = sectionRenderers[section.sectionType]

        if (!renderSectionFn) return null

        return renderSectionFn(section)
      })}

      {/* Workaround: scroll to top on route change */}
      <ScrollUp />
    </>
  )
}
