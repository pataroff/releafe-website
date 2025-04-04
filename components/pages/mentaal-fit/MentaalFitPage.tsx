import React, { useState } from 'react'

import Layout from 'components/shared/Layout'
import ScrollUp from 'components/shared/ScrollUp'
import HomePageHead from '../home/HomePageHead'

import Link from 'next/link'
import Image from 'next/image'

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

const MentaalFitPage = ({ settings, page }) => {
  return (
    <>
      <HomePageHead page={page} settings={settings} />
      <Layout settings={settings} route={'Mentaal fit'}>
        {/* Main Section */}
        <section className="min-h-[calc(100vh-120px)] xl:flex">
          {/* Main Wrapper */}
          <div className="flex flex-col xl:flex-row min-h-full w-full">
            {/* Hero Text Container */}
            <div className="flex flex-col justify-between h-full w-full xl:w-1/2 bg-[#c5d5bc] bg-opacity-15 gap-y-8 px-12 lg:px-24 pb-4 lg:pb-8 pt-28 lg:pt-12 2xl:pt-16">
              <h1 className="text-3xl/[2.5rem] font-sofia font-bold lg:text-4xl/[3rem] 2xl:text-5xl/[4rem]">
                Verbeter je mentale fitheid, stap voor stap
              </h1>
              <h3 className="text-md lg:text-lg 2xl:text-xl font-sofia font-light">
                Je mentale fitheid is net als je fysieke gezondheid: soms heb je
                een boost nodig. Stress, vermoeidheid, het hoort er allemaal
                bij. Maar je kunt er wel degelijk iets aan doen. Releafe biedt
                je de tools om je mentale gezondheid te versterken en je
                lekkerder in je vel te voelen. Ontdek hier hoe Releafe jou helpt
                om mentaal gezond te blijven.
              </h3>
              <p className="text-sm lg:text-md 2xl:text-lg font-sofia font-light ">
                *Releafe geeft je praktische tools en oefeningen om mentaal
                sterker te worden en beter om te gaan met deze klachten. Maar
                onthoud: bij ernstige klachten is professionele hulp altijd de
                beste stap.
              </p>

              {/* Buttons Container */}
              <div className="flex flex-col items-center gap-y-6">
                <Link
                  href="/probeer-releafe"
                  className="flex justify-center items-center rounded-full h-[50px] lg:h-[60px] w-full mt-4 bg-gradient-to-b from-[#a8d5ba] to-[#5c946e] transform duration-300 ease-in-out font-sofia font-bold text-white text-md lg:text-xl 2xl:text-xl leading-none"
                >
                  {/* Pseudo-element for the hover effect */}
                  <span className="absolute inset-0 bg-black opacity-0 rounded-full transition-opacity duration-300 ease-out z-0 hover:opacity-15"></span>

                  {/* Text above the overlay */}
                  <p className="relative z-10 pointer-events-none">
                    Verbeter je mentale fitheid
                  </p>
                </Link>

                <button
                  onClick={() => {
                    document
                      .getElementById('mental-exercises-section')
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
                src="/images/mentaal_fit_hero_image.jpg"
                alt="Mentaal Fit Hero Image"
                fill // fill = absolute positioning, therefore container needs relative
                className="object-cover object-left"
              />
            </div>
          </div>
        </section>

        {/* Gradient Background Container */}
        <div className="bg-gradient-to-b from-white via-[#c5d5bc50] to-white h-full">
          {/* Mental Exercises Section */}
          <section
            id="mental-exercises-section"
            className="mt-[2rem] xl:mt-[6rem] w-full scroll-mt-[5.5rem] lg:scroll-mt-[2.5rem]"
          >
            <div className="px-5 lg:px-48 2xl:px-64">
              <h1 className="text-2xl font-sofia font-bold lg:text-5xl text-center lg:text-nowrap">
                Mentaal fit worden en blijven
              </h1>
              <p className="mt-4 font-sofia font-light text-center text-md lg:text-xl">
                Mentale fitheid is net zo belangrijk als fysieke gezondheid.
                Door goed voor jezelf te zorgen – met beweging, gezonde voeding,
                ontspanning en sociale verbinding – kun je stress beter
                beheersen en je veerkracht vergroten. Op deze pagina ontdek je
                praktische tips en inzichten om je mentale welzijn te
                versterken. Kleine aanpassingen in je dagelijks leven kunnen een
                groot verschil maken!
              </p>
            </div>

            {/* Mental Exercises Wrapper */}
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

                if (index % 2 == 0 && index < mentalExercisesData.length - 1) {
                  const nextIndex = index + 1
                  const nextExercise = mentalExercisesData[nextIndex]

                  const groupIndex = index / 2
                  const isEvenGroup = groupIndex % 2 == 0

                  return (
                    <div
                      key={index}
                      className={`flex flex-col ${isEvenGroup ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-x-12 gap-y-8`}
                    >
                      {/* Mental Exercise Text Containers Wrapper */}
                      <div className="flex flex-col gap-y-8 lg:w-1/2">
                        {/* Mental Exercise Text Container */}
                        <div className="flex flex-col gap-y-4 lg:gap-y-8 w-full">
                          <h2 className="text-2xl xl:text-3xl 2xl:text-4xl font-sofia font-bold">
                            {title}
                          </h2>

                          <p className="text-md xl:text-lg 2xl:text-xl font-sofia font-light">
                            {description}
                          </p>

                          <p className="text-md xl:text-lg 2xl:text-xl font-sofia font-light">
                            {featureText}
                          </p>

                          <Link
                            href={'/ontdek-releafe'}
                            className="flex justify-center items-center rounded-full h-[50px] lg:h-[60px] w-full lg:w-[24rem] bg-gradient-to-b from-[#a8d5ba] to-[#5c946e] transform duration-300 ease-in-out font-sofia font-bold text-white xl:text-lg 2xl:text-xl leading-none"
                          >
                            {/* Pseudo-element for the hover effect */}
                            <span className="absolute inset-0 bg-black opacity-0 rounded-full transition-opacity duration-300 ease-out z-0 hover:opacity-15"></span>

                            {/* Text above the overlay */}
                            <p className="relative z-10 pointer-events-none">
                              {ctaText}
                            </p>
                          </Link>

                          {linkText !== '' && (
                            <p className="text-md xl:text-lg 2xl:text-xl font-sofia font-light">
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
                            <h2 className="text-2xl xl:text-3xl 2xl:text-4xl font-sofia font-bold">
                              {nextExercise.title}
                            </h2>

                            <p className="text-md xl:text-lg 2xl:text-xl font-sofia font-light">
                              {nextExercise.description}
                            </p>

                            <p className="text-md xl:text-lg 2xl:text-xl font-sofia font-light">
                              {nextExercise.featureText}
                            </p>

                            <button className="flex justify-center items-center rounded-full h-[50px] lg:h-[60px] w-full lg:w-[24rem] bg-gradient-to-b from-[#a8d5ba] to-[#5c946e] transform duration-300 ease-in-out font-sofia font-bold text-white xl:text-lg 2xl:text-xl leading-none">
                              {/* Pseudo-element for the hover effect */}
                              <span className="absolute inset-0 bg-black opacity-0 rounded-full transition-opacity duration-300 ease-out z-0 hover:opacity-15"></span>

                              {/* Text above the overlay */}
                              <p className="relative z-10 pointer-events-none">
                                {nextExercise.ctaText}
                              </p>
                            </button>

                            {nextExercise.linkText !== '' && (
                              <p className="text-md xl:text-lg 2xl:text-xl font-sofia font-light">
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
                          <div className="relative rounded-3xl overflow-hidden h-[400px] xl:h-[800px] 2xl:h-[800px] w-full lg:w-1/2">
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

                if (index == mentalExercisesData.length - 1) {
                  return (
                    <div
                      key={index}
                      className={`flex flex-col lg:flex-row  items-center gap-x-12 gap-y-8`}
                    >
                      {/* Mental Exercise Text Container */}
                      <div className="flex flex-col gap-y-4 lg:gap-y-8 w-full lg:w-1/2">
                        <h2 className="text-2xl xl:text-3xl 2xl:text-4xl font-sofia font-bold">
                          {title}
                        </h2>

                        <p className="text-md xl:text-lg 2xl:text-xl font-sofia font-light">
                          {description}
                        </p>

                        <p className="text-md xl:text-lg 2xl:text-xl font-sofia font-light">
                          {featureText}
                        </p>

                        <Link
                          href={'/ontdek-releafe'}
                          className="flex justify-center items-center rounded-full h-[50px] lg:h-[60px] w-full lg:w-[24rem] bg-gradient-to-b from-[#a8d5ba] to-[#5c946e] transform duration-300 ease-in-out font-sofia font-bold text-white xl:text-lg 2xl:text-xl leading-none"
                        >
                          {/* Pseudo-element for the hover effect */}
                          <span className="absolute inset-0 bg-black opacity-0 rounded-full transition-opacity duration-300 ease-out z-0 hover:opacity-15"></span>

                          {/* Text above the overlay */}
                          <p className="relative z-10 pointer-events-none">
                            {ctaText}
                          </p>
                        </Link>

                        {linkText !== '' && (
                          <p className="text-md xl:text-lg 2xl:text-xl font-sofia font-light">
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
                        <div className="relative rounded-3xl overflow-hidden h-[400px] xl:h-[700px] 2xl:h-[800px] w-full lg:w-1/2">
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
              })}
            </div>
          </section>
        </div>

        {/* Call-to-Action Section */}
        <section className="my-[4rem] lg:my-[6rem] px-8 md:px-32 lg:px-64 flex flex-col justify-center items-center gap-y-8">
          <h2 className="text-3xl text-center font-sofia font-bold lg:text-5xl ">
            Ontdek hoe Releafe je kan helpen mentaal fit te blijven
          </h2>
          <p className="mt-4 text-center font-sofia font-light text-lg lg:text-xl">
            Mentale fitheid is een doorlopend proces, en kleine stappen kunnen
            een groot verschil maken. Wil je meer inzicht in je mentale welzijn
            en actief werken aan je veerkracht? In de Releafe-app vind je tools
            en oefeningen die je hierbij helpen. Zet vandaag nog de eerste stap
            naar een mentaal fitter leven!
          </p>
          <Link
            href="/mentaal-fit"
            className="
    relative flex justify-center items-center rounded-full overflow-hidden h-[60px] w-full xl:w-1/2 2xl:w-1/3 mt-2
   bg-gradient-to-b from-[#a8d5ba] to-[#5c946e] text-white font-sofia font-bold text-lg xl:text-lg 
    leading-none"
          >
            {/* Pseudo-element for the hover effect */}
            <span className="absolute inset-0 bg-black opacity-0 rounded-full transition-opacity duration-300 ease-out z-0 hover:opacity-15"></span>

            {/* Text above the overlay */}
            <p className="relative z-10 pointer-events-none">Ga naar de app</p>
          </Link>
        </section>

        {/* Workaround: scroll to top on route change */}
        <ScrollUp />
      </Layout>
    </>
  )
}

export default MentaalFitPage
