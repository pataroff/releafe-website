import React, { useState } from 'react'

import Layout from 'components/shared/Layout'
import ScrollUp from 'components/shared/ScrollUp'

import Link from 'next/link'
import Image from 'next/image'

import HomePageHead from '../home/HomePageHead'

// @TODO: This needs to be moved in 'mentale-klachten.tsx'!
const mentalDisordersData = [
  {
    title: 'Angst',
    description:
      'Angst is normaal en nuttig bij gevaar, omdat het lichaam je helpt te vechten of te vluchten. Bij langdurige problemen, zoals op werk of met familie, kunnen angstklachten ontstaan, maar deze verdwijnen vaak wanneer de problemen opgelost zijn of je ermee om leert gaan. Als je zonder duidelijke oorzaak vaak bang bent en situaties gaat vermijden, kan dit uitmonden in een angststoornis. ',
    linkText: 'Voor meer algemene informatie over angst, klik hier.',
    href: 'https://www.thuisarts.nl/angst/ik-ben-vaak-bang',
    image: '/images/fear.jpeg',
    additionalData: [
      {
        title: 'Angst- en piekerstoornis',
        description:
          'Als je een angst- en piekerstoornis hebt, ben je eigenlijk altijd bang. Daarom wordt dit ook wel een gegeneraliseerde angststoornis genoemd. Je maakt je steeds zorgen over allerlei dingen uit het dagelijks leven. Vaak gebeurt dit onbewust en je hebt er ook veel last van in het dagelijks leven.',
        linkText:
          'Meer informatie over een angst- en piekerstoornis vind je hier.',
        href: 'https://www.thuisarts.nl/angststoornis/ik-heb-gegeneraliseerde-angststoornis',
      },
      {
        title: 'Sociale-angststoornis',
        description:
          'Bij een sociale-angststoornis ben je bang voor kritiek of afwijzing van anderen, bijvoorbeeld tijdens een gesprek, op een feestje, of bij het spreken voor een groep. Hoewel je weet dat je angst overdreven is, blijf je situaties vermijden, waardoor je angst tijdelijk minder wordt, maar je niet leert er gezond mee om te gaan. Dit kan leiden tot problemen op school of werk, en de angst kan zich beperken tot specifieke situaties of aanwezig zijn in veel sociale contexten.',
        linkText:
          'Meer informatie over een sociale-angststoornis vind je hier.',
        href: 'https://www.thuisarts.nl/sociale-angststoornis/ik-heb-sociale-angststoornis',
      },
      {
        title: 'Fobie',
        description:
          'Als je heel bang bent voor iets dan heet dit een fobie. Waar je precies heel erg bang voor bent kan van alles zijn, zoals spinnen, vliegen, autorijden of kleine ruimtes.',
        linkText: 'Meer informatie over een fobie vind je hier.',
        href: 'https://www.thuisarts.nl/fobie/ik-ben-heel-bang-voor-iets-fobie',
      },
      {
        title: 'Hypochondrie',
        description:
          'Bij hypochondrie ben je steeds bang dat je een erge ziekte hebt. Ook als een arts je goed heeft onderzocht en alles in orde is. Mensen met hypochondrie hebben veel last van deze angst.',
        linkText: 'Meer informatie over hypochondrie vind je hier.',
        href: 'https://www.thuisarts.nl/hypochondrie/ik-heb-last-van-hypochondrie#adviezen-bij-hypochondrie',
      },
      {
        title: 'Dwangstoornis',
        description:
          'Bij een dwangstoornis heb je last van terugkerende dwanggedachten en dwanghandelingen die volgens vaste regels moeten worden uitgevoerd om spanning of angst te verminderen. Hoewel je weet dat deze handelingen overdreven zijn, blijf je ze doen om de spanning te verlichten, waardoor je niet op een gezonde manier met je gevoelens leert omgaan. De dwang kan veel tijd in beslag nemen en je functioneren op school of werk beïnvloeden.',
        linkText: 'Meer informatie over een dwangstoornis vind je hier.',
        href: 'https://www.thuisarts.nl/dwangstoornis/ik-heb-dwangstoornis#adviezen-bij-een-dwangstoornis',
      },
    ],
  },

  {
    title: 'Depressie',
    description:
      'Bij een depressie ben je langer dan 2 weken somber en/of heb je nergens zin in. Ook kun je je moe, onrustig, schuldig en waardeloos voelen. Een depressie verstoort je dagelijks leven. Je hebt er veel last van: thuis, in je vrije tijd en/of op je werk. Depressieve klachten kunnen zich op verschillende manieren uiten en zijn voor iedereen anders.',
    linkText: 'Meer informatie over een depressie vind je hier.',
    href: 'https://www.thuisarts.nl/depressie/ik-heb-depressie',
    image: '/images/depression.jpg',
  },

  {
    title: 'Paniek',
    description:
      'Bij paniek is het goed om onderscheid te maken tussen een paniekaanval en een paniekstoornis.',
    linkText: '',
    image: '/images/panic.jpeg',
    additionalData: [
      {
        title: 'Paniekaanval',
        description:
          'Bij een paniekaanval krijg je plotseling lichamelijke klachten zoals een snelle hartslag, snelle ademhaling, trillen en zweten, waardoor je in paniek raakt. De angst maakt de symptomen erger, en je kunt niet meer helder nadenken, waardoor je wilt vluchten of huilen. Een paniekaanval kan enkele minuten tot anderhalf uur duren.',
        linkText: 'Meer intormatie over een paniekaanval vind je hier.',
        href: 'https://www.thuisarts.nl/paniekaanvallen/ik-heb-paniekaanval',
      },
      {
        title: 'Paniekstoornis',
        description:
          'Bij een paniekstoornis krijg je onverwachte paniekaanvallen en ben je voortdurend bang voor een nieuwe aanval, wat je leven sterk beïnvloedt. Je vermijdt situaties waaruit je moeilijk kunt ontsnappen of geen hulp kunt krijgen, zoals bussen, treinen, winkels of drukke straten. Hierdoor beperk je jezelf en ga je zulke situaties helemaal vermijden.',
        linkText: 'Meer informatie over een paniekstoornis vind je hier.',
        href: 'https://www.thuisarts.nl/paniekaanvallen/ik-heb-paniekstoornis',
      },
    ],
  },

  {
    title: 'Stress',
    description:
      'Een beetje stress is normaal en nuttig om scherp te blijven tijdens spannende situaties zoals een presentatie of examen, en verdwijnt meestal daarna. Als stress lang aanhoudt door bijvoorbeeld hoge verwachtingen, veel problemen tegelijk, of gebrek aan steun, kan het te veel worden. Dit leidt tot vermoeidheid, prikkelbaarheid, slaapproblemen, en een voortdurend gevoel van spanning, wat ongezond wordt.',
    linkText:
      'Meer informatie over wat stress is, welke klachten je ervaart en waardoor het kan komen vind je hier.',
    href: 'https://www.thuisarts.nl/stress/ik-wil-beter-omgaan-met-stress',
    image: '/images/stress.jpg',
  },
]

