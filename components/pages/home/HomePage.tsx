import React, { useState } from 'react'

import { ProjectListItem } from 'components/pages/home/ProjectListItem'
import { Header } from 'components/shared/Header'
import Layout from 'components/shared/Layout'
import ScrollUp from 'components/shared/ScrollUp'
import { resolveHref } from 'lib/sanity.links'
import Link from 'next/link'
import Image from 'next/image'
import type { HomePagePayload } from 'types'
import { SettingsPayload } from 'types'

import HomePageHead from './HomePageHead'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons'

export interface HomePageProps {
  settings?: SettingsPayload
  page?: HomePagePayload
  preview?: boolean
}

const featuresData = [
  [
    'Dagboek',
    'Het dagboek gebruik je om bij te houden hoe het gaat met je mentale welzijn. Je scoort dagelijks op een makkelijke manier een aantal onderwerpen zoals algemene stemming, zorgen, stress, energie, focus en slaap. Daarnaast heb je de mogelijkheid om extra informatie vast te leggen over relevante dingen die zijn gebeurd. Deze informatie wordt gebruikt om je persoonlijke welzijnsoverzicht op te stellen.',
    '/images/home/dagboek_image_portrait.png',
    'Houd je dagboek bij',
  ],
  [
    'Welzijnsoverzight',
    'Aan het dagboek is een persoonlijk welzijnsoverzicht gekoppeld waar je duidelijk in een grafiek weergegeven ziet hoe het met je is gegaan de afgelopen tijd. Je kan hierbij zelf kiezen welke onderwerpen je ziet en over welke periode je de gegevens wil zien. Dit overzicht helpt je om patronen te leren herkennen en dit geeft je aanwijzingen over wat je kunt doen om je beter te voelen.',
    '/images/home/wellbeing_overview_image_portrait.png',
    'Bekijk je welzijnsoverzicht',
  ],
  [
    'Toolkit',
    'De toolkit bevat verschillende tools die je helpen bij het verbeteren van je mentale welzijn. Hier vind je functies zoals het stellen van persoonlijke doelen, het noteren en loslaten van zorgen, reframing van negatieve gedachten en het schrijven van berichten aan jezelf. Elke tool is ontworpen om je te ondersteunen in je groeiproces en bewust met je emoties om te gaan.',
    '/images/home/toolkit_image_portrait.png',
    'Ontdek de tools in de toolkit',
  ],
  [
    'Persoonlijke doelen',
    'Het stellen van persoonlijke doelen stelt je in staat om je op specifieke gebieden te richten die je mentale welzijn bevorderen. Het helpt je om hier gemotiveerd en bewust mee aan de slag te gaan en een positieve gedragsverandering te bewerkstelligen. Voor het behalen van deze doelstellingen ontvang je beloningen in de app.',
    '/images/home/personal_goals_image_portrait.png',
    'Stel je persoonlijke doelen in',
  ],
  [
    'Zorgenbakje',
    'Het zorgenbakje biedt je een veilige ruimte om je zorgen en angsten van je af te schrijven en even op te bergen. Wat helpt bij het loslaten van zorgen is het visueel en symbolisch opbergen van deze zorgen. Je kan de opgeborgen zorgen op een later moment, of direct reframen.',
    '/images/home/worrybox_image_portrait.png',
    'Schrijf je zorgen van je af',
  ],
]

const companyLogos = [
  '/images/company_logos/Menzis_Logo.png',
  '/images/company_logos/Lentis_Logo.png',
  '/images/company_logos/UMCG_Logo.png',
  '/images/company_logos/Hanze_Logo.png',
  '/images/company_logos/RUG_Logo.png',
]

