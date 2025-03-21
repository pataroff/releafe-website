import React, { useState } from 'react'

import Layout from 'components/shared/Layout'
import ScrollUp from 'components/shared/ScrollUp'

import Link from 'next/link'
import Image from 'next/image'

import HomePageHead from '../home/HomePageHead'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const coreValues = [
  {
    valueTitle: 'Toegankelijkheid',
    valueDescription:
      'Iedereen verdient ondersteuning bij mentale gezondheid, zonder stigma.',
  },
  {
    valueTitle: 'Praktische tools',
    valueDescription:
      'Geen vrijblijvende adviezen, maar concrete stappen om je beter te voelen.',
  },
  {
    valueTitle: 'Persoonlijke groei',
    valueDescription:
      'Kleine, haalbare veranderingen maken een groot verschil op de lange termijn.',
  },
  {
    valueTitle: 'Samenwerking',
    valueDescription:
      'We geloven dat de beste resultaten ontstaan door te luisteren naar gebruikers en samen te werken met experts op het gebied van psychologie en technologie.',
  },
  {
    valueTitle: 'Empathie',
    valueDescription:
      'We begrijpen wat onze gebruikers doormaken en ontwikkelen Releafe met hun behoeften en ervaringen in gedachten.',
  },
]

const teamData = [
  {
    name: 'Jan Grobbe',
    photo: '/images/Jan_Photo.jpeg',
  },
  {
    name: 'Nynke Dijk',
    photo: '/images/Nynke_Photo.jpg',
  },
]

