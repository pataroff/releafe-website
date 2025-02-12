import React, { useState } from 'react'

import Layout from 'components/shared/Layout'
import ScrollUp from 'components/shared/ScrollUp'

import Link from 'next/link'
import Image from 'next/image'

// @TODO: This needs to be moved in 'mentaal-fit.tsx'!
const mentalExercisesData = [
  {
    title: 'Bewegen',
    description:
      'Regelmatig bewegen is goed voor zowel je fysieke als mentale gezondheid. Voldoende beweging verlaagt de kans op hart- en vaatziekten, diabetes, somberheid en zelfs dementie. Streef naar minimaal 2,5 uur actieve beweging per week. Dit kan wandelen, fietsen of sporten zijn. Maak het zo intensief als je zelf wilt.',
    featureText:
      'Met Releafe kun je persoonlijke doelen stellen op het gebied van beweging. Door het stellen van een beweegdoel in de app, kun je je voortgang bijhouden en ontvang je beloningen voor het behalen van je doelen terwijl je aan je mentale gezondheid werk',
    ctaText: 'Stel je beweegdoelen in',
    linkText: 'Meer informatie over gezond bewegen vind je hier.',
    href: 'https://www.thuisarts.nl/gezond-leven/ik-wil-gezond-bewegen',
    href2: '',
    image: '/images/mentaal_fit/bewegen.jpeg',
  },

  {
    title: 'Dingen blijven doen (niet vermijden)',
    description:
      'Actief blijven en betrokken zijn bij activiteiten kunnen je een gevoel van voldoening geven. Of het nu gaat om werk, hobby’s of sociale activiteiten, het helpt om je mentaal fit te voelen.',
    featureText:
      'Met Releafe kun je doelen stellen om actief te blijven, bijvoorbeeld door meer te ondernemen of betrokken te blijven bij sociale activiteiten.',
    ctaText: 'Blijf actief met Releafe',
    linkText: '',
    href: '',
    href2: '',
    image: '/images/stress.jpg',
  },

  {
    title: 'Ervaringen delen',
    description:
      'Praten met anderen over je ervaringen kan een gevoel van verlichting geven. Het uiten van je gedachten en emoties helpt je om situaties beter te verwerken.',
    featureText:
      'Met Releafe kun je doelen stellen om jezelf te motiveren je persoonlijke ervaringen met anderen te delen. Dit helpt je om te leren over je gevoelens te praten waardoor je je beter gaat voelen.',
    ctaText: 'Deel je ervaringen met Releafe',
    linkText: '',
    href: '',
    href2: '',
    image: '/images/mentaal_fit/ervaringen_delen.jpeg',
  },

  {
    title: 'Beperk drugs, alcohol en cafeïnegebruik',
    description:
      'Het beperken van alcohol- en druggebruik, en het matigen van cafeïne, draagt bij aan je mentale fitheid. Deze stoffen kunnen je stemming beïnvloeden en bijdragen aan stress of angst.',
    featureText:
      'Met Releafe kun je persoonlijke doelen stellen om je gebruik van alcohol, drugs en cafeïne te beperken. Dit helpt je om bewust bezig te zijn met je consumptie en hoe dit je mentale gezondheid beïnvloedt.',
    ctaText: 'Beperk alcohol, drugs en cafeïne',
    linkText:
      'Meer informatie over het verminderen van alcoholgebruik vind je hier. Wil je meer weten over hoe je drugsgebruik kan verminderen? Klik dan hier.',
    href: 'https://www.thuisarts.nl/alcohol/ik-wil-minder-alcohol-drinken-of-stoppen-met-drinken',
    href2:
      'https://www.thuisarts.nl/drugs/ik-wil-stoppen-met-drugs-of-minder-gebruiken',
    image: '/images/stress.jpg',
  },

  {
    title: 'Gezonde voeding',
    description:
      'Gezonde voeding heeft een positieve invloed op je lichaam en geest. Een gebalanceerd dieet helpt je om je energieker en beter in je vel te voelen.',
    featureText:
      'Met Releafe kun je persoonlijke doelen stellen rondom gezonde voeding en zo bijdragen aan een gebalanceerd eetpatroon dat je mentale fitheid ondersteunt.',
    ctaText: 'Stel gezonde voedingsdoelen in',
    linkText: 'Meer informatie over gezonde voeding vind je hier.',
    href: 'https://www.thuisarts.nl/gezond-eten/ik-wil-gezond-eten',
    href2: '',
    image: '/images/mentaal_fit/gezonde_voeding.jpeg',
  },

  {
    title: 'Positief (leren) denken',
    description:
      'Het ontwikkelen van een positieve mindset kan bijdragen aan je mentale fitheid. Door te focussen op positieve gedachten en situaties leer je veerkrachtiger om te gaan met tegenslagen.',
    featureText:
      'Met Releafe kun je werken aan positief en realistisch denken met de reframing oefening. Daarnaast kun je berichten aan jezelf opslaan, waarin je ondersteunende boodschappen aan jezelf kunt vastleggen en teruglezen wanneer je ze nodig hebt.',
    ctaText: 'Werk aan positief denken',
    linkText: '',
    href: '',
    href2: '',
    image: '/images/stress.jpg',
  },

  {
    title: 'Dagboek bijhouden',
    description:
      'Het bijhouden van een dagboek kan je helpen om je gedachten te ordenen en je emoties beter te begrijpen. Dit kan een goede manier zijn om patronen te herkennen, inzicht te krijgen in wat er speelt en hoe je hiermee om kunt gaan.',
    featureText:
      'In de Releafe app kun je een dagboek bijhouden waarin je dagelijks je stemming, zorgen en energie kunt scoren. Dit helpt je om patronen te herkennen en geeft inzicht in je welzijn in het persoonlijke welzijnsoverzicht. Daarnaast kun je je zorgen van je afschrijven en in je eigen zorgenbakje opslaan.',
    ctaText: 'Ontdek hoe je een dagboek bijhoudt',
    linkText: '',
    href: '',
    href2: '',
    image: '/images/mentaal_fit/dagboek_bijhouden.jpeg',
  },

  {
    title: 'Slapen',
    description:
      'Een goede nachtrust is essentieel voor je mentale welzijn. Wanneer je goed slaapt, herstel je zowel fysiek als mentaal. Als je moeite hebt met slapen, kan het helpen om vaste bedtijden aan te houden en ontspanningstechnieken te gebruiken.',
    featureText:
      'Met Releafe kun je slaapdoelen instellen om je slaappatronen te verbeteren en beter te begrijpen hoe slaap invloed heeft op je mentale fitheid. Je kunt deze doelen personaliseren en de voortgang ervan bijhouden in de app.',
    ctaText: 'Verbeter je slaap met Releafe',
    linkText: 'Meer informatie over slaapadviezen vind je hier.',
    href: 'https://www.thuisarts.nl/slecht-slapen/ik-wil-beter-slapen-slaapadviezen',
    href2: '',
    image: '/images/stress.jpg',
  },

  {
    title: 'Ontspanning',
    description:
      'Ontspanning is cruciaal om je mentale fitheid te behouden. Er zijn verschillende technieken en oefeningen die je kunnen helpen ontspannen.',
    featureText:
      'Releafe biedt ontspanningsoefeningen, zoals meditatie- en mindfulness video’s en audio, die je helpen om stress te beheersen en je beter te ontspannen. Daarnaast kun je doelen stellen om ontspanningsoefeningen een vast onderdeel van je routine te maken.',
    ctaText: 'Ontspan met Releafe oefeningen',
    linkText:
      'Meer informatie over hoe je je beter kunt ontspannen vind je hier.',
    href: 'https://www.thuisarts.nl/stress/ik-wil-me-beter-kunnen-ontspannen',
    href2: '',
    image: '/images/mentaal_fit/ontspanning.jpeg',
  },
]