const testimonialsData = [
  [
    'De dagboekfunctie van Releafe heeft me geholpen mijn emoties beter te begrijpen en mijn vooruitgang bij te houden. Het is een onmisbaar hulpmiddel geweest voor mijn mentale welzijn.',
    'Merijn, Nederland',
    'over de kracht van emotionele reflectie en groei',
  ],
  [
    'De zorgenbox is fantastisch om mijn dagelijkse stress van me af te zetten. Het is als een mentale opruiming en helpt me gefocust te blijven.',
    'Kristiyan, Bulgarije',
    'over de verlichting van het beheersen van dagelijkse stress',
  ],
  [
    'De dagelijkse mindfulness-routines in Releafe zijn een essentieel onderdeel van mijn dag geworden. Ik voel me meer in balans en minder overweldigd door de uitdagingen van het leven.',
    'Hanna, Duitsland',
    'over de voordelen van mindfulness in het dagelijks leven integreren',
  ],
  [
    'Ik heb jarenlang geworsteld met angst, maar de mindfulness-oefeningen in Releafe hebben me geholpen rust en balans te vinden in mijn dagelijks leven.',
    'Ivan, Bulgarije',
    'over het vinden van balans en verlichting van angst.',
  ],
  // TEST DATA
  [
    'Ik heb jarenlang geworsteld met angst, maar de mindfulness-oefeningen in Releafe hebben me geholpen rust en balans te vinden in mijn dagelijks leven.',
    'Ivan, Bulgarije',
    'over het vinden van balans en verlichting van angst.',
  ],
  [
    'Ik heb jarenlang geworsteld met angst, maar de mindfulness-oefeningen in Releafe hebben me geholpen rust en balans te vinden in mijn dagelijks leven.',
    'Ivan, Bulgarije',
    'over het vinden van balans en verlichting van angst.',
  ],
  [
    'Ik heb jarenlang geworsteld met angst, maar de mindfulness-oefeningen in Releafe hebben me geholpen rust en balans te vinden in mijn dagelijks leven.',
    'Ivan, Bulgarije',
    'over het vinden van balans en verlichting van angst.',
  ],
]

const articlesData = [
  [
    'Stressmanagement',
    '5 eenvoudige technieken om racende gedachten te kalmeren tijdens',
  ],
  [
    'Mindfulness',
    'Hoe je negatieve gedachten kunt herstructureren met de “Zorgenbox”',
  ],
  [
    'Angstverlichting',
    'De wetenschap achter dagelijkse mindfulness en de impact ervan op angst',
  ],
]

const faqData = [
  {
    question: 'Wat is Releafe?',
    answer:
      'Releafe is een app voor stressverlichting en het aanpakken van paniekaanvallen.',
  },
  {
    question: 'Wat is inbegrepen bij een Releafe-abonnement?',
    answer: 'Het abonnement omvat toegang tot alle stressverlichtingsfuncties.',
  },
  {
    question: 'Waar moet ik beginnen zodra ik de app heb gedownload?',
    answer: 'Start met het onboarding-proces dat je begeleidt door de app.',
  },
  {
    question: 'Welke apparaten ondersteunen de Releafe-app?',
    answer: 'Releafe wordt ondersteund op iOS en Android-apparaten.',
  },
  {
    question: 'Hoe kan ik opzeggen?',
    answer: 'Je kunt het abonnement opzeggen via je accountinstellingen.',
  },
]

