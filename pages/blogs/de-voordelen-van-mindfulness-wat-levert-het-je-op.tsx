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

const MindfulnessArticle2 = ({
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
              De voordelen van mindfulness: wat levert het je op?
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
                src="/images/articles/mindfulness_article_image_2.jpg"
                alt="Mindfulness Article Image 2"
                fill
              />
            </div>

            {/* Introduction */}
            <div className="mb-12">
              <p className="font-sofia font-light text-md xl:text-lg 2xl:text-xl">
                Mindfulness is niet ingewikkeld. Het vraagt geen nieuwe
                overtuigingen, geen spectaculaire veranderingen. Wat het vraagt,
                is aandacht. Meer niet. Wat het oplevert, is ruimte. Ruimte om
                te voelen, te kiezen, te ademen. Maar wat zijn nu precies de
                voordelen van mindfulness? Wat merk je als je deze manier van
                leven toelaat in je dagelijks bestaan?
              </p>
            </div>

            {/* Why Mindfulness is Important */}
            <div className="mb-12">
              <h2 className="font-sofia font-bold text-2xl xl:text-3xl mb-6">
                Mindfulness helpt je om bewust aanwezig te zijn
              </h2>
              <div className="mb-12 space-y-8">
                <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                  We leven een groot deel van de dag op de automatische piloot.
                  Je doet de dingen die je doet omdat je ze al vaak zo hebt
                  gedaan. Je eet terwijl je denkt. Je luistert, maar je bent al
                  bezig met je antwoord. Je zit, maar je hoofd is ergens anders.
                  Mindfulness helpt je om weer volop aanwezig te zijn in je
                  eigen leven.
                </p>
                <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                  Door je aandacht te richten op wat er nu gebeurt, merk je
                  sneller op hoe het werkelijk met je is. Dat kan confronterend
                  zijn, maar het is ook bevrijdend. Je hoeft niet meteen iets te
                  veranderen. Je hoeft alleen te zien wat er is. Dat alleen al
                  maakt verschil.
                </p>
              </div>
            </div>

            {/* How Mindfulness Works */}
            <div className="mb-12">
              <h2 className="font-sofia font-bold text-2xl xl:text-3xl mb-6">
                Mindfulness vermindert stress
              </h2>
              <div className="mb-12 space-y-8">
                <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                  Eén van de meest genoemde voordelen van mindfulness is
                  stressreductie. Door met aandacht in het moment te zijn, ben
                  je minder bezig met wat er nog moet of wat er eerder is
                  misgegaan. Je leert stresssignalen eerder herkennen en je
                  bouwt minder spanning op.
                </p>
                <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                  Je hoeft jezelf niet te forceren tot rust. Mindfulness nodigt
                  uit tot vertragen, tot voelen, tot zijn. En juist daarin
                  ontstaat ontspanning. Niet door weg te vluchten van wat
                  moeilijk is, maar door erbij te blijven — op een zachte
                  manier.
                </p>
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-12">
              <h2 className="font-sofia font-bold text-2xl xl:text-3xl mb-6">
                Mindfulness maakt ruimte tussen prikkel en reactie
              </h2>
              <div className="mb-12 space-y-8">
                <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                  Vaak reageren we automatisch. Je wordt door iets getriggerd en
                  voor je het weet zit je in een oude reactie. Boosheid,
                  terugtrekken, overanalyseren. Mindfulness creëert dan ruimte.
                  Tussen dat wat er gebeurt en hoe jij daarop reageert.
                </p>
                <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                  Je leert opmerken wat je voelt. Niet om het te onderdrukken,
                  maar om het te herkennen. En vanuit dat herkennen ontstaat een
                  keuze: wil ik op dezelfde manier reageren als altijd, of is er
                  iets anders mogelijk?
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-sofia font-bold text-2xl xl:text-3xl mb-6">
                Mindfulness helpt je om anders met gedachten om te gaan
              </h2>
              <div className="mb-12 space-y-8">
                <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                  Gedachten zijn er altijd. Sommige zijn helpend, andere
                  gedachten maken je onrustig of somber. Mindfulness leert je om
                  gedachten te bekijken als gebeurtenissen die plaatsvinden in
                  je hoofd. Gedachten zijn geen feiten. Je hoeft er dus niet
                  direct in mee.
                </p>
                <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                  Dat betekent niet dat je stopt met denken. Maar je ontwikkelt
                  wel een ander soort relatie met je gedachten. Je ziet ze komen
                  en gaan. Je merkt ze op, en je laat ze weer gaan. Zo ontstaat
                  er lucht, en soms zelfs stilte ‘tussen de regels door’.
                </p>
              </div>
            </div>

            {/* Getting Started */}
            <div className="mb-12">
              <h2 className="font-sofia font-bold text-2xl xl:text-3xl mb-6">
                Mindfulness vergroot je veerkracht
              </h2>
              <div className="mb=12 space-y-8">
                <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                  Mindfulness maakt je niet ongevoelig voor tegenslag, maar het
                  helpt je wel om er anders mee om te gaan. Je bouwt meer
                  draagkracht op, simpelweg omdat je niet voortdurend hoeft te
                  vechten tegen wat er is. Je leert erbij blijven — ook bij het
                  ongemak, ook bij verdriet.
                </p>
                <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                  Niet dat alles ineens makkelijker wordt. Maar wel dat je
                  jezelf minder in de weg zit. Je hoeft niet alles te fixen.
                  Soms is het genoeg om iets toe te laten, en te ademen.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-sofia font-bold text-2xl xl:text-3xl mb-6">
                Mindfulness helpt je om meer te genieten
              </h2>
              <div className="mb=12 space-y-8">
                <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                  Juist doordat je meer aanwezig bent, vallen kleine dingen weer
                  op. De geur van verse koffie. Het ritme van je ademhaling. Een
                  blik die je raakt. Een stilte die je niet meteen hoeft op te
                  vullen.
                </p>
                <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                  Mindfulness brengt je zo terug bij de eenvoud. Je hoeft niet
                  naar iets groots te streven. Je hoeft alleen maar opnieuw te
                  zien wat er al is. En soms is dat genoeg om even te kunnen
                  glimlachen en je lichter te voelen.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-sofia font-bold text-2xl xl:text-3xl mb-6">
                Wat levert mindfulness je op?
              </h2>
              <div className="mb=12 space-y-8">
                <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                  Mensen die mindfulness beoefenen noemen vaak:
                </p>
                <ul className="list-disc marker:text-gray-300 pl-6 space-y-4">
                  <li className="font-sofia font-light xl:text-lg 2xl:text-xl">
                    Meer innerlijke rust
                  </li>
                  <li className="font-sofia font-light xl:text-lg 2xl:text-xl">
                    Betere concentratie
                  </li>
                  <li className="font-sofia font-light xl:text-lg 2xl:text-xl">
                    Meer geduld
                  </li>
                  <li className="font-sofia font-light xl:text-lg 2xl:text-xl">
                    Minder piekeren
                  </li>
                  <li className="font-sofia font-light xl:text-lg 2xl:text-xl">
                    Groter zelfinzicht
                  </li>
                  <li className="font-sofia font-light xl:text-lg 2xl:text-xl">
                    Meer compassie, naar zichzelf en anderen
                  </li>
                </ul>
                <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                  Wat het jou precies oplevert, weet je pas als je het probeert.
                  De verandering is vaak niet spectaculair, maar wel voelbaar.
                  Minder reageren, meer aanwezig zijn. Minder moeten, meer
                  mogen.
                </p>
              </div>
            </div>

            {/* Getting Started */}
            <div className="mb-12">
              <h2 className="font-sofia font-bold text-2xl xl:text-3xl mb-6">
                Samengevat 
              </h2>
              <div className="mb=12">
                <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                  De voordelen van mindfulness zijn zowel praktisch als
                  persoonlijk. Je ervaart meer rust, meer ruimte en meer
                  keuzevrijheid in hoe je omgaat met jezelf en met het leven.
                  Niet door alles onder controle te krijgen, maar juist door die
                  controle een beetje los te laten. En te vertrouwen op iets
                  eenvoudigs en krachtigs. Aandacht.
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

export default MindfulnessArticle2