const MentaalFitPage = ({ settings }) => {
  return (
    <>
      {/* @TODO Are 'preview' and 'route' needed and where do we get them from? */}
      <Layout settings={settings} route={'Mentaal fit'}>
        {/* Main Section */}
        <section className="min-h-[calc(100vh-120px)] lg:flex">
          {/* Main Wrapper */}
          <div className="flex flex-col lg:flex-row min-h-full w-full">
            {/* Hero Text Container */}
            <div className="flex flex-col justify-between h-full w-full lg:w-1/2 bg-[#c5d5bc] bg-opacity-15 gap-y-8 px-12 lg:px-24 pb-4 lg:pb-8 pt-28 lg:pt-12 2xl:pt-16">
              <h1 className="text-3xl/[2.5rem] font-sofia font-bold lg:text-4xl/[3rem] 2xl:text-5xl/[4rem]">
                Verbeter je mentale fitheid, stap voor stap
              </h1>
              <h3 className="text-md lg:text-lg 2xl:text-xl font-sofia font-light">
                Mentale fitheid is essentieel, maar soms is het lastig om
                mentaal in topvorm te blijven. Van stress tot vermoeidheid,
                iedereen heeft wel eens mentale uitdagingen. Het goede nieuws is
                dat je eraan kunt werken. Releafe biedt de tools om je mentale
                gezondheid te verbeteren en je welzijn te versterken. Klik hier
                om te ontdekken hoe Releafe jou kan helpen mentaal gezond te
                blijven!
              </h3>
              <p className="text-sm lg:text-md 2xl:text-lg font-sofia font-light ">
                *Releafe biedt verschillende technieken en oefeningen die je
                kunnen helpen om je mentale fitheid te verbeteren en beter om te
                acan met de onder genoemoe klachten. Vergeet echter niet om bij
                hevige klachten altijd professionele hulp te zoeken.
              </p>

              {/* Buttons Container */}
              <div className="flex flex-col items-center gap-y-6">
                <button className="flex justify-center items-center rounded-full h-[50px] lg:h-[60px] w-full mt-4 bg-[#c5d5bc] hover:bg-[#b7c6ae] transform duration-300 ease-in-out font-sofia font-bold text-white text-md lg:text-xl 2xl:text-xl leading-none">
                  Verbeter je mentale fitheid, gratis
                </button>

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
                src="/images/mentaal_fit_hero_image.jpg"
                alt="Mentaal Fit Hero Image"
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
            className="mt-[6rem] w-full scroll-mt-[5.5rem] lg:scroll-mt-[2.5rem]"
          >
            <div className="px-5 lg:px-48 2xl:px-64">
              <h1 className="text-2xl font-sofia font-bold lg:text-5xl text-center lg:text-nowrap">
                Ontdek de functies van de Releafe app
              </h1>
              <p className="mt-4 font-sofia font-light text-center text-md lg:text-xl">
                Hieronder vind je een overzicht van de belangrijkste functies
                van de Releafe app. Met deze tools kun je actief werken aan je
                mentale fitheid en welzijn. Of je nu wilt bewegen, ontspannen,
                of je gedachten beter wilt ordenen, Releafe biedt je de
                begeleiding die je nodig hebt. Klik op de links voor meer
                informatie over elke functie en hoe ze je kunnen helpen.
              </p>
            </div>

            {/* Releafe Features Wrapper */}
            <div className="my-[2rem] lg:my-[4rem] flex flex-col gap-y-12 lg:gap-y-32 px-8 lg:px-32">
              {mentalExercisesData.map((item, index) => {
                const {
                  title,
                  description,
                  featureText,
                  ctaText,
                  linkText,
                  href,
                  href2,
                  image,
                } = item

                if (index == 0) {
                  return (
                    <div
                      key={index}
                      className={`flex flex-col lg:flex-row  items-center gap-x-12 gap-y-8`}
                    >
                      {/* Mental Exercise Text Container */}
                      <div className="flex flex-col gap-y-4 lg:gap-y-8 w-full lg:w-1/2">
                        <h2 className="text-2xl lg:text-4xl font-sofia font-bold">
                          {title}
                        </h2>

                        <p className="text-md lg:text-xl font-sofia font-light">
                          {description}
                        </p>

                        <p className="text-md lg:text-xl font-sofia font-light">
                          {featureText}
                        </p>

                        <Link
                          href={'/ontdek-releafe'}
                          className="flex justify-center items-center rounded-full h-[50px] lg:h-[60px] w-full lg:w-[24rem] bg-[#c5d5bc] hover:bg-[#b7c6ae] transform duration-300 ease-in-out font-sofia font-bold text-white text-lg lg:text-xl leading-none"
                        >
                          {ctaText}
                        </Link>

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
                            {linkText?.split('hier')[1] &&
                              linkText?.split('hier')[1].length > 1 && (
                                <>
                                  {linkText?.split('hier')[1].split('hier')[0]}{' '}
                                  <Link
                                    href={href2}
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
                                </>
                              )}
                          </p>
                        )}
                      </div>

                      {/* Releafe Feature Image Container */}
                      {image !== '' && image !== '/images/stress.jpg' && (
                        <div className="relative rounded-3xl overflow-hidden h-[400px] lg:h-[800px] w-full lg:w-1/2">
                          <Image
                            src={image}
                            alt=""
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                    </div>
                  )
                }

                if (index % 2 == 1 && index <= mentalExercisesData.length - 2) {
                  const nextExercise = mentalExercisesData[index + 1]

                  return (
                    <div
                      key={index}
                      className={`flex flex-col ${(index + 1) % 4 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-x-12 gap-y-8`}
                    >
                      {/* Mental Exercise Text Containers Wrapper */}
                      <div className="flex flex-col gap-y-8 lg:w-1/2">
                        {/* Mental Exercise Text Container */}
                        <div className="flex flex-col gap-y-4 lg:gap-y-8 w-full">
                          <h2 className="text-2xl lg:text-4xl font-sofia font-bold">
                            {title}
                          </h2>

                          <p className="text-md lg:text-xl font-sofia font-light">
                            {description}
                          </p>

                          <p className="text-md lg:text-xl font-sofia font-light">
                            {featureText}
                          </p>

                          <Link
                            href={'/ontdek-releafe'}
                            className="flex justify-center items-center rounded-full h-[50px] lg:h-[60px] w-full lg:w-[24rem] bg-[#c5d5bc] hover:bg-[#b7c6ae] transform duration-300 ease-in-out font-sofia font-bold text-white text-lg lg:text-xl leading-none"
                          >
                            {ctaText}
                          </Link>

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
                              {linkText?.split('hier')[1] &&
                                linkText?.split('hier')[1].length > 1 && (
                                  <>
                                    {
                                      linkText
                                        ?.split('hier')[1]
                                        .split('hier')[0]
                                    }{' '}
                                    <Link
                                      href={href2}
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
                                  </>
                                )}
                            </p>
                          )}
                        </div>

                        {/* Next Mental Exercise Text Container */}
                        {nextExercise && (
                          <div className="flex flex-col gap-y-4 lg:gap-y-8 w-full">
                            <h2 className="text-2xl lg:text-4xl font-sofia font-bold">
                              {nextExercise.title}
                            </h2>

                            <p className="text-md lg:text-xl font-sofia font-light">
                              {nextExercise.description}
                            </p>

                            <p className="text-md lg:text-xl font-sofia font-light">
                              {nextExercise.featureText}
                            </p>

                            <button className="flex justify-center items-center rounded-full h-[50px] lg:h-[60px] w-full lg:w-[24rem] bg-[#c5d5bc] hover:bg-[#b7c6ae] transform duration-300 ease-in-out font-sofia font-bold text-white text-lg lg:text-xl leading-none">
                              {nextExercise.ctaText}
                            </button>

                            {nextExercise.linkText !== '' && (
                              <p className="text-md lg:text-xl font-sofia font-light">
                                {nextExercise.linkText?.split('hier')[0]}{' '}
                                <Link
                                  href={nextExercise.href}
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
                                {nextExercise.linkText?.split('hier')[1] &&
                                  nextExercise.linkText?.split('hier')[1]
                                    .length > 1 && (
                                    <>
                                      {
                                        nextExercise.linkText
                                          ?.split('hier')[1]
                                          .split('hier')[0]
                                      }{' '}
                                      <Link
                                        href={nextExercise.href2}
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
                                    </>
                                  )}
                              </p>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Releafe Feature Image Container */}
                      {nextExercise.image !== '' &&
                        nextExercise.image !== '/images/stress.jpg' && (
                          <div className="relative rounded-3xl overflow-hidden h-[400px] lg:h-[800px] w-full lg:w-1/2">
                            <Image
                              src={nextExercise.image}
                              alt=""
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                    </div>
                  )
                }
              })}
            </div>
          </section>
        </div>

        {/* Call-to-Action Section */}
        {/* <section className="my-[4rem] lg:my-[6rem] px-8 md:px-32 lg:px-64 flex flex-col justify-center items-center gap-y-8">
          <h2 className="text-3xl text-center font-sofia font-bold lg:text-5xl ">
            Ontdek hoe Releafe je kan helpen mentaal fit te blijven
          </h2>
          <p className="mt-4 text-center font-sofia font-light text-lg lg:text-xl">
            Op de <strong>Mentaal fit</strong> pagina ontdek je hoe onze app
            werkt en hoe deze je kan ondersteunen bij het verminderen van
            klachten die je op de
            <strong> Mentale klachten</strong> pagina hebt gezien.
          </p>
          <button className="rounded-full h-[50px] lg:h-[60px] w-full lg:w-1/2 mt-4 bg-[#c5d5bc] hover:bg-[#b7c6ae] transform duration-300 ease-in-out font-sofia font-bold text-white text-lg lg:text-xl leading-none">
            Ga naar Mentaal fit
          </button>
        </section> */}

        {/* Workaround: scroll to top on route change */}
        <ScrollUp />
      </Layout>
    </>
  )
}

export default MentaalFitPage
