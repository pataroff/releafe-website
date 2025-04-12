import React, { useState, useEffect, useRef } from 'react'

import Layout from 'components/shared/Layout'
import ScrollUp from 'components/shared/ScrollUp'
import HomePageHead from '../home/HomePageHead'

import Link from 'next/link'
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons'

const bedrijvenData = [
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
]

const factsData = [
  {
    numberText: '20%',
    descriptionText:
      'van de werknemers in Nederland ervaart op dit moment mentale klachten.',
  },
  {
    numberText: '€4,4 miljard',
    descriptionText:
      'zijn de jaarlijkse verzuimkosten voor werkgevers door mentale werkdruk.',
  },
  {
    numberText: '€14.000',
    descriptionText:
      'zijn de gemiddelde verzuimkosten per werknemer door mentale werkdruk.',
  },
  {
    numberText: '27%',
    descriptionText:
      'van alle verzuimdagen zijn het gevolg van mentale klachten.',
  },
  {
    numberText: '57 dagen',
    descriptionText:
      'is het gemiddelde verzuim per jaar door mentale klachten.',
  },
  {
    numberText: '30% ',
    descriptionText:
      'minder energie en motivatie is wat werknemers met mentale klachten ervaren.',
  },
  {
    numberText: '2 uur',
    descriptionText:
      'per dag is het productiviteitsverlies door mentale klachten.',
  },
  {
    numberText: '30%',
    descriptionText:
      'kostenbesparing is mogelijk door te investeren in mentale gezondheid.',
  },
]

