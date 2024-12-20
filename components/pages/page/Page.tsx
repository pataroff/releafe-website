import React, { useState } from 'react'

import { CustomPortableText } from 'components/shared/CustomPortableText'
import { Header } from 'components/shared/Header'
import Layout from 'components/shared/Layout'
import ScrollUp from 'components/shared/ScrollUp'
import type { PagePayload, SettingsPayload } from 'types'

import Link from 'next/link'
import Image from 'next/image'

import PageHead from './PageHead'

export interface PageProps {
  page: PagePayload | undefined
  settings: SettingsPayload | undefined
  homePageTitle: string | undefined
  preview?: boolean
}

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
      'Bij een depressie ben je langer dan 2 weken somber en/of heb je nergens zin in. Ook kun je je moe, onrustig, schuldig en waardeloos voelen. Een depressie verstoort je dagelijks leven. Je hebt er veel last van: thuis, in je vrije tijd en/of op je werk.',
    linkText: 'Meer informatie over een depressie vind je hier.',
    href: 'https://www.thuisarts.nl/depressie/ik-heb-depressie',
    image: '/images/depression.jpg',
  },

  {
    title: 'Paniek',
    description:
      'Bij paniek is het goed om onderscheid te maken tussen een paniekaanval en een paniekstoornis.',
    linkText: '',
    image: '/images/panic.jpg',
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

export function Page({ page, settings, homePageTitle, preview }: PageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { body, overview, title } = page || {}

  const [fearSubdisorderIndex, setFearSubdisorderIndex] = useState<number>(0)
  const [panicSubdisorderIndex, setPanicSubdisorderIndex] = useState<number>(0)

  return (
    <>
      <PageHead page={page} settings={settings} title={homePageTitle} />

      <Layout settings={settings} preview={preview} route={title}>
        {/* Main Section */}
        <section className="h-[calc(-120px+100vh)]">
          {/* Main Wrapper */}
          <div className="flex flex-row w-full h-full">
            {/* Hero Text Container */}
            <div className="flex flex-col justify-between h-full w-1/2 bg-[#c5d5bc] bg-opacity-15 gap-y-12 px-24 pb-8 pt-16">
              <h1 className="text-2xl font-sofia font-bold lg:text-5xl">
                Mentale klachten toegelicht
              </h1>
              <h3 className="text-xl font-sofia font-light 2xl:text-2xl">
                Mentale klachten kunnen iedereen treffen, en ze variëren van
                lichte ongemakken tot ernstigere aandoeningen. Het is belangrijk
                om te begrijpen dat hulp beschikbaar is en dat je niet alleen
                bent. Releafe kan je ondersteunen om je mentaal fitter en
                sterker te voelen. De app biedt tools en oefeningen om je
                geestelijke gezondheid te verbeteren. Klik hier om erachter te
                komen wat je kan doen om je mentaal fitter te voelen en op welke
                manier Releafe jou kan helpen!
              </h3>

              {/* Buttons Container */}
              <div className="flex flex-col items-center gap-y-6">
                <button className="flex justify-center items-center rounded-full h-[50px] lg:h-[60px] w-full mt-4 bg-[#c5d5bc] hover:bg-[#b7c6ae] transform duration-300 ease-in-out font-sofia font-bold text-white text-lg lg:text-xl leading-none">
                  Voel je better, gratis
                </button>

                <button className="w-16 h-16 rounded-[1.75rem] hover:bg-gray-200 flex justify-center items-center transform duration-300 ease-in-out">
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
            <div className="relative h-full w-1/2">
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
        <div className="bg-gradient-to-b from-white via-[#c5d5bc80] to-white h-full">
          {/* Mental Disorders Section */}
          <section className="mt-[6rem] w-full">
            <div className="px-5 md:px-32 lg:px-64">
              <h1 className="text-2xl font-sofia font-bold md:text-4xl text-center px-5 lg:px-64 text-nowrap">
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
            <div className="my-[4rem] flex flex-col gap-y-32 px-32">
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
                      className={`flex ${isEven ? 'flex-row' : 'flex-row-reverse'}  items-center gap-x-12`}
                    >
                      {/* Mental Disorder Text Container */}
                      <div className="flex flex-col gap-y-4 w-1/2">
                        <h2 className="text-4xl font-sofia font-bold">
                          {title}
                        </h2>

                        <p className="text-xl font-sofia font-light">
                          {description}
                        </p>

                        {/* Panic Subdisorders Selection Row */}
                        {title === 'Paniek' && additionalData && (
                          <div className="flex flex-col w-full gap-y-8">
                            <div className="flex flex-row w-full justify-center">
                              {additionalData.map((subdisorder, index) => {
                                return (
                                  <button
                                    key={index}
                                    className={`rounded-xl w-full ${panicSubdisorderIndex == index ? 'bg-[#c5d4bc] text-white' : 'bg-gray-100 text-black'} font-sofia font-medium text-lg py-2 transition duration-300 ease-in-out`}
                                    onClick={() =>
                                      setPanicSubdisorderIndex(index)
                                    }
                                  >
                                    {subdisorder.title}
                                  </button>
                                )
                              })}
                            </div>

                            <p className="text-xl font-sofia font-light">
                              {
                                additionalData[panicSubdisorderIndex]
                                  .description
                              }
                            </p>

                            {/* @TODO: Replace all instances with a `LinkText` component! */}
                            <div className="flex items-center">
                              <p className="text-xl font-sofia font-light">
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
                        )}

                        {linkText !== '' && (
                          <p className="text-xl font-sofia font-light">
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
                      <div className="relative rounded-3xl overflow-hidden h-[350px] xl:h-[450px] w-1/2">
                        <Image
                          src={image}
                          alt="Angst"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {title === 'Angst' && additionalData && (
                      <>
                        {/* Fear Subdisorders Box */}
                        <div className="relative mt-[4rem] rounded-[2.5rem] w-full h-[250px] bg-white drop-shadow-sm p-8 lg:p-0 flex items-center">
                          {/* Fear Subdisorders Selection Row */}
                          <div className="flex flex-row flex-wrap lg:flex-nowrap gap-2.5 justify-center lg:absolute lg:-top-5 lg:left-1/2 lg:transform lg:-translate-x-1/2 z-10 ">
                            {additionalData.map((subdisorder, index) => {
                              return (
                                <button
                                  key={index}
                                  onClick={() => setFearSubdisorderIndex(index)}
                                  className={`${fearSubdisorderIndex === index ? 'bg-[#c5d4bc] hover:bg-[#b7c6ae]' : 'bg-gray-100 hover:bg-[#c5d4bc]'} rounded-lg text-sm lg:text-lg font-sofia font-normal ${fearSubdisorderIndex === index ? 'text-white' : 'text-black'} text-nowrap py-2 px-10 2xl:px-20 transition duration-300 ease-in-out`}
                                >
                                  {subdisorder.title}
                                </button>
                              )
                            })}
                          </div>

                          {/* Subdisorders Body Container */}
                          <div className="flex flex-col px-16 gap-y-4">
                            <p className="text-xl font-sofia font-light">
                              {additionalData[fearSubdisorderIndex].description}
                            </p>
                            <p className="text-xl font-sofia font-light">
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
                                  className="ml-2 mt-1"
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

        {/* Disclaimer Section */}
        <section className="my-[6rem] px-5 md:px-32 lg:px-64">
          <p className="mt-4 font-sofia font-light text-center text-md">
            *Releafe biedt verschillende technieken en oefeningen die je kunnen
            helpen om je mentale fitheid te verbeteren en beter om te acan met
            de hierboven genoemoe klachten. Vergeet echter niet om bij hevige
            klachten altijd professionele hulp te zoeken.
          </p>
        </section>

        {/* Workaround: scroll to top on route change */}
        <ScrollUp />
      </Layout>
    </>
  )
}
