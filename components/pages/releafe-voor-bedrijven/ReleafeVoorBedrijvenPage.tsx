import React, { useState } from 'react'

import Layout from 'components/shared/Layout'
import ScrollUp from 'components/shared/ScrollUp'
import HomePageHead from '../home/HomePageHead'

import Link from 'next/link'
import Image from 'next/image'

const bedrijvenData = [
  {
    buttonText: 'Voor medewerkers',
    title: 'Grip op hun mentale welzijn',
    description:
      'De Releafe-app biedt medewerkers eenvoudige en effectieve tools om zich beter te voelen. De app biedt:',
    features: [
      'Een dagboek en welzijnsoverzicht voor meer inzicht/Inzicht in hun mentale welzijn met een dagboek en welzijnscheck',
      'Hulp bij het stellen van persoonlijke doelen',
      'Praktische oefeningen en tips om stress te verminderen en energie op te bouwen',
    ],
    salesText:
      'Door medewerkers zelf de regie te geven, voelen ze zich beter en meer betrokken, werken ze met meer focus en zijn ze gemotiveerder.',
    linkText: 'Meer weten over de Releafe app? Klik hier!',
    href: '/ontdek-releafe',
    image: '/images/releafe_voor_bedrijven/medewerkers_image.jpg',
    video: '',
  },

  {
    buttonText: 'Voor bedrijven',
    title: 'Waardevolle inzichten en acties',
    description:
      'Naast directe ondersteuning voor medewerkers biedt Releafe organisaties anonieme informatie op groepsniveau over mentaal welzijn. Met behulp van de app:',
    features: [
      'Zie je wat er speelt: krijg een duidelijk beeld van hoe jouw medewerkers zich voelen. Zie patronen en ontdek snel of er problemen zijn.',
      'Vang je signalen op: merk op tijd op als er veel stress is of als de energie laag is. Zo kun je snel actie ondernemen.',
      'Neem je slimme beslissingen: gebruik de gegevens van de app om de juiste hulp te bieden.',
    ],
    salesText:
      'Deze inzichten helpen je om op tijd in te grijpen en een fijne werkomgeving te creëren waarin medewerkers zich gehoord, gesteund en gewaardeerd voelen. Privacy staat voorop: alle data is anoniem en niet te herleiden naar individuen.',
    linkText: '',
    href: '',
    image: '/images/releafe_voor_bedrijven/bedrijven_image.jpg',
    video: '/videos/Video-presentatie-Releafe-met-contactgegevens-DEF.mp4',
  },
]

