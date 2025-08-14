import ScrollUp from 'components/shared/ScrollUp'

import { Section } from 'types'
import { sectionRenderers } from 'components/sections'

// @TODO: This needs to be moved in 'mentaal-fit.tsx'!
const mentalExercisesData = [
  {
    title: 'Gezonde voeding',
    description:
      'Eet je fit en voel je goed. Gezonde voeding is de brandstof voor je lichaam én je brein. Een gebalanceerd dieet geeft je energie, verbetert je concentratie en zorgt dat je beter in je vel voelt.',
    featureText:
      'Met Releafe stel je makkelijk persoonlijke doelen en krijg je hulp bij het maken van gezonde keuzes. Stel gezonde voedingsdoelen in.',
    ctaText: 'Stel gezonde voedingsdoelen in',
    linkText: 'Meer informatie over gezonde voeding vind je hier.',
    href: 'https://www.thuisarts.nl/gezond-eten/ik-wil-gezond-eten',
    href2: '',
    image: '',
  },

  {
    title: 'Beperk drugs, alcohol en cafeïnegebruik',
    description:
      'Wat je binnenkrijgt, heeft invloed op hoe je je voelt. Minder alcohol, drugs en cafeïne kan wonderen doen. Deze stoffen kunnen je stemming flink beïnvloeden en angst of stress veroorzaken.',
    featureText:
      'Releafe helpt je om grip te krijgen op je gebruik. Door kleine persoonlijke doelen te stellen, merk je al snel hoeveel beter je je kunt voelen en je bewust wordt van de effecten.',
    ctaText: 'Beperk alcohol, drugs en cafeïne',
    linkText:
      'Meer informatie over het verminderen van alcoholgebruik vind je hier Wil je meer weten over hoe je drugsgebruik kan verminderen? Klik dan hier.',
    href: 'https://www.thuisarts.nl/alcohol/ik-wil-minder-alcohol-drinken-of-stoppen-met-drinken',
    href2:
      'https://www.thuisarts.nl/drugs/ik-wil-stoppen-met-drugs-of-minder-gebruiken',
    image: '/images/mentaal_fit/gezonde_voeding.jpeg',
  },

  {
    title: 'Dingen blijven doen (niet vermijden)',
    description:
      "Actief zijn en meedoen aan activiteiten geeft je een gevoel van betekenis en energie. Of het nu werk, je hobby's of je vrienden zijn, ze zijn allemaal belangrijk voor je mentale gezondheid.",
    featureText:
      'Met Releafe stel je doelen om actiever te worden en je sociale contacten te versterken. Zo blijf je mentaal in topvorm.',
    ctaText: 'Blijf actief met Releafe',
    linkText: '',
    href: '',
    href2: '',
    image: '/images/stress.jpg',
  },

  {
    title: 'Ervaringen delen',
    description:
      'Je gedachten en gevoelens delen, kan een enorme opluchting zijn. Door erover te praten, begrijp je jezelf beter en wordt het makkelijker om met lastige situaties om te gaan.',
    featureText:
      'Releafe helpt je om in kleine stappen meer open te zijn over je gevoelens. Zo groeit je zelfvertrouwen en voel je je steeds een beetje beter.',
    ctaText: 'Deel je ervaringen met Releafe',
    linkText: '',
    href: '',
    href2: '',
    image: '/images/mentaal_fit/ervaringen_delen.jpeg',
  },

  {
    title: 'Ontspanning',
    description:
      'Laat de stress van je afglijden. Ontspanning is onmisbaar voor je mentale welzijn. Met verschillende technieken en oefeningen kom je weer tot jezelf.',
    featureText:
      "Releafe biedt een breed scala aan ontspanningsoefeningen, zoals video's en audio, om je te helpen stress te verminderen. Maak ontspanning een onderdeel van je dagelijkse routine door doelen te stellen in de app.",
    ctaText: 'Ontspan met Releafe oefeningen',
    linkText:
      'Meer informatie over hoe je je beter kunt ontspannen vind je hier.',
    href: 'https://www.thuisarts.nl/stress/ik-wil-me-beter-kunnen-ontspannen',
    href2: '',
    image: '',
  },

  {
    title: 'Slapen',
    description:
      'Laad je batterij op met een goede nachtrust. Regelmatige bedtijden en ontspannings- technieken helpen je om beter te slapen.',
    featureText:
      'Met Releafe stel je persoonlijke slaapdoelen in de app en houd je je voortgang bij. Zo krijg je inzicht in je slaappatroon en verbeter je je mentale fitheid.',
    ctaText: 'Verbeter je slaap met Releafe',
    linkText: 'Meer informatie over slaapadviezen vind je hier.',
    href: 'https://www.thuisarts.nl/slecht-slapen/ik-wil-beter-slapen-slaapadviezen',
    href2: '',
    image: '/images/mentaal_fit/ontspanning.jpeg',
  },

  {
    title: 'Positief (leren) denken',
    description:
      'Denk positief, leef positief. Je gedachten bepalen hoe je je voelt. Door te oefenen met positief en realistisch denken, kun je je mindset versterken en beter omgaan met moeilijke momenten.',
    featureText:
      'Releafe helpt je hierbij met de reframing oefening, waarmee je leert situaties op een andere manier te bekijken. Ook kun je ondersteunende berichten voor jezelf opslaan en teruglezen op momenten dat je ze goed kunt gebruiken.',
    ctaText: 'Werk aan positief denken',
    linkText: '',
    href: '',
    href2: '',
    image: '/images/stress.jpg',
  },

  {
    title: 'Dagboek bijhouden',
    description:
      'Maak je hoofd leeg met een dagboek. Het helpt je om je gedachten te ordenen en je emoties beter te begrijpen. Zo leer je jezelf beter kennen en kun je beter omgaan met stress.',
    featureText:
      'Gebruik in de Releafe-app het dagboek om eenvoudig bij te houden hoe je je voelt. Scoor dagelijks je stemming, stress, energie en slaap. Heb je iets bijzonders meegemaakt? Voeg dit als extra notitie toe. Zo krijg je een persoonlijk welzijnsoverzicht dat je verder helpt je welzijn beter te begrijpen.',
    ctaText: 'Ontdek hoe je een dagboek bijhoudt',
    linkText: '',
    href: '',
    href2: '',
    image: '/images/mentaal_fit/dagboek_bijhouden.jpeg',
  },

  {
    title: 'Bewegen',
    description:
      'Bewegen is niet alleen goed voor je lichaam, maar ook voor je hoofd. Regelmatig actief zijn, verlaagt de kans op allerlei ziektes én zorgt voor een betere stemming. Ga voor minimaal 2,5 uur actieve beweging per week: kies iets wat je leuk vindt zoals wandelen, fietsen of sporten en maak er een gewoonte van.',
    featureText:
      'In de Releafe-app stel je makkelijk je persoonlijke doelen, zie je hoe je vooruitgaat en krijg je beloningen. Zo werk je spelenderwijs aan je mentale gezondheid.',
    ctaText: 'Stel je beweegdoelen in',
    linkText: 'Meer informatie over gezond bewegen vind je hier.',
    href: 'https://www.thuisarts.nl/gezond-leven/ik-wil-gezond-bewegen',
    href2: '',
    image: '/images/mentaal_fit/bewegen.jpeg',
  },
]

