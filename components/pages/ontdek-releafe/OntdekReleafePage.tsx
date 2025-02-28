import React, { useState } from 'react'

import Layout from 'components/shared/Layout'
import ScrollUp from 'components/shared/ScrollUp'

import Link from 'next/link'
import Image from 'next/image'

import HomePageHead from '../home/HomePageHead'

const featuresData = [
  {
    title: 'Dagboek',
    goalText: 'Krijg inzicht krijgen in jouw huidige mentale welzijn.',
    descriptionText:
      'Het dagboek biedt een eenvoudige manier om dagelijks je welzijn te scoren op onderwerpen zoals stemming, zorgen, stress, energie, focus en slaap. Je kunt optioneel extra informatie toevoegen om je dag te beschrijven. Dit helpt je om patronen te herkennen en beter te begrijpen hoe verschillende factoren je welzijn beïnvloeden.',
    tipText: '',
    ctaText: 'Begin met je dagboek',
    image: '/images/ontdek_releafe/dagboek_perspective_image.png',
  },
  {
    title: 'Welzijnsoverzicht',
    goalText: 'Bekijk je vooruitgang en ontdek patronen.',
    descriptionText:
      'Het welzijnsoverzicht is gekoppeld aan het dagboek en presenteert jouw ingevoerde waarden in een grafiek. Je kunt specifieke onderwerpen en tijdsperiodes selecteren om een volledig beeld te krijgen van je welzijn over de tijd. Dit overzicht helpt je om je voortgang te bekijken, patronen te herkennen en te bepalen waar jij aan wil werken.',
    tipText: '',
    ctaText: 'Bekijk je welzijnsoverzicht',
    image: '/images/ontdek_releafe/wellbeing_portrait_image.png',
  },
  {
    title: 'Persoonlijke doelen',
    goalText: 'Stimuleer positieve veranderingen in je leven.',
    descriptionText:
      'Stel persoonlijke doelen die bijdragen aan je mentale gezondheid, zoals "meer bewegen" of "dagelijks mediteren." Wanneer je een doel behaalt, ontvang je beloningen in de app. Deze speelse aanpak motiveert je om gezonde gewoontes, die je mentale gezondheid verbeteren, te ontwikkelen en vol te houden.',
    tipText: '',
    ctaText: 'Stel je eerste doel in',
    image: '/images/ontdek_releafe/personal_goals_perspective_image.png',
  },
  {
    title: 'Zorgenbakje',
    goalText: 'Geef je zorgen een plek en creëer ruimte in je hoofd.',
    descriptionText:
      'In het zorgenbakje kun je zorgen opschrijven en symbolisch “opbergen.” Dit helpt om afstand te nemen van negatieve gedachten. Je hebt altijd de optie om deze zorgen later terug te lezen en er actief mee aan de slag te gaan. Dat doe je bijvoorbeeld door ze te reframen.',
    tipText: '',
    ctaText: 'Schrijf je zorgen op',
    image: '/images/ontdek_releafe/worry_box_portrait_image.png',
  },
  {
    title: 'Reframen',
    goalText:
      'Verander negatieve gedachten in helpende en realistische gedachten.',
    descriptionText:
      'De reframing-oefening helpt je om je zorgen vanuit een andere invalshoek te bekijken. Door stapsgewijs je gedachten te herformuleren helpt deze oefening je om meer positieve en realistische gedachten te ontdekken. Hierdoor krijg je meer grip op je emoties en situaties waardoor je je rustiger en zelfverzekerder voelt.',
    tipText: '',
    ctaText: 'Probeer een reframing-oefening',
    image: '/images/ontdek_releafe/reframing_perspective_image.png',
  },
  {
    title: 'Bericht aan jezelf',
    goalText: 'Help jezelf tijdens moeilijke momenten.',
    descriptionText:
      'Schrijf of neem een bericht op voor jezelf, gericht op momenten waarop je het moeilijk hebt. Deze berichten kun je later teruglezen of beluisteren, waardoor je jezelf een positieve herinnering of motivatie geeft, precies wanneer jij dat nodig hebt.',
    tipText:
      'Je kan ook je partner, een vriend of familielid waar je steun aan hebt vragen een bericht voor je op te nemen.',
    ctaText: 'Schrijf of neem een bericht op',
    image: '/images/ontdek_releafe/notes_to_self_portrait_image.png',
  },
  {
    title: 'Ontspanningsoefeningen',
    goalText: 'Verminder stress en vind rust.',
    descriptionText:
      'Releafe biedt een uitgebreid aanbod van meditatie- en mindfulnessvideo’s en -audio’s. Deze oefeningen zijn door professionals ontworpen om je te helpen ontspannen en meer in het moment te leven. Kies een oefening die past bij je stemming en behoefte.',
    tipText: '',
    ctaText: 'Ontdek ontspanningsoefeningen',
    image: '/images/ontdek_releafe/exercises_perspective_image.png',
  },
  {
    title: 'Bonsaiboom',
    goalText: 'Jou motiveren om met je mentale welzijn bezig te blijven.',
    descriptionText:
      'Voor elke stap die je zet binnen de app – of het nu het bijhouden van je dagboek is, het behalen van een doel of een moment van ontspanning – verdien je beloningen waarmee je jouw bonsai kunt laten groeien en bloeien. Zo wordt zelfzorg niet alleen waardevol, maar ook leuk en motiverend.',
    tipText: '',
    ctaText: 'Ontdek de Bonsaiboom',
    image: '/images/ontdek_releafe/bonsai_tree_portrait_image.png',
  },
]