const ReleafeVoorBedrijvenPage = ({ settings, page }) => {
  const [bedrijvenIndex, setBedrijvenIndex] = useState<number>(0)

  return (
    <>
      <HomePageHead page={page} settings={settings} />
      <Layout settings={settings} route={'Releafe voor bedjriven'}>
        {/* Main Section */}
        <section className="min-h-[calc(100vh-120px)] xl:flex">
          {/* Main Wrapper */}
          <div className="flex flex-col xl:flex-row min-h-full w-full">
            {/* Hero Text Container */}
            <div className="flex flex-col justify-between h-full w-full xl:w-1/2 bg-[#c5d5bc] bg-opacity-15 gap-y-8 px-12 lg:px-24 pb-4 lg:pb-8 pt-28 lg:pt-12 2xl:pt-16">
              <h1 className="text-3xl/[2.5rem] font-sofia font-bold lg:text-4xl/[3rem] 2xl:text-5xl/[4rem]">
                Samen bouwen aan een mentaal sterke werkplek
              </h1>
              <h3 className="text-md lg:text-lg 2xl:text-xl font-sofia font-light">
                Mentale gezondheid op het werk is cruciaal, maar stress en
                burn-out komen steeds vaker voor. Dit raakt niet alleen je
                medewerkers, maar ook je organisatie. Releafe helpt bij het
                creëren van een positieve werkomgeving en biedt inzichten om het
                werkklimaat te verbeteren. Klik hier en ontdek hoe Releafe jouw
                team kan ondersteunen!
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
                  className="flex justify-center items-center rounded-full h-[50px] lg:h-[60px] w-full mt-4 bg-gradient-to-b from-[#c5d5bc] to-[#8fa58b] transform duration-300 ease-in-out font-sofia font-bold text-white text-md lg:text-xl 2xl:text-xl leading-none"
                >
                  {/* Pseudo-element for the hover effect */}
                  <span className="absolute inset-0 bg-black opacity-0 rounded-full transition-opacity duration-300 ease-out z-0 hover:opacity-15"></span>

                  {/* Text above the overlay */}
                  <p className="relative z-10 pointer-events-none">
                    Creëer een veerkrachtige werkplek
                  </p>
                </Link>

                <button
                  onClick={() => {
                    document
                      .getElementById('voor-bedrijven-section')
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
            <div className="relative h-[400px] lg:min-h-full w-full xl:w-1/2">
              <Image
                src="/images/bedrijven_hero_image.jpg"
                alt="Bedrijven Hero Image"
                fill // fill = absolute positioning, therefore container needs relative
                className="object-cover object-center"
              />
            </div>
          </div>
        </section>

        {/* Gradient Background Container */}
        <div className="bg-gradient-to-b from-white via-[#c5d5bc50] to-white h-full">
          {/*  Voor Bedrijven Section */}
          <section
            id="voor-bedrijven-section"
            className="mt-[2rem] xl:mt-[6rem] w-full scroll-mt-[5.5rem] lg:scroll-mt-[2.5rem]"
          >
            <div className="px-5 lg:px-24 2xl:px-64">
              <h1 className="text-2xl font-sofia font-bold xl:text-4xl 2xl:text-5xl text-center lg:text-nowrap">
                Ontdek hoe Releafe jouw medewerkers en organisatie helpt
              </h1>
              <p className="mt-4 font-sofia font-light text-center lg:text-md xl:text-lg 2xl:text-xl">
                Releafe biedt medewerkers de tools om grip te krijgen op hun
                mentale welzijn en geeft bedrijven waardevolle inzichten om een
                gezonde werkomgeving te creëren. Van persoonlijke ondersteuning
                tot anonieme groepsanalyses: ontdek hoe Releafe bijdraagt aan
                een veerkrachtige en productieve organisatie. Klik op de links
                voor meer informatie!
              </p>
            </div>
          </section>

          <section className="mt-[4rem] lg:mt-[6rem] px-5 xl:px-32 2xl:px-64 flex flex-col justify-center items-center">
            <div className="relative rounded-[2.5rem] w-full h-full bg-white drop-shadow-lg p-8">
              {/* Bedrijven Selection Row Container */}
              <div className="flex flex-row flex-wrap xl:flex-nowrap gap-y-3 gap-x-5 justify-center lg:absolute lg:-top-5 lg:left-1/2 lg:transform lg:-translate-x-1/2 z-10 ">
                {bedrijvenData.map((item, index) => {
                  return (
                    <button
                      key={index}
                      className={`rounded-xl w-full ${bedrijvenIndex == index ? 'bg-gradient-to-b from-[#c5d5bc] to-[#8fa58b] text-white' : 'bg-gray-200 hover:bg-gray-300 text-black'} font-sofia font-semibold text-nowrap text-sm xl:text-lg py-2 px-12 transition duration-300 ease-in-out`}
                      onClick={() => setBedrijvenIndex(index)}
                    >
                      {item.buttonText}
                    </button>
                  )
                })}
              </div>
              {/* Bedrijven Data Container */}
              <div className="flex flex-col-reverse xl:flex-row items-center w-full gap-x-8 gap-y-8 xl:p-8">
                <div className="flex flex-col gap-y-8 w-full lg:w-1/2">
                  <h2 className="text-2xl xl:text-3xl 2xl:text-4xl font-sofia font-bold">
                    {bedrijvenData[bedrijvenIndex].title}
                  </h2>

                  <h3 className="text-md xl:text-lg 2xl:text-xl font-sofia font-light">
                    {bedrijvenData[bedrijvenIndex].description}
                  </h3>

                  {bedrijvenData[bedrijvenIndex].features.map(
                    (feature, index) => {
                      return (
                        <h3
                          key={index}
                          className="text-md xl:text-lg 2xl:text-xl font-sofia font-light"
                        >
                          • {feature}
                        </h3>
                      )
                    },
                  )}

                  {bedrijvenData[bedrijvenIndex].linkText !== '' && (
                    <>
                      <h3 className="text-md xl:text-lg 2xl:text-xl font-sofia font-light">
                        {bedrijvenData[bedrijvenIndex].linkText}
                      </h3>
                      <Link
                        href={bedrijvenData[bedrijvenIndex].href}
                        className="flex justify-center items-center rounded-full h-[50px] lg:h-[60px] w-full lg:w-[24rem] bg-gradient-to-b from-[#c5d5bc] to-[#8fa58b] transform duration-300 ease-in-out font-sofia font-bold text-white text-md xl:text-lg 2xl:text-xl leading-none"
                      >
                        {/* Pseudo-element for the hover effect */}
                        <span className="absolute inset-0 bg-black opacity-0 rounded-full transition-opacity duration-300 ease-out z-0 hover:opacity-15"></span>

                        {/* Text above the overlay */}
                        <p className="relative z-10 pointer-events-none">
                          Ga naar Ontdek Releafe
                        </p>
                      </Link>
                    </>
                  )}
                </div>

                {/* Media Container */}
                {bedrijvenData[bedrijvenIndex].video !== '' ? (
                  <div className="relative rounded-3xl overflow-hidden h-[400px] xl:h-[500px] 2xl:h-[500px] w-full lg:w-1/2 mt-[2rem] xl:mt-0">
                    <video
                      src={bedrijvenData[bedrijvenIndex].video}
                      className="object-cover w-full h-full"
                      controls
                      autoPlay
                      playsInline
                    />
                  </div>
                ) : bedrijvenData[bedrijvenIndex].image !== '' ? (
                  <div className="relative rounded-3xl overflow-hidden h-[400px] xl:h-[500px] 2xl:h-[500px] w-full lg:w-1/2 mt-[2rem] xl:mt-0">
                    <Image
                      src={bedrijvenData[bedrijvenIndex].image}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : null}
              </div>
            </div>
          </section>
        </div>

        {/* Call-to-Action Section */}
        <section className="my-[4rem] lg:my-[6rem] px-8 md:px-32 lg:px-64 flex flex-col justify-center items-center gap-y-8">
          <h2 className="text-3xl text-center font-sofia font-bold lg:text-5xl ">
            Benieuwd wat Releafe voor jouw organisatie kan betekenen?
          </h2>
          <p className="mt-4 text-center font-sofia font-light text-lg lg:text-xl">
            Wil je als bedrijf bijdragen aan een mentaal gezonde werkomgeving?
            Wij helpen je graag! Neem vrijblijvend contact op via{' '}
            <strong>info@releafe.nl</strong>. Samen zorgen we voor minder stress
            en meer werkplezier.
          </p>

          <Link
            href="mailto:info@releafe.nl"
            className="
    relative flex justify-center items-center rounded-full overflow-hidden h-[50px] w-full xl:w-1/2 2xl:w-1/3 mt-2
    bg-gradient-to-b from-[#c5d5bc] to-[#8fa58b] text-white font-sofia font-bold text-lg xl:text-lg 
    leading-none"
          >
            {/* Pseudo-element for the hover effect */}
            <span className="absolute inset-0 bg-black opacity-0 rounded-full transition-opacity duration-300 ease-out z-0 hover:opacity-15"></span>

            {/* Text above the overlay */}
            <p className="relative z-10 pointer-events-none">Neem contact nu</p>
          </Link>
        </section>
        <ScrollUp />
      </Layout>
    </>
  )
}

export default ReleafeVoorBedrijvenPage