const MentaalFitPage = ({ page }) => {
  const { sections } = page

  if (!sections || sections.length === 0) return

  // Find hero index
  const heroIndex = sections.findIndex(
    (section) => section.sectionType === 'hero',
  )

  const beforeHero =
    heroIndex === -1 ? sections : sections.slice(0, heroIndex + 1)
  const afterHero = heroIndex === -1 ? [] : sections.slice(heroIndex + 1)

  // Extract grouped sections
  const sectionsToGroup = afterHero.filter(
    (s) => s.sectionVariant === 'informationalGrouped',
  )

  return (
    <>
      {/* Render sections before (and including) hero */}
      {beforeHero.map((section: Section, index: number) => {
        const renderSectionFn = sectionRenderers[section.sectionType]
        return renderSectionFn ? renderSectionFn(section, index) : null
      })}

      {/* Sections after hero wrapped in gradient */}
      {afterHero.length > 0 && (
        <div className="bg-gradient-to-b from-white via-[#c5d5bc50] to-white h-full">
          {afterHero.map((section: Section, index) => {
            const renderSectionFn = sectionRenderers[section.sectionType]
            if (!renderSectionFn) return null

            // If this section is part of grouped sections, only render for the first in the pair
            if (section.sectionVariant === 'informationalGrouped') {
              const indexInGroup = sectionsToGroup.indexOf(section)
              if (indexInGroup % 2 === 1) return null // skip second in pair

              const firstSection = section
              const secondSection = sectionsToGroup[indexInGroup + 1] || null
              const groupIndex = Math.floor(indexInGroup / 2)

              return renderSectionFn(
                firstSection,
                index + beforeHero.length,
                firstSection,
                secondSection,
                groupIndex,
              )
            }

            // Normal section rendering (CTA, header, etc.)
            return renderSectionFn(section, index + beforeHero.length)
          })}
        </div>
      )}

      <ScrollUp />
    </>
  )
}

export default MentaalFitPage