const OntdekReleafePage = ({ settings, page }) => {
  return (
    <>
      <HomePageHead page={page} settings={settings} />
      <Layout settings={settings} route={'Ontdek Releafe'}>
        {/* Features Section */}
        <section className="min-h-[calc(100vh-120px)] bg-[#F7F7F7] pt-[5rem] xl:flex xl:pt-0 ">
          {/* Features Box */}
          <div className="bg-white rounded-3xl shadow-xl my-[2rem] xl:my-[4rem] mx-4 xl:mx-32 2xl:mx-64 pt-14 py-8">
            <div className="px-5 xl:px-32">
              <h1 className="text-2xl font-sofia font-bold xl:text-5xl text-center lg:text-nowrap">
                Hoe Releafe jou helpt
              </h1>
              <p className="mt-4 font-sofia font-light text-center text-md xl:text-lg 2xl:text-xl">
                Releafe biedt een veelzijdige set aan praktische en effectieve
                tools die jou in staat stelt je mentale gezondheid een boost te
                geven! Hieronder vind je een overzicht van alle functies die de
                app biedt, inclusief hun doel en de werking ervan.
              </p>
            </div>

            {/* Features Data Container */}
            <div className="my-[2rem] 2xl:my-[4rem] flex flex-col gap-y-12 xl:gap-y-28 2xl:gap-y-32 px-8 xl:px-24 2xl:px-32">
              {featuresData.map((item, index) => {
                const {
                  title,
                  goalText,
                  descriptionText,
                  tipText,
                  ctaText,
                  image,
                } = item

                return (
                  <div
                    key={index}
                    className={`flex flex-col-reverse lg:${index % 2 == 0 ? 'flex-row' : 'flex-row-reverse'} justify-between items-center gap-x-12`}
                  >
                    {/* Feature Text Container */}
                    <div className="flex flex-col gap-y-8 lg:gap-y-12 w-full lg:w-1/2">
                      <h2 className="text-2xl xl:text-3xl 2xl:text-4xl font-sofia font-bold">
                        {title}
                      </h2>

                      <h3 className="text-md xl:text-lg 2xl:text-xl font-sofia font-bold">
                        Doel:{' '}
                        <span className="text-md xl:text-lg 2xl:text-xl font-sofia font-light">
                          {goalText}
                        </span>
                      </h3>

                      <h3 className="text-md xl:text-lg 2xl:text-xl font-sofia font-bold">
                        Hoe werk het?:{' '}
                        <span className="text-md xl:text-lg 2xl:text-xl font-sofia font-light">
                          {descriptionText}
                        </span>
                      </h3>

                      {tipText !== '' && (
                        <h3 className="text-md xl:text-lg 2xl:text-xl font-sofia font-bold">
                          Tip:{' '}
                          <span className="text-md xl:text-lg 2xl:text-xl font-sofia font-light">
                            {tipText}
                          </span>
                        </h3>
                      )}

                      <Link
                        href={'/probeer-releafe-gratis'}
                        className="flex justify-center items-center rounded-full h-[50px] lg:h-[60px] w-full lg:w-[24rem] bg-gradient-to-b from-[#c5d5bc] to-[#8fa58b] transform duration-300 ease-in-out font-sofia font-bold text-white text-md xl:text-lg 2xl:text-xl leading-none"
                      >
                        {/* Pseudo-element for the hover effect */}
                        <span className="absolute inset-0 bg-black opacity-0 rounded-full transition-opacity duration-300 ease-out z-0 hover:opacity-15"></span>

                        {/* Text above the overlay */}
                        <p className="relative z-10 pointer-events-none">
                          {ctaText}
                        </p>
                      </Link>
                    </div>

                    {/* Releafe Feature Image Container */}
                    {image !== '' && (
                      <div className="w-full xl:w-1/3 2xl:w-1/3 h-[600px] xl:h-[700px] 2xl:h-[600px] relative mb-16">
                        <Image
                          className={`object-contain ${index % 2 == 0 ? 'scale-125' : 'scale-110'}`}
                          src={image}
                          alt=""
                          fill
                        />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default OntdekReleafePage
