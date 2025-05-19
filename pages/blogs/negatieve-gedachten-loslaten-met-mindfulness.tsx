import React from 'react'
import { CustomPortableText } from 'components/shared/CustomPortableText'
import { Header } from 'components/shared/Header'
import Layout from 'components/shared/Layout'
import ScrollUp from 'components/shared/ScrollUp'
import type { ArticlePayload, SettingsPayload } from 'types'

import Link from 'next/link'
import Image from 'next/image'

import { GetStaticProps } from 'next'
import { getClient } from 'lib/sanity.client'
import { settingsQuery } from 'lib/sanity.queries'

export interface ArticlePageProps {
  article: ArticlePayload | undefined
  settings: SettingsPayload | undefined
  preview?: boolean
}

const MindfulnessArticle4 = ({
  article,
  settings,
  preview,
}: ArticlePageProps) => {
  return (
    <>
      <Layout
        settings={settings}
        preview={preview}
        route="Mindfulness en de kracht van aandacht"
      >
        <section className="min-h-[calc(100vh-120px)] bg-[#F7F7F7] pt-14 xl:pt-0">
          <div className="max-w-[1440px] mx-auto py-14 px-8 lg:px-16 xl:px-32">
            {/* Header */}
            <h1 className="font-sofia font-bold text-3xl xl:text-4xl 2xl:text-5xl">
              Negatieve gedachten loslaten met mindfulness
            </h1>

            {/* Author */}
            <div className="flex flex-row flex-wrap lg:items-center lg:space-x-2 text-gray-600 font-sofia text-md xl:text-lg my-8">
              <span>Harrie Kolsteeg</span>
              <span className="pl-2 lg:pl-0">•</span>
              <span>Psycholoog, coach & directeur StressWise</span>
            </div>

            <div className="relative rounded-3xl overflow-hidden h-[200px] lg:h-[600px] xl:h-[700px] w-full my-8">
              <Image
                className="object-cover object-top"
                src="/images/articles/mindfulness_article_image_4.jpg"
                alt="Mindfulness Article Image 4"
                fill
              />
            </div>

            {/* Introduction */}
            <div className="mb-12 space-y-8">
              <p className="font-sofia font-light text-md xl:text-lg 2xl:text-xl">
                Soms heb je van die dagen waarop je hoofd volloopt met kritische
                stemmen. Alsof er iemand op de achtergrond voortdurend zegt: “Je
                had dit beter moeten doen.”, “Waarom overkomt mij dit altijd?”,
                “Dit gaat vast mis.” Die gedachten lijken zo overtuigend, dat je
                ze voor waar aanneemt.
              </p>
              <p className="font-sofia font-light text-md xl:text-lg 2xl:text-xl">
                Negatieve gedachten kunnen zich stevig vastzetten. Ze blijven
                malen, herhalen, zich vermommen in nieuwe vormen. Wat
                mindfulness je leert is niet om ze het zwijgen op te leggen,
                maar om er op een bewuste en milde manier mee om te gaan. En dat
                verandert alles.
              </p>
            </div>

            {/* Why Mindfulness is Important */}
            <div className="mb-12">
              <h2 className="font-sofia font-bold text-2xl xl:text-3xl mb-6">
                Wat zijn negatieve gedachten eigenlijk?
              </h2>
              <div className="mb-12 space-y-8">
                <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                  Ze komen vaak automatisch: gedachten die twijfelen aan je
                  kunnen, je waarschuwen voor wat er mis kan gaan of je streng
                  toespreken over wat je anders had moeten doen. Ze zijn meestal
                  niet rationeel, maar voortgekomen uit gewoonte en oude
                  patronen. Je geest bedoelt het goed — hij probeert je te
                  beschermen — maar de uitwerking is vaak het tegenovergestelde:
                  stress, zelfkritiek en piekergedrag.
                </p>
                <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                  Mindfulness maakt je bewust van deze patronen, zodat je ruimte
                  kunt creëren tussen jou en je gedachten.
                </p>
              </div>
            </div>

            {/* How Mindfulness Works */}
            <div className="mb-12">
              <h2 className="font-sofia font-bold text-2xl xl:text-3xl mb-6">
                Bewustzijn schept ruimte
              </h2>
              <div className="mb-12 space-y-8">
                <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                  Wat mindfulness doet, is je uitnodigen om te stoppen met
                  vechten tegen je gedachten. In plaats daarvan word je je er
                  simpelweg van bewust. Dat lijkt klein, maar is juist heel
                  krachtig. Je merkt op: “Ah, daar is die gedachte weer.” En je
                  kiest ervoor om er niet automatisch in mee te gaan.
                </p>
                <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                  Denk aan je gedachten als verkeer op een druk kruispunt.
                  Mindfulness nodigt je uit om even aan de kant te gaan staan en
                  te kijken naar wat er langskomt, zonder steeds midden op de
                  weg te gaan staan.
                </p>
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-12">
              <h2 className="font-sofia font-bold text-2xl xl:text-3xl mb-6">
                Gedachten zijn geen feiten
              </h2>
              <div className="mb-12 space-y-8">
                <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                  Een bevrijdend inzicht in mindfulness is dat gedachten slechts
                  (tijdelijke) mentale gebeurtenissen zijn. Niet per se de
                  waarheid. Niet de werkelijkheid. Ze komen op, ze gaan weer
                  weg. En jij hoeft er niets mee, behalve ze opmerken.
                </p>
                <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                  Door die ruimte ontstaat er een nieuwe innerlijke houding: je
                  kijkt met mildheid naar wat zich aandient. Je hoeft jezelf
                  niet meer te overtuigen van het tegendeel. Je hoeft alleen
                  maar te zien dat de gedachte er is, en dat jij méér bent dan
                  die gedachte.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-sofia font-bold text-2xl xl:text-3xl mb-6">
                Hoe kun je anders omgaan met negatieve gedachten?
              </h2>
              <div className="mb-12 space-y-8">
                <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                  Mindfulness biedt eenvoudige, maar effectieve manieren om je
                  anders te verhouden tot je denkpatronen:
                </p>
                <ol className="list-decimal marker:text-gray-600 pl-6 space-y-4">
                  <li className="font-sofia font-light xl:text-lg 2xl:text-xl">
                    Word je bewust van het moment
                  </li>
                  <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                    Het begint met herkennen: “Ik zit vast in mijn hoofd.”
                    Alleen al dat benoemen opent de deur naar verandering.
                  </p>
                  <li className="font-sofia font-light xl:text-lg 2xl:text-xl">
                    Breng je aandacht terug naar je lichaam
                  </li>
                  <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                    Je ademhaling, je voeten op de vloer, je houding — dat alles
                    brengt je terug in het nu. In je lijf. Weg van de verhalen
                    in je hoofd.
                  </p>
                  <li className="font-sofia font-light xl:text-lg 2xl:text-xl">
                    Benoem je gedachten zachtjes
                  </li>
                  <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                    Zeg bijvoorbeeld in jezelf: “Oordeel”, “Herhaling”, “Zorg”.
                    Je maakt er zo iets tastbaars van, zonder het groter te
                    maken dan het is.
                  </p>
                  <li className="font-sofia font-light xl:text-lg 2xl:text-xl">
                    Stel jezelf een helpende vraag
                  </li>
                  <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                    Wat zou je tegen een dierbare zeggen die zich zo voelde? En
                    kun je diezelfde vriendelijkheid ook naar jezelf brengen?
                  </p>
                  <li className="font-sofia font-light xl:text-lg 2xl:text-xl">
                    Accepteer dat het soms blijft malen
                  </li>
                  <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                    Mindfulness is geen methode om je hoofd stil te krijgen. Het
                    leert je aanwezig te zijn, ook als het stormt. Vriendelijk,
                    geduldig en zonder verzet.
                  </p>
                </ol>
              </div>
            </div>

            {/* Getting Started */}
            <div className="mb-12">
              <h2 className="font-sofia font-bold text-2xl xl:text-3xl mb-6">
                Het is een weg van oefenen
              </h2>
              <div className="mb-12 space-y-8">
                <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                  Mindfulness is een gewoonte die je ontwikkelt, een andere
                  manier van kijken die je steeds opnieuw oefent. Niet om iets
                  te bereiken, maar om op een andere manier te zijn — met
                  jezelf, met je gedachten, met het moment.
                </p>
                <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                  Op den duur merk je dat die onrustige stem in je hoofd zachter
                  wordt. Misschien niet altijd. Maar vaak genoeg om een groot
                  verschil te maken.
                </p>
              </div>
            </div>

            {/* Getting Started */}
            <div className="mb-12">
              <h2 className="font-sofia font-bold text-2xl xl:text-3xl mb-6">
                Samengevat 
              </h2>
              <div className="mb-12">
                <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                  Mindfulness helpt je om anders met negatieve gedachten om te
                  gaan: met bewustzijn, afstand en vriendelijkheid. Niet door ze
                  weg te duwen, maar door ze ruimte te geven zonder dat ze jou
                  overnemen. Je leert kijken, luisteren en loslaten — zonder
                  jezelf te verliezen. 
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-white p-8 rounded-3xl shadow-md">
              <h3 className="font-sofia font-bold text-xl xl:text-2xl mb-4">
                Gebruik de Releafe-app om het te proberen
              </h3>
              <p className="mb-6 font-sofia font-light text-md xl:text-lg">
                Begin vandaag nog met mindfulness en ontdek hoe het je leven kan
                verrijken.
              </p>
              <Link
                href="/probeer-releafe"
                className="
    relative flex justify-center items-center rounded-full overflow-hidden h-[50px] lg:h-[60px] w-full lg:w-[18rem] mt-4 
    bg-gradient-to-b from-[#c5d5bc] to-[#8fa58b] text-white font-sofia font-bold text-md xl:text-lg 
    leading-none"
              >
                {/* Pseudo-element for the hover effect */}
                <span className="absolute inset-0 bg-black opacity-0 rounded-full transition-opacity duration-300 ease-out z-0 hover:opacity-15"></span>

                {/* Text above the overlay */}
                <p className="relative z-10 pointer-events-none">
                  Probeer Releafe
                </p>
              </Link>
            </div>

            {/* Additional Resources */}
            <div className="mt-12 text-md xl:text-lg text-gray-600">
              <p className="font-sofia font-light">
                Lees deze en andere artikelen over mindfulness ook op de{' '}
                <Link
                  href="https://www.centrumvoormindfulness.nl/kennisbank"
                  target="_blank"
                  className="text-[#96a58d] hover:underline"
                >
                  kennisbank van Centrum voor Mindfulness Nederland
                </Link>
              </p>
              <p className="mt-2 font-sofia font-light">
                Of bezoek de website van{' '}
                <Link
                  href="https://www.stresswise.nl"
                  target="_blank"
                  className="text-[#96a58d] hover:underline"
                >
                  StressWise
                </Link>{' '}
                voor waardengedreven leven en werken
              </p>
            </div>
          </div>
        </section>
        <ScrollUp />
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const client = getClient()
  const settings = await client.fetch<SettingsPayload | null>(settingsQuery)

  return {
    props: {
      settings: settings ?? {},
    },
    revalidate: 10,
  }
}

export default MindfulnessArticle4