const OverOnsPage = ({ settings, page }) => {
  return (
    <>
      <HomePageHead page={page} settings={settings} />
      <Layout settings={settings} route={'Mentale klachten'}>
        {/* Main Section */}
        <section className="min-h-[calc(100vh-120px)] bg-[#F7F7F7] pt-[5rem] xl:flex xl:pt-0 ">
          <div className="bg-white rounded-3xl shadow-xl my-[2rem] xl:my-[4rem] mx-4 xl:mx-32 2xl:mx-64 py-14 px-8 xl:px-16">
            {/* How did Releafe originate? */}
            <h2 className="font-sofia font-bold text-2xl  xl:text-3xl 2xl:text-4xl ">
              Hoe is Releafe ontstaan?
            </h2>
            <div className="space-y-8 mt-[2rem]">
              <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                Uit eigen ervaring weet ik hoe ingrijpend mentale uitdagingen je
                leven kunnen beïnvloeden. Jarenlang worstelde ik met hevige
                angst- en paniekklachten. Intensieve behandeltrajecten hebben
                uiteindelijk hun effect gehad. Mijn klachten zijn verminderd en
                ik kan mijn leven nu leiden op mijn eigen manier, zonder dat
                angst de controle heeft.
              </p>

              <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                Als ik terugkijk op deze periode miste ik een toegankelijke
                manier om mezelf te ondersteunen bij het omgaan met mijn
                klachten. Ik had behoefte aan een plek met inzichten, oefeningen
                en begeleiding zonder overweldigd te raken. Ik zocht naar
                manieren om beter om te gaan met mijn angsten en paniek. Ik
                probeerde van alles—therapie, ontspanningstechnieken,
                zelfhulpboeken—maar nergens vond ik een centrale plek waar alles
                samenkwam. De tools en inzichten die mij hielpen, waren
                versnipperd over verschillende methoden en bronnen.
              </p>

              <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                Dat zette me aan het denken: wat als er een app bestond die niet
                alleen inzichten biedt, maar ook helpt om dagelijkse gewoonten
                op te bouwen? Zo is Releafe ontstaan. Een app die je ondersteunt
                in het omgaan met mentale klachten, zonder dat je alles zelf
                hoeft uit te zoeken. Een app die ik zelf had willen hebben toen
                ik het nodig had.
              </p>

              <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                Ik weet uit eigen ervaring hoe belangrijk mentale gezondheid is.
                Met mijn bedrijfskundige achtergrond bouw ik aan Releafe: een
                innovatieve organisatie die met een strategische blik het
                verschil maakt. Mijn doel? Een impactvolle app die niet alleen
                helpt, maar ook een organisatie die echt het verschil maakt.
              </p>
            </div>

            {/* Our Mission */}
            <h2 className="font-sofia font-bold text-2xl xl:text-3xl 2xl:text-4xl mt-[4rem]">
              Onze Missie
            </h2>
            <div className="space-y-8 mt-[2rem]">
              <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                Releafe helpt mensen grip te krijgen op hun mentale welzijn met
                praktische en bewezen tools. Onze missie? Mentale zorg
                toegankelijker, begrijpelijker en effectief maken, zodat niemand
                er alleen voor staat.
              </p>

              <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                Bij Releafe vind je een plek waar je op je eigen tempo en zonder
                oordeel aan je mentale gezondheid kunt werken. We geloven dat
                kleine stappen grote impact hebben, en we geven iedereen de kans
                om die eerste stap te zetten.
              </p>
            </div>

            <h2 className="font-sofia font-bold text-2xl xl:text-3xl 2xl:text-4xl mt-[4rem]">
              Onze visie: samen werken aan welzijn
            </h2>

            <p className="font-sofia font-light xl:text-lg 2xl:text-xl mt-[2rem]">
              Wij geloven in een wereld waarin je net zo makkelijk over je
              mentale gezondheid praat als over een gebroken been. Samen maken
              we het verschil door ervoor te zorgen dat iedereen, ongeacht hun
              situatie, toegang heeft tot de juiste ondersteuning en tools.
            </p>

            <h2 className="font-sofia font-bold text-2xl xl:text-3xl 2xl:text-4xl mt-[4rem]">
              Onze kernwaarden:
            </h2>

            <div className="space-y-8 mt-[2rem]">
              {coreValues.map((value, index) => {
                const { valueTitle, valueDescription } = value

                return (
                  <div key={index} className="space-y-4">
                    <h3 className="text-xl xl:text-2xl 2xl:text-3xl font-sofia font-bold">
                      {valueTitle}
                    </h3>
                    <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                      {valueDescription}
                    </p>
                  </div>
                )
              })}
            </div>

            <h2 className="font-sofia font-bold text-2xl xl:text-3xl 2xl:text-4xl mt-[4rem]">
              Het Team
            </h2>

            <div className="flex flex-col xl:flex-row gap-x-8 gap-y-8">
              {teamData.map((teamMember, index) => {
                return (
                  <div key={index} className="mt-[2rem]">
                    <h3 className="font-sofia font-bold xl:text-lg 2xl:text-xl text-lg pl-1 pb-4 text-center">
                      {teamMember.name}
                    </h3>
                    {/* Image Container */}
                    <div className="relative rounded-3xl overflow-hidden xl:w-[300px] xl:h-[300px] h-[300px] w-full drop-shadow-md">
                      <Image
                        className={`object-cover ${index == 0 ? 'object-[60%_50%] scale-125' : 'object-top'}`}
                        src={teamMember.photo}
                        alt={`${teamMember.name}'s Photo`}
                        fill
                      />
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-[2rem]">
              <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                Samen met Nynke Dijk, mijn mede oprichter, bouw ik aan Releafe.
                Haar betrokkenheid, zakelijke visie en expertise zijn essentieel
                om Releafe efficiënt en duurzaam te laten groeien. We werken
                nauw samen met een team van experts, ervaringsdeskundigen en
                professionals uit de regio. Door continu in gesprek te blijven
                met psychologen, therapeuten en technologie-experts, zorgen we
                ervoor dat Releafe aansluit bij de behoeften van onze gebruikers
                en gebaseerd is op de laatste wetenschappelijke inzichten. Zo
                maken we samen het verschil.
              </p>
            </div>

            <h2 className="font-sofia font-bold text-2xl xl:text-3xl 2xl:text-4xl mt-[2rem] xl:mt-[4rem]">
              Je staat er niet alleen voor
            </h2>

            <div className="space-y-8 mt-[2rem]">
              <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                Mentale gezondheid? Daar helpen we je mee! Met Releafe pak je
                stap voor stap je doelen aan. Samen zorgen we dat je lekkerder
                in je vel zit.
              </p>

              {/* Letter Final */}
              <p className="font-sofia font-light xl:text-lg 2xl:text-xl mt-4">
                Groet,{' '}
                <span className="block">
                  <Link
                    className="underline"
                    href="https://www.linkedin.com/in/jan-grobbe-b9158322/"
                    target="_blank"
                  >
                    Jan Grobbe
                  </Link>{' '}
                  en{' '}
                  <Link
                    className="underline"
                    href="https://www.linkedin.com/in/nynkedijk/"
                    target="_blank"
                  >
                    Nynke Dijk
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </section>
        {/* Workaround: scroll to top on route change */}
        <ScrollUp />
      </Layout>
    </>
  )
}

export default OverOnsPage
