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
    valueTitle: 'Vertrouwelijkheid',
    valueDescription:
      'Jouw mentale welzijn is iets persoonlijks en verdient de hoogste mate van privacy en veiligheid.',
  },
  {
    valueTitle: 'Innovatie',
    valueDescription:
      'Wij combineren technologie en psychologie om welzijn te verbeteren en blijven continu ontwikkelen om de beste ondersteuning te bieden.',
  },
  {
    valueTitle: 'Samenwerking',
    valueDescription:
      'We geloven dat de beste resultaten ontstaan door te luisteren naar gebruikers en samen te werken met experts op het gebied van psychologie en technologie.',
  },
  {
    valueTitle: 'Duurzame groei',
    valueDescription:
      'Onze aanpak richt zich niet alleen op korte termijn verlichting, maar op langdurige mentale veerkracht en welzijn. We streven daarnaast ook naar duurzame samenwerkingen met onze partners.',
  },
  {
    valueTitle: 'Empathie',
    valueDescription:
      'We begrijpen wat onze gebruikers doormaken en ontwikkelen Releafe met hun behoeften en ervaringen in gedachten.',
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
                angst- en paniekklachten. Intensieve behandeltrajecten,
                medicatie en tijd hebben er uiteindelijk voor gezorgd dat ik
                minder klachten ervaar en mijn leven kan leiden op een manier
                die ik zelf kies, in plaats van gestuurd te worden door angst.
              </p>

              <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                Terugkijkend op deze periode miste ik een laagdrempelige manier
                om mezelf te ondersteunen in het omgaan met deze klachten. Een
                plek waar ik inzichten, oefeningen en begeleiding kon vinden
                zonder overweldigd te raken. Ik zocht naar manieren om beter om
                te gaan met mijn angsten en paniek, probeerde therapie,
                ontspanningstechnieken en zelfhulpboeken, maar miste een plek
                waar alles samenkwam. De tools en inzichten die mij hielpen,
                waren verspreid over verschillende methoden en bronnen.
              </p>

              <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                Dat zette me aan het denken: wat als er een app bestond die niet
                alleen inzichten biedt, maar ook helpt om dagelijkse gewoonten
                op te bouwen? Zo ontstond Releafe. Een app die je ondersteunt in
                het omgaan met mentale klachten, zonder dat je alles zelf hoeft
                uit te zoeken. Een app die ik zelf had willen hebben toen ik het
                nodig had. Releafe is gemaakt door iemand die de uitdagingen van
                binnenuit kent – voor mensen die hiermee worstelen.
              </p>

              <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                Naast mijn persoonlijke ervaring heb ik een achtergrond in
                bedrijfskunde en adviseer ik organisaties in de rol van Business
                Controller. Hierdoor combineer ik mijn kennis over mentale
                gezondheid met een zakelijke, strategische aanpak. Mijn doel is
                om met Releafe niet alleen een impactvolle app te ontwikkelen,
                maar ook een betrouwbare en innovatieve organisatie op te bouwen
                die echt het verschil maakt.
              </p>
            </div>

            {/* Our Mission */}
            <h2 className="font-sofia font-bold text-2xl xl:text-3xl 2xl:text-4xl mt-[4rem]">
              Onze Missie
            </h2>
            <div className="space-y-8 mt-[2rem]">
              <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                Releafe helpt mensen grip te krijgen op hun mentale welzijn door
                middel van praktische, bewezen tools. Onze missie is om mentale
                zorg toegankelijker, begrijpelijker en effectiever te maken,
                zodat niemand zich alleen hoeft te voelen in zijn of haar
                strijd.
              </p>

              <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                Met Releafe bieden we een plek waar je dagelijks kunt werken aan
                je mentale gezondheid, op je eigen tempo en zonder oordeel. We
                geloven dat kleine stappen leiden tot grote veranderingen, en we
                willen iedereen de kans geven om die stap te zetten.
              </p>
            </div>

            <h2 className="font-sofia font-bold text-2xl xl:text-3xl 2xl:text-4xl mt-[4rem]">
              Onze Visie: Samen Werken aan Welzijn
            </h2>

            <p className="font-sofia font-light xl:text-lg 2xl:text-xl mt-[2rem]">
              Onze visie is een wereld waarin mentale gezondheid net zo
              vanzelfsprekend wordt als fysieke gezondheid. We willen dat
              iedereen, ongeacht hun situatie, toegang heeft tot de juiste tools
              om hun welzijn te verbeteren. Dit kunnen we alleen samen
              realiseren.
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

            {/* Jan's Photo */}
            <div className="mt-[2rem]">
              <h3 className="font-sofia font-bold xl:text-lg 2xl:text-xl text-lg pl-1 pb-4">
                Jan Grobbe
              </h3>
              <Image
                className="rounded-3xl overflow-hidden xl:w-[500px] xl:h-[400px] h-[300px] w-full object-cover"
                src={'/images/Photo_Jan.jpeg'}
                alt="Photo Jan"
                width={1066}
                height={1600}
              />
            </div>

            <div className="space-y-8 mt-[2rem]">
              <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                Nynke Dijk is samen met mij (co-)founder van Releafe. Haar
                betrokkenheid, visie en uitgebreide kennis en ervaring op
                bedrijfskundiggebied dragen bij aan de ontwikkeling en groei van
                Releafe als duurzame organisatie waarbij we onze doelen zo
                efficiënt en effectief mogelijk behalen.
              </p>

              <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                Wij werken samen met een team van experts, ervaringsdeskundigen
                en professionals uit de regio. We geloven in de kracht van
                samenwerking en blijven continu in gesprek met psychologen,
                therapeuten, belanghebbende partijen, onderwijs- en
                onderzoeksinstellingen en technologie-experts om Releafe te
                verbeteren en uit te breiden. Door deze samenwerkingen zorgen we
                ervoor dat de app aansluit bij de behoeften van onze gebruikers
                en de laatste wetenschappelijke inzichten.
              </p>
            </div>

            <h2 className="font-sofia font-bold text-2xl xl:text-3xl 2xl:text-4xl mt-[4rem]">
              Je Staat Er Niet Alleen Voor
            </h2>

            <div className="space-y-8 mt-[2rem]">
              <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                Releafe is er om jou te helpen jouw doelen op het gebied van
                mentale gezondheid te realiseren, stap voor stap. Je bent niet
                alleen. Samen laten we jouw welzijn bloeien.
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