const MentaleKlachtenPage = ({ settings, page }) => {
  const [fearSubdisorderIndex, setFearSubdisorderIndex] = useState<number>(0)
  const [panicSubdisorderIndex, setPanicSubdisorderIndex] = useState<number>(0)

  return (
    <>
      <HomePageHead page={page} settings={settings} />
      <Layout settings={settings} route={'Mentale klachten'}>
        {/* Main Section */}
        <section className="min-h-[calc(100vh-120px)] xl:flex">
          {/* Main Wrapper */}
          <div className="flex flex-col lg:flex-row min-h-full w-full">
            {/* Hero Text Container */}
            <div className="flex flex-col justify-between h-full w-full lg:w-1/2 bg-[#c5d5bc] bg-opacity-15 gap-y-8 px-12 lg:px-24 pb-4 lg:pb-8 pt-28 lg:pt-12 2xl:pt-16">
              <h1 className="text-3xl/[2.5rem] font-sofia font-bold lg:text-4xl/[3rem] 2xl:text-5xl/[4rem]">
                Ervaar je mentale klachten? Gebruik Releafe om jouw mentale
                welzijn te verbeteren.
              </h1>
              <h3 className="text-md lg:text-lg 2xl:text-xl font-sofia font-light">
                Mentale klachten kunnen iedereen treffen, en ze variëren van
                lichte ongemakken tot ernstigere aandoeningen. Het is belangrijk
                om te begrijpen dat hulp beschikbaar is en dat je niet alleen
                bent. Releafe kan je ondersteunen wanneer je onderstaande
                klachten hebt. Klik hier om erachter te komen hoe Releafe jou
                kan helpen mentaal gezond te worden en te blijven!
              </h3>
              <p className="text-sm lg:text-md 2xl:text-lg font-sofia font-light ">
                *Releafe biedt verschillende technieken en oefeningen die je
                kunnen helpen om je mentale fitheid te verbeteren en beter om te
                acan met de onder genoemoe klachten. Vergeet echter niet om bij
                hevige klachten altijd professionele hulp te zoeken.
              </p>

              {/* Buttons Container */}
              <div className="flex flex-col items-center gap-y-6">
                <Link
                  href="/probeer-releafe-gratis"
                  className="flex justify-center items-center rounded-full h-[50px] lg:h-[60px] w-full mt-4 bg-gradient-to-b from-[#d4e3c4] to-[#849b6f] transform duration-300 ease-in-out font-sofia font-bold text-white text-lg lg:text-xl leading-none"
                >
                  {/* Pseudo-element for the hover effect */}
                  <span className="absolute inset-0 bg-black opacity-0 rounded-full transition-opacity duration-300 ease-out z-0 hover:opacity-15"></span>

                  {/* Text above the overlay */}
                  <p className="relative z-10 pointer-events-none">
                    Voel je better, gratis
                  </p>
                </Link>

                <button
                  onClick={() => {
                    document
                      .getElementById('mental-disorders-section')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="w-16 h-16 rounded-[1.75rem] hover:bg-gray-200 flex justify-center items-center transform duration-300 ease-in-out"
                >
                  <Image
                    src="/images/chevron_down.png"
                    alt="Chevron Down"
                    width={40}
                    height={40}
                  />
                </button>
              </div>
            </div>

            {/* Hero Image Container */}
            <div className="relative h-[400px] lg:min-h-full w-full lg:w-1/2">
              <Image
                src="/images/mentale_klachten_hero_image.jpg"
                alt="Mentale Klachten Hero Image"
                fill // fill = absolute positioning, therefore container needs relative
                className="object-cover object-center"
              />
            </div>
          </div>
        </section>

        {/* Gradient Background Container */}
        <div className="bg-gradient-to-b from-white via-[#c5d5bc50] to-white h-full">
          {/* Mental Disorders Section */}
          <section
            id="mental-disorders-section"
            className="mt-[2rem] xl:mt-[6rem] w-full scroll-mt-[5.5rem] lg:scroll-mt-[2.5rem]"
          >
            <div className="px-5 md:px-32 lg:px-64">
              <h1 className="text-2xl font-sofia font-bold lg:text-5xl text-center lg:text-nowrap">
                Veelvoorkomende mentale klachten
              </h1>
              <p className="mt-4 font-sofia font-light text-center text-md md:text-xl">
                Hieronder vind je een overzicht van enkele veelvoorkomende
                mentale klachten. Releafe kan ondersteuning bieden bij het
                verbeteren van je mentale welzijn als je met een van deze
                klachten te maken hebt. Voor uitgebreide informatie kun je de
                bijbehorende links naar Thuisarts.nl raadplegen.
              </p>
            </div>

            {/* Mental Disorder Wrapper */}
            <div className="my-[2rem] lg:my-[4rem] flex flex-col gap-y-12 lg:gap-y-32 px-8 lg:px-32">
              {mentalDisordersData.map((item, index) => {
                const {
                  title,
                  description,
                  linkText,
                  href,
                  image,
                  additionalData,
                } = item
                const isEven = index % 2 == 0

                return (
                  <div key={index} className="flex flex-col">
                    <div
                      className={`flex ${isEven ? 'flex-col lg:flex-row' : 'flex-col lg:flex-row-reverse'}  items-center gap-x-12 gap-y-8`}
                    >
                      {/* Mental Disorder Text Container */}
                      <div className="flex flex-col gap-y-4 lg:gap-y-8 w-full lg:w-1/2">
                        <h2 className="text-2xl lg:text-4xl font-sofia font-bold">
                          {title}
                        </h2>

                        <p className="text-md lg:text-xl font-sofia font-light">
                          {description}
                        </p>

                        {/* Panic Subdisorders Box */}
                        {title === 'Paniek' && additionalData && (
                          <div className="relative rounded-[2.5rem] w-full h-full bg-white drop-shadow-sm p-8">
                            {/* Panic Subdisorders Selection Row */}
                            <div className="flex flex-col w-full gap-y-4 lg:gap-y-8">
                              <div className="flex flex-row w-full justify-center gap-x-2">
                                {additionalData.map((subdisorder, index) => {
                                  return (
                                    <button
                                      key={index}
                                      className={`rounded-xl w-full ${panicSubdisorderIndex == index ? 'bg-gradient-to-b from-[#d4e3c4] to-[#849b6f] text-white' : 'bg-gray-200 hover:bg-gray-300 text-black'} font-sofia font-semibold text-sm xl:text-lg py-2 transition duration-300 ease-in-out`}
                                      onClick={() =>
                                        setPanicSubdisorderIndex(index)
                                      }
                                    >
                                      {subdisorder.title}
                                    </button>
                                  )
                                })}
                              </div>

                              <p className="text-md lg:text-lg font-sofia font-light">
                                {
                                  additionalData[panicSubdisorderIndex]
                                    .description
                                }
                              </p>

                              {/* @TODO: Replace all instances with a `LinkText` component! */}
                              <div className="flex items-center">
                                <p className="text-md lg:text-lg font-sofia font-light">
                                  {
                                    additionalData[
                                      panicSubdisorderIndex
                                    ].linkText?.split('hier')[0]
                                  }{' '}
                                  <Link
                                    href={
                                      additionalData[panicSubdisorderIndex].href
                                    }
                                    target="_blank"
                                    className="inline-flex items-center underline"
                                  >
                                    hier.
                                    <Image
                                      src="/images/external_link.png"
                                      width={20}
                                      height={20}
                                      alt="External Link Icon"
                                      className="ml-2 mt-1"
                                    />
                                  </Link>
                                </p>
                              </div>
                            </div>
                          </div>
                        )}

                        {linkText !== '' && (
                          <p className="text-md lg:text-xl font-sofia font-light">
                            {linkText?.split('hier')[0]}{' '}
                            <Link
                              href={href}
                              target="_blank"
                              className="inline-flex items-center underline"
                            >
                              hier.
                              <Image
                                src="/images/external_link.png"
                                width={20}
                                height={20}
                                alt="External Link Icon"
                                className="ml-2 mt-1"
                              />
                            </Link>
                          </p>
                        )}
                      </div>

                      {/* Mental Disorder Image Container */}
                      <div className="relative rounded-3xl overflow-hidden h-[350px] lg:h-[400px] w-full lg:w-1/2">
                        <Image
                          src={image}
                          alt=""
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {title === 'Angst' && additionalData && (
                      <>
                        {/* Fear Subdisorders Box */}
                        <div className="relative mt-[4rem] rounded-[2.5rem] w-full h-full lg:h-[250px] bg-white drop-shadow-sm p-8 lg:p-0 flex flex-col lg:flex-row items-center gap-y-8">
                          {/* Fear Subdisorders Selection Row */}
                          <div className="flex flex-row flex-wrap lg:flex-nowrap gap-2.5 justify-center lg:absolute lg:-top-5 lg:left-1/2 lg:transform lg:-translate-x-1/2 z-10 ">
                            {additionalData.map((subdisorder, index) => {
                              return (
                                <button
                                  key={index}
                                  onClick={() => setFearSubdisorderIndex(index)}
                                  className={`${fearSubdisorderIndex === index ? 'bg-gradient-to-b from-[#d4e3c4] to-[#849b6f] text-white' : 'bg-gray-200 hover:bg-gray-300'} rounded-lg text-sm xl:text-lg font-sofia font-semibold ${fearSubdisorderIndex === index ? 'text-white' : 'text-black'} text-nowrap py-2 px-10 2xl:px-20 transition duration-300 ease-in-out`}
                                >
                                  {subdisorder.title}
                                </button>
                              )
                            })}
                          </div>

                          {/* Subdisorders Body Container */}
                          <div className="flex flex-col lg:px-16 gap-y-4">
                            <p className="text-md lg:text-lg font-sofia font-light">
                              {additionalData[fearSubdisorderIndex].description}
                            </p>
                            <p className="text-md lg:text-lg font-sofia font-light">
                              {
                                additionalData[
                                  fearSubdisorderIndex
                                ].linkText?.split('hier')[0]
                              }
                              <Link
                                className="inline-flex items-center underline"
                                href={additionalData[fearSubdisorderIndex].href}
                                target="_blank"
                              >
                                hier.
                                <Image
                                  src="/images/external_link.png"
                                  width={20}
                                  height={20}
                                  alt="External Link Icon"
                                  className="ml-2.5 mt-1"
                                />
                              </Link>
                            </p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                )
              })}
            </div>
          </section>
        </div>

        {/* Call-to-Action Section */}
        <section className="my-[4rem] lg:my-[6rem] px-8 md:px-32 lg:px-64 flex flex-col justify-center items-center gap-y-8">
          <h2 className="text-3xl text-center font-sofia font-bold lg:text-5xl ">
            Ontdek hoe je jouw mentale gezondheid een boost kunt geven
          </h2>
          <p className="mt-4 text-center font-sofia font-light text-lg lg:text-xl">
            Benieuwd wat je kan doen wanneer je een van bovenstaande klachten
            ervaart? Op de Mentaal fit pagina ontdek je wat je zelf kan doen om
            je mentale gezondheid een boost te geven en te onderhouden.
          </p>

          <Link
            href="/mentaal-fit"
            className="
    relative flex justify-center items-center rounded-full overflow-hidden h-[50px] w-full xl:w-1/2 2xl:w-1/3 mt-2
    bg-gradient-to-b from-[#d4e3c4] to-[#849b6f] text-white font-sofia font-bold text-lg xl:text-lg 
    leading-none"
          >
            {/* Pseudo-element for the hover effect */}
            <span className="absolute inset-0 bg-black opacity-0 rounded-full transition-opacity duration-300 ease-out z-0 hover:opacity-15"></span>

            {/* Text above the overlay */}
            <p className="relative z-10 pointer-events-none">
              Ga naar Mentaal fit
            </p>
          </Link>
        </section>

        {/* Workaround: scroll to top on route change */}
        <ScrollUp />
      </Layout>
    </>
  )
}

export default MentaleKlachtenPage