const ReleafeVoorOrganisatiesPage = ({ settings, page }) => {
  const [bedrijvenIndex, setBedrijvenIndex] = useState<number>(0)
  const [factsActiveIndex, setFactsActiveIndex] = useState<number>(0)

  const videoRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current.play()
        } else {
          videoRef.current.pause()
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the video is visible
      },
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current)
      }
    }
  }, [])

  const handleFactsNext = () => {
    setFactsActiveIndex((prev) => (prev + 1) % factsData.length)
  }

  const handleFactsPrev = () => {
    setFactsActiveIndex((prev) =>
      prev === 0 ? factsData.length - 1 : prev - 1,
    )
  }

  return (
    <>
      <HomePageHead page={page} settings={settings} />
      <Layout settings={settings} route={'Releafe voor bedjriven'}>
        {/* Main Section */}
        <section className="xl:min-h-[calc(100vh-120px)] xl:flex">
          {/* Main Wrapper */}
          <div className="flex flex-col xl:flex-row min-h-full w-full">
            {/* Hero Text Container */}
            <div className="flex flex-col justify-between h-full w-full xl:w-1/2 bg-[#c5d5bc] bg-opacity-15 gap-y-8 px-12 xl:px-24 pb-4 xl:pb-8 pt-28 xl:pt-12 2xl:pt-16">
              <h1 className="text-3xl/[2.5rem] font-sofia font-bold lg:text-4xl/[3rem] 2xl:text-5xl/[4rem]">
                Samen bouwen aan een mentaal sterke werkplek
              </h1>
              <h3 className="text-md lg:text-lg 2xl:text-xl font-sofia font-light">
                Mentale gezondheid op het werk is belangrijk. Stress, burn-out
                en andere mentale klachten komen steeds vaker voor. Dit heeft
                niet alleen invloed op je medewerkers, maar ook op je
                organisatie. Gelukkige en gezonde medewerkers presteren beter,
                zijn minder vaak ziek en blijven langer bij je werken. Releafe
                helpt jouw organisatie om medewerkers te ondersteunen, een
                positieve werkomgeving te creëren en geeft waardevolle inzichten
                om het werkklimaat te verbeteren.
              </h3>

              {/* Buttons Container */}
              <div className="flex flex-col items-center gap-y-6">
                <Link
                  href="mailto:info@releafe.nl"
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
            <div className="relative h-[400px] lg:h-[500px] xl:min-h-full w-full xl:w-1/2">
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
          {/* Facts Section */}
          <section className="mt-[4rem] lg:mt-[6rem] w-full px-8 lg:px-16 xl:px-64">
            <h1 className="text-2xl font-sofia font-bold md:text-4xl text-center">
              Gezonde medewerkers, sterke organisaties: waarom mentale zorg telt
            </h1>

            {/* Testimonials Wrapper */}
            <div className="mt-[2rem] lg:mt-[4rem] mx-auto max-w-[1440px]">
              {/* Testimonials Container */}
              <ul className="relative h-[450px]">
                {/* Testimonial Box */}
                {factsData.map((fact, index) => {
                  // Calculate the relative position of the element
                  const relativeIndex = index - factsActiveIndex

                  // Dynamically compute the translateX value
                  const translateXValue = `calc(${relativeIndex * 100}% + ${
                    relativeIndex * 36
                  }px)`
                  return (
                    <li
                      key={index}
                      style={{
                        transform: `translateX(${translateXValue})`,
                        transition: 'transform 0.2s ease-in-out',
                      }}
                      className={`rounded-[2.5rem] absolute w-[350px] h-[450px] bg-gradient-to-b from-[#c5d5bc] to-[#8fa58b] px-8 py-10 flex flex-col justify-center items-center space-y-2 drop-shadow-md`}
                    >
                      {/* Number Text */}
                      <h1 className="mt-4 font-sofia font-normal text-5xl leading-tight text-white text-center">
                        {fact.numberText}
                      </h1>

                      <h2 className="font-sofia font-normal text-white text-xl text-center">
                        {fact.descriptionText}
                      </h2>
                    </li>
                  )
                })}
              </ul>
              {/* Testimonial Control Buttons */}
              <ul className="mt-[2rem] lg:mt-[4rem] w-full h-14 flex flex-row gap-x-4 justify-center lg:justify-end">
                <li
                  className={`flex justify-center items-center rounded-full w-10 h-10 bg-[#c5d6bc] hover:bg-[#b7c6ae] transform duration-300 ease-in-out ${factsActiveIndex === 0 ? 'opacity-50' : 'opacity-100'}`}
                >
                  <button
                    className="h-[2.5rem] w-[2.5rem] rounded-full"
                    disabled={factsActiveIndex === 0 ? true : false}
                    onClick={() => handleFactsPrev()}
                  >
                    <FontAwesomeIcon
                      icon={faChevronLeft}
                      color="white"
                      size="lg"
                    />
                  </button>
                </li>
                <li
                  className={`flex justify-center items-center rounded-full w-10 h-10 bg-[#96a78d] hover:bg-[#8d9b81] transform duration-300 ease-in-out ${factsActiveIndex === factsData.length - 1 ? 'opacity-50' : 'opacity-100'}`}
                >
                  <button
                    className="h-[2.5rem] w-[2.5rem] rounded-full"
                    disabled={
                      factsActiveIndex === factsData.length - 1 ? true : false
                    }
                    onClick={() => handleFactsNext()}
                  >
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      color="white"
                      size="lg"
                    />
                  </button>
                </li>
              </ul>
            </div>
          </section>

          {/*  Voor Bedrijven Section */}
          <section
            id="voor-bedrijven-section"
            className="mt-[2rem] xl:mt-[6rem] w-full scroll-mt-[5.5rem] lg:scroll-mt-[2.5rem] px-8 lg:px-16 2xl:px-64"
          >
            <h1 className="text-3xl font-sofia font-bold xl:text-4xl 2xl:text-5xl text-center lg:text-nowrap">
              Ontdek hoe Releafe jouw medewerkers en organisatie helpt
            </h1>
            <p className="mt-4 font-sofia font-light text-center text-md md:text-xl">
              Releafe biedt medewerkers de tools om grip te krijgen op hun
              mentale welzijn en geeft bedrijven waardevolle inzichten om een
              gezonde werkomgeving te creëren. Van persoonlijke ondersteuning
              tot geanonimiseerde groepsanalyses: ontdek hoe Releafe bijdraagt
              aan een veerkrachtige en productieve organisatie. Klik op de links
              voor meer informatie!
            </p>
          </section>

          <section className="mt-[4rem] lg:mt-[6rem] px-8 lg:px-16 xl:px-64 flex flex-col justify-center items-center">
            <div className="relative rounded-[2.5rem] w-full h-full bg-white drop-shadow-lg p-8">
              {/* Bedrijven Selection Row Container */}
              <div className="flex flex-row flex-wrap lg:flex-nowrap gap-y-3 gap-x-5 justify-center lg:absolute lg:-top-5 lg:left-1/2 lg:transform lg:-translate-x-1/2 z-10 ">
                {bedrijvenData.map((item, index) => {
                  return (
                    <button
                      key={index}
                      className={`rounded-xl w-full ${bedrijvenIndex == index ? 'bg-gradient-to-b from-[#c5d5bc] to-[#8fa58b] text-white' : 'bg-gray-200 hover:bg-gray-300 text-black'} font-sofia font-semibold text-nowrap text-md lg:text-xl xl:text-lg py-2 px-12 transition duration-300 ease-in-out`}
                      onClick={() => setBedrijvenIndex(index)}
                    >
                      {item.buttonText}
                    </button>
                  )
                })}
              </div>
              {/* Bedrijven Data Container */}
              <div className="flex flex-col-reverse xl:flex-row items-center w-full gap-x-8 gap-y-8 xl:p-8">
                <div className="flex flex-col gap-y-8 w-full xl:w-1/2">
                  <h2 className="text-3xl 2xl:text-4xl font-sofia font-bold">
                    {bedrijvenData[bedrijvenIndex].title}
                  </h2>

                  <h3 className="text-md lg:text-xl xl:text-lg 2xl:text-xl font-sofia font-light">
                    {bedrijvenData[bedrijvenIndex].description}
                  </h3>

                  {bedrijvenData[bedrijvenIndex].features.map(
                    (feature, index) => {
                      return (
                        <h3
                          key={index}
                          className="text-md lg:text-xl xl:text-lg 2xl:text-xl font-sofia font-light"
                        >
                          • {feature}
                        </h3>
                      )
                    },
                  )}

                  {bedrijvenData[bedrijvenIndex].linkText !== '' && (
                    <>
                      <h3 className="text-md lg:text-xl xl:text-lg 2xl:text-xl font-sofia font-light">
                        {bedrijvenData[bedrijvenIndex].linkText}
                      </h3>
                      <Link
                        href={bedrijvenData[bedrijvenIndex].href}
                        className="flex justify-center items-center rounded-full h-[50px] lg:h-[60px] w-full lg:w-[24rem] bg-gradient-to-b from-[#c5d5bc] to-[#8fa58b] transform duration-300 ease-in-out font-sofia font-bold text-white text-md lg:text-xl xl:text-lg 2xl:text-xl leading-none"
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
                {bedrijvenData[bedrijvenIndex].image !== '' ? (
                  <div className="relative rounded-3xl overflow-hidden h-[400px] lg:h-[500px] xl:h-[600px] w-full xl:w-1/2 mt-[2rem] xl:mt-0">
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

            {/* Video Wrapper */}
            <div className="mt-[2rem] lg:mt-[4rem] xl:px-16">
              {/* Video Container */}
              <div className="relative rounded-3xl overflow-hidden h-[400px] lg:h-[500px] xl:h-[700px] 2xl:h-[700px] w-full drop-shadow-md">
                <video
                  ref={videoRef}
                  src={
                    '/videos/Video-presentatie-Releafe-met-contactgegevens-DEF.mp4'
                  }
                  className="object-contain xl:object-cover w-full h-full"
                  controls
                  muted
                />
              </div>
            </div>
          </section>
        </div>

        {/* Call-to-Action Section */}
        <section className="my-[4rem] lg:my-[6rem] px-8 lg:px-16 xl:px-64 flex flex-col justify-center items-center gap-y-8">
          <h2 className="text-3xl text-center font-sofia font-bold lg:text-5xl ">
            Benieuwd wat Releafe voor jouw organisatie kan betekenen?
          </h2>
          <p className="mt-4 text-center font-sofia font-light text-lg lg:text-xl">
            Wil je als organisaties bijdragen aan een mentaal gezonde
            werkomgeving? Wij helpen je graag! Neem vrijblijvend contact op via{' '}
            <strong>info@releafe.nl</strong>. Samen zorgen we voor minder stress
            en meer werkplezier.
          </p>

          <Link
            href="mailto:info@releafe.nl"
            className="
    relative flex justify-center items-center rounded-full overflow-hidden h-[50px] w-full xl:w-1/2 2xl:w-1/3 mt-2
    bg-gradient-to-b from-[#c5d5bc] to-[#8fa58b] text-white font-sofia font-bold text-lg lg:text-xl xl:text-lg 
    leading-none"
          >
            {/* Pseudo-element for the hover effect */}
            <span className="absolute inset-0 bg-black opacity-0 rounded-full transition-opacity duration-300 ease-out z-0 hover:opacity-15"></span>

            {/* Text above the overlay */}
            <p className="relative z-10 pointer-events-none">Neem contact op</p>
          </Link>
        </section>
        <ScrollUp />
      </Layout>
    </>
  )
}

export default ReleafeVoorOrganisatiesPage
