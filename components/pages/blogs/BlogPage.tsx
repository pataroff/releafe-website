import React from 'react'
import { CustomPortableText } from 'components/shared/CustomPortableText'
import { Header } from 'components/shared/Header'
import Layout from 'components/shared/Layout'
import ScrollUp from 'components/shared/ScrollUp'
import type { ArticlePayload, SettingsPayload } from 'types'

import Link from 'next/link'
import Image from 'next/image'

export interface ArticlePageProps {
  article: ArticlePayload | undefined
  settings: SettingsPayload | undefined
  preview?: boolean
}

const BlogPage = ({ article, settings, preview }: ArticlePageProps) => {
  return (
    <>
      <Layout settings={settings} preview={preview} route="Wat is mindfulness?">
        <section className="min-h-[calc(100vh-120px)] bg-[#F7F7F7] pt-14 xl:pt-0">
          <div className="max-w-5xl mx-auto px-8 py-14">
            {/* Article Header Container */}
            <div>
              {/* Header */}
              <h1 className="font-sofia font-bold text-3xl xl:text-4xl 2xl:text-5xl">
                Wat is mindfulness en hoe werkt het precies?
              </h1>

              {/* Author */}
              <div className="flex flex-row flex-wrap xl:items-center xl:space-x-2 text-gray-600 font-sofia text-md xl:text-lg my-8">
                <span>Harrie Kolsteeg</span>
                <span className="pl-2 xl:pl-0">•</span>
                <span>Psycholoog, coach & directeur StressWise</span>
              </div>

              <div className="relative rounded-3xl overflow-hidden h-[250px] xl:h-[500px] w-full my-8">
                <Image
                  src="/images/articles/mindfulness_article_image_1.jpg"
                  alt="Mindfulness Article Image 1"
                  fill
                />
              </div>
            </div>

            {/* Introduction */}
            <div className="mb-12 space-y-8">
              <p className="font-sofia font-light text-md xl:text-lg 2xl:text-xl">
                Mindfulness is simpel gezegd: met volledige aandacht aanwezig
                zijn in het huidige moment. Zonder te oordelen, zonder iets te
                willen veranderen. Het is de kunst om bewust te zijn van wat er
                nú gebeurt — in je lichaam, je gedachten, je omgeving — zonder
                meteen te reageren.
              </p>
              <p className="font-sofia font-light text-md xl:text-lg 2xl:text-xl">
                Je zou kunnen zeggen dat mindfulness een manier van kijken is.
                Kijken zonder oordeel, zonder haast. Een open houding waarmee je
                het leven zoals het is tegemoet treedt — niet om het beter te
                maken, maar om het werkelijk te ervaren.
              </p>
            </div>

            {/* Why Mindfulness is Important */}
            <div className="mb-12">
              <h2 className="font-sofia font-bold text-2xl xl:text-3xl mb-6">
                Waarom mindfulness in het dagelijks leven belangrijk is
              </h2>
              <div className="mb-12 space-y-8">
                <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                  Veel mensen leven grotendeels op de automatische piloot. Je
                  drinkt koffie terwijl je denkt aan je to-do-lijst. Je rijdt
                  naar huis zonder te weten hoe je daar bent gekomen. Je eet,
                  luistert, praat — maar je bent er niet echt bij. Je aandacht
                  is vaak al verder dan waar je lichaam zich bevindt.
                </p>
                <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                  Mindfulness helpt je om wakkerder te leven. Aandachtiger.
                  Bewuster. Je wordt uitgenodigd om je aandacht terug te brengen
                  naar het nu. Niet omdat het nu altijd prettig is, maar omdat
                  het het enige moment is waarin het leven zich werkelijk
                  afspeelt.
                </p>
              </div>
            </div>

            {/* How Mindfulness Works */}
            <div className="mb-12">
              <h2 className="font-sofia font-bold text-2xl xl:text-3xl mb-6">
                Hoe werkt mindfulness?
              </h2>
              <div className="mb-12 space-y-8">
                <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                  Mindfulness werkt door je aandacht te trainen. Net zoals je
                  spieren sterker worden door te trainen, kun je ook je aandacht
                  trainen om vaker in het moment te blijven. Dat doe je via
                  meditatie-oefeningen, maar ook door aandachtig aanwezig te
                  zijn bij gewone handelingen in het dagelijks leven.
                </p>
                <ul className="list-disc marker:text-gray-300 pl-6 space-y-4">
                  <li className="font-sofia font-light xl:text-lg 2xl:text-xl">
                    Je zit op een stoel en volgt met aandacht je ademhaling.
                  </li>
                  <li className="font-sofia font-light xl:text-lg 2xl:text-xl">
                    Je merkt gedachten op, maar je laat ze weer gaan.
                  </li>
                  <li className="font-sofia font-light xl:text-lg 2xl:text-xl">
                    Je voelt dat je onrustig bent, ongemak ervaart of juist
                    ontspanning — en je beseft dat dat allemaal oké is.
                  </li>
                </ul>
                <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                  Mindfulness draait om ervaren, zonder oordelen, zonder het
                  eindeloze commentaar dat je hoofd meestal levert. Je hoeft
                  niet steeds iets van jezelf te vinden. Je hoeft niet te
                  verbeteren, op te lossen of te presteren. Je mag simpelweg
                  aanwezig zijn.
                </p>
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-12">
              <h2 className="font-sofia font-bold text-2xl xl:text-3xl mb-6">
                Wat doet mindfulness met je?
              </h2>
              <div className="mb-12 space-y-8">
                <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                  Steeds meer onderzoek toont aan dat mindfulness een positief
                  effect heeft op lichaam en geest. Enkele veelgenoemde
                  voordelen:
                </p>
                <ul className="list-disc marker:text-gray-300 pl-6 space-y-4">
                  <li className="font-sofia font-light xl:text-lg 2xl:text-xl">
                    Verminderen van stress en piekergedachten
                  </li>
                  <li className="font-sofia font-light xl:text-lg 2xl:text-xl">
                    Verbeteren van focus en concentratie
                  </li>
                  <li className="font-sofia font-light xl:text-lg 2xl:text-xl">
                    Beter omgaan met emoties
                  </li>
                  <li className="font-sofia font-light xl:text-lg 2xl:text-xl">
                    Meer rust en ontspanning ervaren
                  </li>
                  <li className="font-sofia font-light xl:text-lg 2xl:text-xl">
                    Vergroten van zelfinzicht en mentale veerkracht
                  </li>
                </ul>
              </div>
            </div>

            {/* Is Mindfulness for Everyone */}
            <div className="mb-12">
              <h2 className="font-sofia font-bold text-2xl xl:text-3xl mb-6">
                Is mindfulness voor iedereen?
              </h2>
              <div className="mb-12 space-y-8">
                <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                  In principe wel. Mindfulness is niet zweverig, niet religieus,
                  niet elitair. Het is een mentale vaardigheid die iedereen kan
                  leren — net als leren fietsen of een taal leren. Je hoeft er
                  niet flexibel, spiritueel of bijzonder voor te zijn.
                </p>
                <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                  Of je nu jong bent of oud, druk of juist zoekend naar rust:
                  mindfulness kan iets voor je betekenen. Het maakt niet uit of
                  je rustig kunt zitten of snel afgeleid bent. Juist als je
                  merkt dat je vaak in je hoofd zit of geleefd wordt door je
                  agenda, kan mindfulness je helpen om weer contact te maken met
                  jezelf.
                </p>
              </div>
            </div>

            {/* Getting Started */}
            <div className="mb-12">
              <h2 className="font-sofia font-bold text-2xl xl:text-3xl mb-6">
                Hoe begin je met mindfulness?
              </h2>
              <div className="mb=12 space-y-8">
                <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                  Een goede manier om te beginnen is een training volgen, zoals
                  de 8-weekse MBSR-training (Mindfulness-Based Stress
                  Reduction). Daar leer je stap voor stap hoe je mindfulness
                  kunt toepassen in je eigen leven — op een praktische,
                  toegankelijke en verdiepende manier.
                </p>
                <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                  Je leert verschillende meditatievormen, aandachtsoefeningen en
                  manieren om met stressvolle situaties om te gaan. Het is een
                  bewezen methode die wereldwijd wordt toegepast.
                </p>
                <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                  Liever zelfstandig starten? Er zijn ook goede boeken, apps en
                  online oefeningen beschikbaar die je op weg helpen. Belangrijk
                  is dat je klein begint: vijf minuten per dag kan al een
                  verschil maken. En misschien is dat het mooiste van
                  mindfulness: je kunt er elk moment opnieuw mee beginnen.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-white p-8 rounded-3xl drop-shadow-md">
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

export default BlogPage