export function HomePage({ page, settings, preview }: HomePageProps) {
  const { overview, showcaseProjects, title = 'Personal website' } = page ?? {}

  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const [testimonialsActiveIndex, setTestimonialsActiveIndex] =
    useState<number>(0)
  const [articlesActiveIndex, setArticlesActiveIndex] = useState<number>(0)

  const handleTestimonialsNext = () => {
    setTestimonialsActiveIndex((prev) => (prev + 1) % testimonialsData.length)
  }

  const handleTestimonialsPrev = () => {
    setTestimonialsActiveIndex((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1,
    )
  }

  const handleArticlesNext = () => {
    setArticlesActiveIndex((prev) => (prev + 1) % articlesData.length)
  }

  const handleArticlesPrev = () => {
    setArticlesActiveIndex((prev) =>
      prev === 0 ? articlesData.length - 1 : prev - 1,
    )
  }

  const FAQItem: React.FC<{ question: string; answer: string }> = ({
    question,
    answer,
  }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <div className="border-b-2 flex flex-col w-full">
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="font-sofia font-normal text-lg my-4">{question}</h1>
          <button onClick={() => setIsOpen(!isOpen)}>
            <FontAwesomeIcon
              icon={faChevronDown}
              size="xl"
              className={`transform transition-transform duration-300 ease-out ${
                isOpen ? 'rotate-180' : 'rotate-0'
              }`}
            />
          </button>
        </div>
        {isOpen && (
          <h2 className="font-sofia font-light text-lg mb-4">{answer}</h2>
        )}
      </div>
    )
  }

  return (
    <>
      <HomePageHead page={page} settings={settings} />
      <Layout settings={settings} preview={preview} route={'Home'}>
        {/* Main Section */}
        <section className="h-full">
          <div className="relative w-full h-[200px] lg:h-[480px] 2xl:h-[580px] z-0 mb-[40px]">
            {/* Hero Image Container */}
            <span className="absolute w-full h-[200px] lg:h-full">
              <Image
                src="/images/hero_image.jpeg"
                alt="Hero Image"
                fill
                className="object-cover object-bottom"
              />
              {/* Bottom Blur */}
              <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-white to-transparent" />
            </span>
          </div>
          {/* Header Container */}
          {/* @TODO: Is there a better way of doing this? */}
          <div className="mt-[2rem] px-5 lg:px-32 2xl:px-64">
            {title && <Header centered title={title} description={overview} />}
          </div>
        </section>

        {/* Features Section */}
        <section className="mt-[4rem] lg:mt-[6rem] px-5 lg:px-64 2xl:px-96 flex flex-col justify-center items-center">
          {/* Title */}
          <h1 className="text-2xl font-sofia font-bold md:text-4xl text-center px-5">
            Wij zijn hier om jou in staat te stellen je welzijn te bevorderen.
          </h1>

          {/* Features Box */}
          <div className="relative mt-[2rem] lg:mt-[4rem] rounded-[2.5rem] w-full h-full bg-[#f0f4ed] drop-shadow-sm p-8 lg:p-0">
            {/* Features Selection Row Container */}
            <div className="flex flex-row flex-wrap lg:flex-nowrap gap-2.5 justify-center lg:absolute lg:-top-5 lg:left-1/2 lg:transform lg:-translate-x-1/2 z-10 ">
              {/* Feature Selection Box */}
              {featuresData.map((feature, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => setSelectedIndex(index)}
                    className={`${selectedIndex === index ? 'bg-[#96a78d] hover:bg-[#8d9b81]' : 'bg-[#c5d4bc] hover:bg-[#b7c6ae]'} rounded-lg text-sm lg:text-lg font-sofia font-bold text-white text-nowrap py-2 px-4 transition duration-300 ease-in-out`}
                  >
                    {feature[0]}
                  </button>
                )
              })}
            </div>

            {/* Features Data Container */}
            <div className="flex flex-col-reverse lg:flex-row w-full h-full items-center xl:py-12 2xl:py-14 pr-0 xl:pr-14 2xl:pr-16">
              <div className="w-full h-[600px] xl:h-[600px] 2xl:h-[700px] relative">
                <Image
                  className="object-contain"
                  src={featuresData[selectedIndex][2]}
                  alt=""
                  fill
                />
              </div>

              <div className="flex flex-col items-center gap-y-4 my-8 w-full">
                <div className="h-[300px] flex flex-col justify-center">
                  <p className="font-sofia font-light text-md xl:text-lg text-center">
                    {featuresData[selectedIndex][1]}
                  </p>
                </div>

                <Link
                  href="/probeer-releafe-gratis"
                  className="
    relative flex justify-center items-center rounded-full overflow-hidden h-[50px] lg:h-[60px] w-full lg:w-[18rem] mt-4 
    bg-gradient-to-b from-[#c5d5bc] to-[#8fa58b] text-white font-sofia font-bold text-lg xl:text-lg 
    leading-none"
                >
                  {/* Pseudo-element for the hover effect */}
                  <span className="absolute inset-0 bg-black opacity-0 rounded-full transition-opacity duration-300 ease-out z-0 hover:opacity-15"></span>

                  {/* Text above the overlay */}
                  <p className="relative z-10 pointer-events-none">
                    {featuresData[selectedIndex][3]}
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Credibility Section */}
        <section className="my-[4rem] lg:my-[6rem]">
          {/* Custom Image  */}
          <div className="w-full h-[140px] lg:h-[350px] relative">
            <div className="absolute inset-x-0 top-0 z-10 h-7 lg:h-14 bg-gradient-to-b from-white to-transparent" />
            <Image
              className="object-cover object-top"
              src="/images/hero_image.jpeg"
              alt="Custom Image"
              fill
            />
            <div className="absolute inset-x-0 bottom-0 h-7 lg:h-14 bg-gradient-to-t from-white to-transparent" />
          </div>

          {/* Credibility Container */}
          <div className="mt-[2rem] lg:mt-[4rem] flex flex-col gap-y-14 md:px-32 lg:px-64">
            <h1 className="text-2xl font-sofia font-bold md:text-4xl text-center">
              Aanbevolen door experts en belanghebbenden.
            </h1>

            {/* Credibity Logo Row Container */}
            <div className="flex flex-col lg:flex-row lg:gap-x-32 2xl:gap-x-48 gap-y-28 lg:gap-y-32 justify-center items-center px-32 xl:px-64">
              {companyLogos.map((logo, index) => {
                return (
                  <Image
                    key={index}
                    src={logo}
                    alt=""
                    className="max-w-[125px] lg:max-w-[150px] h-auto"
                    width={150}
                    height={150}
                  />
                )
              })}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mt-[4rem] lg:mt-[6rem] w-full px-5 lg:px-64">
          <h1 className="text-2xl font-sofia font-bold md:text-4xl text-center">
            Echte verhalen, echte impact.
          </h1>

          {/* Testimonials Wrapper */}
          <div className="mt-[2rem] lg:mt-[4rem] mx-auto max-w-[1440px]">
            {/* Testimonials Container */}
            <ul className="relative h-[450px]">
              {/* Testimonial Box */}
              {testimonialsData.map((testimonial, index) => {
                // Calculate the relative position of the element
                const relativeIndex = index - testimonialsActiveIndex

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
                    className={`rounded-[2.5rem] absolute w-[350px] h-[450px] bg-gradient-to-b from-[#c5d5bc] to-[#8fa58b] px-8 py-10 flex flex-col justify-between drop-shadow-md`}
                  >
                    {/* Quotation Mark Icon + Quote */}
                    <div>
                      {/* Quotation Mark Icon Container */}
                      <div className="w-[25%]">
                        <Image
                          src="/images/quotation_mark_icon.png"
                          alt="Quotation Mark Icon"
                          className="w-full h-full"
                          width={512}
                          height={512}
                        />
                      </div>

                      {/* Quote */}
                      <h2 className="mt-4 font-sofia font-normal text-lg leading-tight">
                        {testimonial[0]}
                      </h2>
                    </div>

                    <div>
                      <h3 className="font-sofia font-normal text-md">
                        {testimonial[1]}
                      </h3>

                      <h4 className="font-sofia font-light text-sm leading-tight">
                        {testimonial[2]}
                      </h4>
                    </div>
                  </li>
                )
              })}
            </ul>
            {/* Testimonial Control Buttons */}
            <ul className="mt-[2rem] lg:mt-[4rem] w-full h-14 flex flex-row gap-x-4 justify-center lg:justify-end">
              <li
                className={`flex justify-center items-center rounded-full w-10 h-10 bg-[#c5d6bc] hover:bg-[#b7c6ae] transform duration-300 ease-in-out ${testimonialsActiveIndex === 0 ? 'opacity-50' : 'opacity-100'}`}
              >
                <button
                  className="h-[2.5rem] w-[2.5rem] rounded-full"
                  disabled={testimonialsActiveIndex === 0 ? true : false}
                  onClick={() => handleTestimonialsPrev()}
                >
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    color="white"
                    size="lg"
                  />
                </button>
              </li>
              <li
                className={`flex justify-center items-center rounded-full w-10 h-10 bg-[#96a78d] hover:bg-[#8d9b81] transform duration-300 ease-in-out ${testimonialsActiveIndex === testimonialsData.length - 1 ? 'opacity-50' : 'opacity-100'}`}
              >
                <button
                  className="h-[2.5rem] w-[2.5rem] rounded-full"
                  disabled={
                    testimonialsActiveIndex === testimonialsData.length - 1
                      ? true
                      : false
                  }
                  onClick={() => handleTestimonialsNext()}
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

        {/* Upselling Section */}
        <section className="mt-[4rem] lg:mt-[6rem] px-5 lg:px-64">
          <h1 className="text-2xl font-sofia font-bold md:text-4xl text-center">
            Probeer Releafe nu gratis.
          </h1>

          {/* Upselling Wrapper */}
          <div className="mt-[2rem] lg:mt-[4rem] flex flex-col w-full justify-center items-center gap-y-8">
            {/* Offer Container */}
            <div className="rounded-2xl h-[90px] w-full xl:w-1/2 2xl:w-1/3 border-2 border-[#516523] px-6 py-4 relative">
              {/* Offer Decoration Box */}
              <div className="rounded-lg h-[35px] w-[240px] bg-gradient-to-b from-[#c5d5bc] to-[#8fa58b] absolute -top-5 right-4 px-3 py-1">
                <h4 className="font-sofia font-medium text-md text-white text-nowrap">
                  30 dagen gratis proefperiode
                </h4>
              </div>
              {/* Offer Content Container */}
              <div className="flex flex-row justify-between items-center h-full w-full">
                <div className="flex flex-col justify-between h-full">
                  <h3 className="font-sofia text-lg font-normal">Jaarlijks</h3>
                  <h4 className="font-sofia text-md font-normal">
                    €47.88/jaar
                  </h4>
                </div>
                <h2 className="font-sofia text-lg font-medium">€3.99/maand</h2>
              </div>
            </div>

            <p className="font-sofia font-normal text-xs lg:text-sm text-center w-full xl:w-2/3 2xl:w-1/2">
              Na je gratis proefperiode kost het jaarabonnement €47,88 en wordt
              elk jaar automatisch verlengd totdat je het opzegt.{' '}
              <Link className="underline" href="#">
                Voorwarden
              </Link>{' '}
              |{' '}
              <Link className="underline" href="#">
                Op elk moment opzegbaar
              </Link>
            </p>

            <Link
              href="/probeer-releafe-gratis"
              className="
    relative flex justify-center items-center rounded-full overflow-hidden h-[50px] w-full xl:w-1/2 2xl:w-1/3 mt-2
    bg-gradient-to-b from-[#c5d5bc] to-[#8fa58b] text-white font-sofia font-bold text-lg xl:text-lg 
    leading-none"
            >
              {/* Pseudo-element for the hover effect */}
              <span className="absolute inset-0 bg-black opacity-0 rounded-full transition-opacity duration-300 ease-out z-0 hover:opacity-15"></span>

              {/* Text above the overlay */}
              <p className="relative z-10 pointer-events-none">Doorgaan</p>
            </Link>
          </div>
        </section>

        {/* Blog Section */}
        <section className="mt-[4rem] lg:mt-[6rem] w-full px-5 lg:px-64">
          <h1 className="text-2xl font-sofia font-bold md:text-4xl text-center">
            Ontdek meer hulpmiddelen over angstverlichting, mindfulness en
            welzijn.
          </h1>

          {/* Articles Wrapper */}
          <div className="mt-[2rem] lg:mt-[4rem] mx-auto max-w-[1440px] ">
            {/* Articles Container */}
            <ul className="relative h-[400px]">
              {/* Article Box */}
              {articlesData.map((article, index) => {
                // Calculate the relative position of the element
                const relativeIndex = index - articlesActiveIndex

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
                    className={`rounded-[2.5rem] absolute w-full lg:w-[600px] h-full lg:h-[400px] bg-gradient-to-b from-[#c5d5bc] to-[#8fa58b] px-8 py-10 flex flex-col justify-between drop-shadow-md`}
                  >
                    <div className="rounded-[2.5rem] rounded-t-none bg-white h-[140px] w-full absolute bottom-0 left-0 flex flex-col justify-center px-8">
                      <h2 className="font-sofia font-light text-md">
                        {article[0]}
                      </h2>
                      <h3 className="font-sofia font-normal text-md">
                        {article[1]}
                      </h3>
                    </div>
                  </li>
                )
              })}
            </ul>
            {/* Articles Control Buttons */}
            <ul className="mt-[2rem] lg:mt-[4rem] w-full h-14 flex flex-col-reverse lg:flex-row justify-center lg:justify-end items-center">
              <li className="relative h-full w-full mt-[2rem]">
                <Link
                  className="absolute left-1/2 transform -translate-x-1/2 lg:-translate-x-[56px] underline font-sofia font-normal text-lg"
                  href="#"
                >
                  Bekijk alle blogs
                </Link>
              </li>
              <ul className="flex flex-row gap-x-4">
                <li
                  className={`flex justify-center items-center rounded-full w-10 h-10 bg-[#c5d6bc] hover:bg-[#b7c6ae] transform duration-300 ease-in-out ${articlesActiveIndex === 0 ? 'opacity-50' : 'opacity-100'}`}
                >
                  <button
                    className="h-[2.5rem] w-[2.5rem] rounded-full"
                    disabled={articlesActiveIndex === 0 ? true : false}
                    onClick={() => handleArticlesPrev()}
                  >
                    <FontAwesomeIcon
                      icon={faChevronLeft}
                      color="white"
                      size="lg"
                    />
                  </button>
                </li>
                <li
                  className={`flex justify-center items-center rounded-full w-10 h-10 bg-[#96a78d] hover:bg-[#8d9b81] transform duration-300 ease-in-out ${articlesActiveIndex === articlesData.length - 1 ? 'opacity-50' : 'opacity-100'}`}
                >
                  <button
                    className="h-[2.5rem] w-[2.5rem] rounded-full"
                    disabled={
                      articlesActiveIndex === articlesData.length - 1
                        ? true
                        : false
                    }
                    onClick={() => handleArticlesNext()}
                  >
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      color="white"
                      size="lg"
                    />
                  </button>
                </li>
              </ul>
            </ul>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="my-[4rem] lg:my-[6rem] px-5 lg:px-32 flex flex-col justify-center items-center">
          <h1 className="text-2xl font-sofia font-bold md:text-4xl text-center">
            Veel gestelde vragen
          </h1>

          {/* FAQ Container */}
          <div className="mt-[2rem] lg:mt-[4rem] w-full">
            <div className="border-b-2">
              <h1 className="font-sofia font-normal uppercase text-2xl my-4">
                Algemeen
              </h1>
            </div>
            {faqData.map((faq, index) => {
              return (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              )
            })}
          </div>
        </section>

        {/* Showcase projects */}
        {/* {showcaseProjects && showcaseProjects.length > 0 && (
            <div className="mx-auto max-w-[100rem] rounded-md border">
              {showcaseProjects.map((project, key) => {
                const href = resolveHref(project._type, project.slug)
                if (!href) {
                  return null
                }
                return (
                  <Link key={key} href={href}>
                    <ProjectListItem project={project} odd={key % 2} />
                  </Link>
                )
              })}
            </div>
          )} */}

        {/* Workaround: scroll to top on route change */}
        <ScrollUp />
      </Layout>
    </>
  )
}
