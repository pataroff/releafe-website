import React, { useState } from 'react'

import Layout from 'components/shared/Layout'
import ScrollUp from 'components/shared/ScrollUp'

import Link from 'next/link'
import Image from 'next/image'

import HomePageHead from '../home/HomePageHead'

const featuresData = [
  {
    title: 'Dagboek',
    goalText: 'krijg inzicht in jouw huidige mentale welzijn',
    descriptionText:
      'Gebruik het dagboek om eenvoudig bij te houden hoe je je voelt. Scoor dagelijks je stemming, stress, energie en slaap. Heb je iets bijzonders meegemaakt? Voeg dit als extra notitie toe.  Zo krijg je een persoonlijk welzijnsoverzicht dat je verder helpt je welzijn beter te begrijpen.',
    descriptionText2: '',
    tipText: '',
    ctaText: 'Begin met je dagboek',
    image: '/images/ontdek_releafe/dagboek_perspective_image.png',
  },
  {
    title: 'Welzijnsoverzicht',
    goalText: 'bekijk je vooruitgang en ontdek patronen',
    descriptionText:
      'Je dagboek heeft een persoonlijk welzijnsoverzicht met een handige grafiek. Hierin zie je in één oogopslag hoe het de afgelopen tijd met je is gegaan. Kies zelf welke onderwerpen je wilt weergeven en over welke periode je de gegevens wil zien. Zo herken je patronen, ontdek je wat jou helpt om je beter te voelen en waar je aan gaat werken.',
    descriptionText2:
      'Benieuwd hoe je je gisteren, vorige week of een maand geleden voelde? Met de handige kalender in je dagboek kun je het zo opzoeken. Selecteer de datum en bekijk je oude aantekeningen. Zo krijg je meer inzicht in je gevoelens en gedachten.',
    tipText: '',
    ctaText: 'Bekijk je welzijnsoverzicht',
    image: '/images/ontdek_releafe/wellbeing_portrait_image.png',
  },
  {
    title: 'Persoonlijke doelen',
    goalText: 'stimuleer positieve veranderingen in je leven',
    descriptionText:
      'Jezelf goed voelen begint met kleine dingen. Stel jezelf doelen die je blij maken, zoals ‘een complimentje geven’ of ‘iets nieuws leren’. Met Releafe volg je deze doelen makkelijk én krijg je een beloning in de app als je ze haalt. Zo wordt het leuk om gezonde gewoontes te ontwikkelen. En het is nog makkelijk ook: in je dagboek schrijf je elke dag even op hoe het gaat en in het overzicht zie je precies hoe ver je bent. Zo zie je in één oogopslag hoe goed je bezig bent!',
    descriptionText2: '',
    tipText: '',
    ctaText: 'Stel je eerste doel in',
    image: '/images/ontdek_releafe/personal_goals_perspective_image.png',
  },
  {
    title: 'Zorgenbakje',
    goalText: 'geef je zorgen een plek en creëer ruimte in je hoofd',
    descriptionText:
      'Wil je je zorgen even kwijt? Gebruik het zorgenbakje. Schrijf je zorgen en angsten op en berg ze veilig op. Het helpt om je zorgen visueel op te bergen, ze uit je hoofd te zetten en ze daarna makkelijker los te laten of er anders over na te denken.',
    descriptionText2: '',
    tipText: '',
    ctaText: 'Schrijf je zorgen op',
    image: '/images/ontdek_releafe/worry_box_portrait_image.png',
  },
  {
    title: 'Reframen',
    goalText:
      'verander negatieve gedachten in helpende en realistische gedachten',
    descriptionText:
      'De reframing-oefening helpt je om je zorgen vanuit een andere invalshoek te bekijken. Door stapsgewijs je gedachten te herformuleren helpt deze oefening je om meer positieve en realistische gedachten te ontdekken. Hierdoor krijg je meer grip op je emoties en situaties waardoor je je rustiger en zelfverzekerder voelt.',
    descriptionText2:
      'Zit je met zorgen? Bekijk ze eens vanuit een andere invalshoek. De reframing-oefening helpt je om je gedachten stap voor stap te veranderen. Door je gedachten anders te bekijken, ontdek je nieuwe mogelijkheden. Daardoor voel je je rustiger en zekerder, en kun je beter omgaan met moeilijke situaties.',
    tipText: '',
    ctaText: 'Probeer een reframing-oefening',
    image: '/images/ontdek_releafe/reframing_perspective_image.png',
  },
  {
    title: 'Bericht aan jezelf',
    goalText: 'help jezelf tijdens moeilijke momenten',
    descriptionText:
      'Geef jezelf een steuntje in de rug. Schrijf of neem een bericht op voor jezelf, voor die momenten dat je het even moeilijk hebt. Lees of luister het later terug en geef jezelf zo een positieve boost, precies wanneer je het nodig hebt.',
    descriptionText2: '',
    tipText:
      'Je kan ook je partner, een vriend of familielid waar je steun aan hebt vragen een bericht voor je op te nemen.',
    ctaText: 'Schrijf of neem een bericht op',
    image: '/images/ontdek_releafe/notes_to_self_portrait_image.png',
  },
  {
    title: 'Ontspanningsoefeningen',
    goalText: 'verminder stress en vind rust',
    descriptionText:
      "Even tijd voor jezelf? Releafe heeft volop meditatie- en mindfulnessvideo’s en -audio’s door professionals ontworpen. Of je nu behoefte hebt aan rust, meer focus of gewoon even een momentje voor jezelf, er is altijd iets wat bij je past. Bekijk de video's en audio's en kies wat jou helpt.",
    descriptionText2: '',
    tipText: '',
    ctaText: 'Ontdek ontspanningsoefeningen',
    image: '/images/ontdek_releafe/exercises_perspective_image.png',
  },
  {
    title: 'Bonsaiboom',
    goalText: 'Jou motiveren om met je mentale welzijn bezig te blijven.',
    descriptionText:
      'Voor elke stap die je zet binnen de app – of het nu het bijhouden van je dagboek is, het behalen van een doel of een moment van ontspanning – verdien je beloningen waarmee je jouw bonsai kunt laten groeien en bloeien. Zo wordt zelfzorg niet alleen waardevol, maar ook leuk en motiverend.',
    descriptionText2: '',
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
        {/* Main Section */}
        <section className="min-h-[calc(100vh-120px)] xl:flex">
          {/* Main Wrapper */}
          <div className="flex flex-col xl:flex-row min-h-full w-full">
            {/* Hero Text Container */}
            <div className="flex flex-col justify-between h-full w-full xl:w-1/2 bg-[#c5d5bc] bg-opacity-15 gap-y-8 px-12 lg:px-24 pb-4 lg:pb-8 pt-28 lg:pt-12 2xl:pt-16">
              <h1 className="text-3xl/[2.5rem] font-sofia font-bold lg:text-4xl/[3rem] 2xl:text-5xl/[4rem]">
                Releafe: jouw pad naar mentaal welzijn
              </h1>
              <h3 className="text-md lg:text-lg 2xl:text-xl font-sofia font-light">
                Je mentale gezondheid verdient aandacht, en Releafe helpt je
                daarbij. Of je nu grip wilt krijgen op je stress, beter inzicht
                wilt in je emoties, of simpelweg bewuster wilt leven – met
                Releafe heb je alle tools bij de hand. Van een overzichtelijk
                dagboek en persoonlijke doelen tot ontspanningsoefeningen en een
                motiverende bonsaiboom die met je meegroeit.
              </h3>

              <h3 className="text-md lg:text-lg 2xl:text-xl font-sofia font-bold">
                Ontdek hoe Releafe jou kan ondersteunen en zet vandaag nog de
                eerste stap naar meer balans en veerkracht.{' '}
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
                  href="/probeer-releafe-gratis"
                  className="flex justify-center items-center rounded-full h-[50px] lg:h-[60px] w-full mt-4  bg-gradient-to-b from-[#c5d5bc] to-[#8fa58b] transform duration-300 ease-in-out font-sofia font-bold text-white text-md lg:text-xl 2xl:text-xl leading-none"
                >
                  {/* Pseudo-element for the hover effect */}
                  <span className="absolute inset-0 bg-black opacity-0 rounded-full transition-opacity duration-300 ease-out z-0 hover:opacity-15"></span>

                  {/* Text above the overlay */}
                  <p className="relative z-10 pointer-events-none">
                    Klaar om aan de slag te gaan
                  </p>
                </Link>

                <button
                  onClick={() => {
                    document
                      .getElementById('features-section')
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
                src="/images/ontdek_releafe_hero_image.jpeg"
                alt="Ontdek Releafe Hero Image"
                fill // fill = absolute positioning, therefore container needs relative
                className="object-cover object-left"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features-section"
          className="min-h-[calc(100vh-120px)] bg-[#F7F7F7] pt-[5rem] xl:flex xl:pt-0 "
        >
          {/* Features Box */}
          <div className="bg-white rounded-3xl shadow-xl my-[2rem] xl:my-[6rem] mx-4 xl:mx-32 2xl:mx-64 pt-14 py-8">
            <div className="px-8 xl:px-32">
              <h1 className="text-2xl font-sofia font-bold xl:text-5xl text-center lg:text-nowrap">
                Hoe Releafe jou helpt
              </h1>
              <p className="mt-4 font-sofia font-light text-center text-md xl:text-lg 2xl:text-xl">
                Wil je minder stress, meer balans en weer goed in je vel zitten?
                Releafe helpt je hierbij met praktische en handige tools. Ontdek
                hieronder welke functies de app biedt, wat hun doel is, hoe ze
                werken en kies wat bij jou past. Kleine stappen, groot verschil.
              </p>
            </div>

            {/* Features Data Container */}
            <div className="my-[2rem] 2xl:my-[4rem] flex flex-col gap-y-12 xl:gap-y-12 2xl:gap-y-14 px-8 xl:px-24 2xl:px-32">
              {featuresData.map((item, index) => {
                const {
                  title,
                  goalText,
                  descriptionText,
                  descriptionText2,
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
                        Hoe werk het?{' '}
                        <span className="text-md xl:text-lg 2xl:text-xl font-sofia font-light">
                          {descriptionText}
                        </span>
                      </h3>

                      {descriptionText2 !== '' && (
                        <h3 className="text-md xl:text-lg 2xl:text-xl font-sofia font-light">
                          {descriptionText2}
                        </h3>
                      )}

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
                      <div
                        className={`w-full xl:w-1/3 2xl:w-1/3 h-[600px] xl:h-[700px] 2xl:h-[600px] relative  ${index % 2 == 0 ? 'mt-0 xl:my-[4rem]' : 'my-[4rem]'}`}
                      >
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
