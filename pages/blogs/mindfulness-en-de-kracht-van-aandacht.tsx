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

const MindfulnessArticle3 = ({
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
              Mindfulness en de kracht van aandacht
            </h1>

            {/* Author */}
            <div className="flex flex-row flex-wrap lg:items-center lg:space-x-2 text-gray-600 font-sofia text-md xl:text-lg my-8">
              <span>Harrie Kolsteeg</span>
              <span className="pl-2 lg:pl-0">•</span>
              <span>Psycholoog, coach & directeur StressWise</span>
            </div>

            <div className="relative rounded-3xl overflow-hidden h-[200px] lg:h-[600px] xl:h-[700px] w-full my-8">
              <Image
                src="/images/articles/mindfulness_article_image_3.jpg"
                alt="Mindfulness Article Image 3"
                fill
              />
            </div>

            {/* Introduction */}
            <div className="mb-12">
              <p className="font-sofia font-light text-md xl:text-lg 2xl:text-xl">
                We worden voortdurend afgeleid, je zou kunnen zeggen dat
                aandacht een schaars goed is geworden. En dat terwijl aandacht
                precies datgene wat jou verbindt met het leven zoals het
                werkelijk is. Mindfulness helpt je om je aandacht te trainen én
                te richten. Hieronder lees je wat aandacht precies is, waarom
                het zo krachtig is en hoe mindfulness je kan helpen om met meer
                aandacht te leven.
              </p>
            </div>

            {/* Why Mindfulness is Important */}
            <div className="mb-12">
              <h2 className="font-sofia font-bold text-2xl xl:text-3xl mb-6">
                Wat is aandacht?
              </h2>
              <div className="mb-12 space-y-8">
                <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                  Aandacht zorgt ervoor dat je bewust aanwezig bent bij wat er
                  zich van moment tot moment afspeelt. Het is iets natuurlijks,
                  iets dat iedereen kan genereren. De een misschien meer dan de
                  ander, maar iedereen kan het. Je aandacht kan naar buiten
                  gericht zijn (horen, voelen, zien) of naar binnen (gedachten,
                  gevoelens, lichaam).
                </p>
                <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                  We zijn gewend razendsnel te schakelen tussen indrukken, taken
                  en gedachten. We zijn fysiek aanwezig, maar mentaal ergens
                  anders. Mindfulness nodigt je uit om aandachtig aanwezig te
                  zijn, met openheid, nieuwsgierigheid en - zoveel als mogelijk
                  - zonder oordeel.
                </p>
              </div>
            </div>

            {/* How Mindfulness Works */}
            <div className="mb-12">
              <h2 className="font-sofia font-bold text-2xl xl:text-3xl mb-6">
                De kracht van gerichte aandacht
              </h2>
              <div className="mb-12 space-y-8">
                <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                  Aandacht is niet neutraal — het heeft richting en invloed.
                  Waar je aandacht is, daar ben jij. Wat je aandacht geeft,
                  groeit. Dat maakt aandacht een krachtig instrument in het
                  dagelijks leven.
                </p>
                <ul className="list-disc marker:text-gray-300 pl-6 space-y-4">
                  <li className="font-sofia font-light xl:text-lg 2xl:text-xl">
                    Aandacht brengt helderheid. Door met aandacht waar te nemen,
                    zie je dingen zoals ze werkelijk zijn.
                  </li>
                  <li className="font-sofia font-light xl:text-lg 2xl:text-xl">
                    Aandacht creëert verbinding. Door echt aanwezig te zijn bij
                    een ander, ervaar je meer diepgang in relaties.
                  </li>
                  <li className="font-sofia font-light xl:text-lg 2xl:text-xl">
                    Aandacht opent ruimte. In plaats van reactief te zijn,
                    ontstaat er ruimte voor bewuste keuzes.
                  </li>
                  <li className="font-sofia font-light xl:text-lg 2xl:text-xl">
                    Aandacht kalmeert. Door je aandacht te richten op
                    bijvoorbeeld je ademhaling, komt je zenuwstelsel tot rust.
                  </li>
                </ul>
                <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                  Kortom, aandacht geeft richting aan je ervaring. En dat maakt
                  het tot een sleutelvaardigheid voor bewust leven.
                </p>
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-12">
              <h2 className="font-sofia font-bold text-2xl xl:text-3xl mb-6">
                Hoe helpt mindfulness bij het trainen van aandacht?
              </h2>
              <div className="mb-12 space-y-8">
                <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                  Mindfulness is in essentie aandachtstraining. Je oefent om
                  bewust op te merken waar je aandacht is. En om die aandacht
                  (steeds weer) vriendelijk terug te brengen wanneer je bent
                  afgeleid.
                </p>
                <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                  Door mindfulness oefeningen, zoals de ademhalingsoefening, de
                  bodyscan of mindful wandelen, te doen, train je je
                  ‘aandachtsspier’. Je leert opmerken wanneer je afdwaalt,
                  zonder jezelf te veroordelen, en keert steeds weer terug naar
                  het hier en nu. Dat lijkt eenvoudig, maar het is een vrij
                  diepgaand proces van oefenen, loslaten en weer beginnen.
                </p>
                <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                  Regelmatige mindfulnessbeoefening leidt tot:
                </p>
                <ul className="list-disc marker:text-gray-300 pl-6 space-y-4">
                  <li className="font-sofia font-light xl:text-lg 2xl:text-xl">
                    meer focus en concentratie,
                  </li>
                  <li className="font-sofia font-light xl:text-lg 2xl:text-xl">
                    betere emotieregulatie,
                  </li>
                  <li className="font-sofia font-light xl:text-lg 2xl:text-xl">
                    bewustere keuzes in je dagelijks handelen,
                  </li>
                  <li className="font-sofia font-light xl:text-lg 2xl:text-xl">
                    meer rust en stabiliteit in je geest.
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-sofia font-bold text-2xl xl:text-3xl mb-6">
                Aandacht in het dagelijks leven
              </h2>
              <div className="mb-12 space-y-8">
                <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                  Je hoeft niet op een kussen te zitten om mindfulness te
                  beoefenen. Ook in alledaagse momenten kun je de kracht van
                  aandacht toepassen:
                </p>
                <ul className="list-disc marker:text-gray-300 pl-6 space-y-4">
                  <li className="font-sofia font-light xl:text-lg 2xl:text-xl">
                    Als je eet: proef écht wat je eet.
                  </li>
                  <li className="font-sofia font-light xl:text-lg 2xl:text-xl">
                    Als je luistert: wees aanwezig bij wat de ander zegt, zonder
                    alvast een antwoord te formuleren.
                  </li>
                  <li className="font-sofia font-light xl:text-lg 2xl:text-xl">
                    Als je werkt: doe één ding tegelijk, met volledige aandacht.
                  </li>
                  <li className="font-sofia font-light xl:text-lg 2xl:text-xl">
                    Als je wandelt: voel je voeten de grond raken, adem de lucht
                    in, kijk bewust om je heen.
                  </li>
                </ul>
                <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                  Deze momenten van bewuste aandacht maken je dag niet alleen
                  rustiger en helderder, maar ook rijker en betekenisvoller.
                </p>
              </div>
            </div>

            {/* Getting Started */}
            <div className="mb-12">
              <h2 className="font-sofia font-bold text-2xl xl:text-3xl mb-6">
                Aandacht en acceptatie
              </h2>
              <div className="mb=12">
                <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                  De kracht van aandacht ligt ook in haar vermogen om ruimte te
                  maken voor wat er is. Door aandachtig te zijn bij je ervaring,
                  leer je deze te accepteren, ook als die ongemakkelijk is. Je
                  hoeft niet meteen iets te veranderen. Alleen maar kijken,
                  voelen, aanwezig zijn. Dat is vaak al genoeg om iets in
                  beweging te brengen.
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
                  Aandacht is de kern van mindfulness. Het is de poort naar
                  aanwezigheid, verbinding, helderheid en innerlijke rust. In
                  ons drukke dagelijkse bestaan met al zijn afleidingen is
                  aandacht een noodzaak geworden. Door mindfulness te beoefenen
                  train je deze vaardigheid. Niet zozeer om ‘beter te worden’ in
                  iets, maar om ten volle aanwezig te zijn in je eigen leven.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-white p-8 rounded-3xl drop-shadow-md transform-gpu">
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

export default MindfulnessArticle3
