import { LinkColumn } from 'components/shared/LinkColumn'
import { Section } from 'types'

export function Footer({ footer, route }) {
  const { sections } = footer

  const isMentaleKlachtenPage = route === '/mentale-klachten'
  const isMentaalFitPage = route === '/mentaal-fit'

  const gradientVariant = isMentaleKlachtenPage
    ? 'bg-gradient-to-b from-[#d4e3c4] to-[#849b6f]'
    : isMentaalFitPage
      ? 'bg-gradient-to-b from-[#a8d5ba] to-[#5c946e]'
      : 'bg-gradient-to-b from-[#c5d5bc] to-[#8fa58b]'

  if (!sections || sections.length === 0) return null

  return (
    <footer
      className={`bottom-0 w-full h-full lg:h-[400px] ${gradientVariant} px-5 lg:px-32 flex flex-col justify-between pt-12 pb-8`}
    >
      <div className="flex flex-col justify-center gap-y-8 lg:flex-row gap-x-20 lg:gap-x-16 xl:gap-x-32">
        {/* Column Links */}
        {sections.map((section: Section) => (
          <LinkColumn
            key={section._id}
            title={section.title}
            links={section.customElements}
          />
        ))}
      </div>

      <h3 className="font-sofia font-light text-white text-md lg:text-sm text-center my-[1.25rem] lg:mb-0">
        Copyright © {new Date().getFullYear()} Releafe. Alle rechten
        voorbehouden.
      </h3>
    </footer>
  )
}
