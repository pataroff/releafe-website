import React, { useState } from 'react'

import Layout from 'components/shared/Layout'
import ScrollUp from 'components/shared/ScrollUp'

import Link from 'next/link'
import Image from 'next/image'

import HomePageHead from '../home/HomePageHead'

// @TODO: This needs to be moved in 'mentale-klachten.tsx'!
const mentalDisordersData = [
  {
    title: 'Angst',
    description:
      'Iedereen is weleens bang. Dat is normaal. Maar als angst je dagelijks leven beheerst, is het tijd om actie te ondernemen. Heb je stress op je werk of gedoe thuis? Dan kan die angst blijven hangen. Meestal verdwijnt het weer als de problemen zijn opgelost, of als je leert ermee om te gaan. Maar als je vaak bang bent zonder reden, en je gaat dingen vermijden, dan kan het een angststoornis worden.',
    linkText: 'Meer informatie over angst vind je hier.',
    href: 'https://www.thuisarts.nl/angst/ik-ben-vaak-bang',
    image: '/images/fear.jpeg',
    additionalData: [
      {
        title: 'Angst- en piekerstoornis',
        description:
          'Het gevoel dat je constant bang bent, zonder dat je precies weet waarvoor. Dat kan een gegeneraliseerde angststoornis zijn, ook wel een piekerstoornis genoemd. Je maakt je zorgen over alles: je relatie, je werk, je geld... noem maar op. Vaak gaat het automatisch en heb je er ook veel last van in het dagelijkse leven.',
        linkText:
          'Meer informatie over een angst- en piekerstoornis vind je hier.',
        href: 'https://www.thuisarts.nl/angststoornis/ik-heb-gegeneraliseerde-angststoornis',
      },
      {
        title: 'Sociale-angststoornis',
        description:
          'Krijg je al klamme handen bij het idee van een presentatie of om te praten in gezelschap? En vind je het lastig om naar feestjes te gaan? Bij een sociale-angststoornis ben je bang voor kritiek of afwijzing van anderen. Het  kan je onzeker maken en ervoor zorgen dat je situaties uit de weg gaat. Dit geeft even rust, maar houdt de angst op lange termijn in stand. Dit kan je dagelijks leven beïnvloeden, op school, werk of in sociale kringen.',
        linkText:
          'Meer informatie over een sociale-angststoornis vind je hier.',
        href: 'https://www.thuisarts.nl/sociale-angststoornis/ik-heb-sociale-angststoornis',
      },
      {
        title: 'Fobie',
        description:
          'Een fobie is een intense angst voor iets specifieks. Dit kan van alles zijn: spinnen, vliegen, autorijden of kleine ruimtes. Je weet misschien wel dat je angst niet logisch is, maar toch voelt het overweldigend.',
        linkText: 'Meer informatie over een fobie vind je hier.',
        href: 'https://www.thuisarts.nl/fobie/ik-ben-heel-bang-voor-iets-fobie',
      },
      {
        title: 'Hypochondrie',
        description:
          'Hypochondrie betekent dat je constant bang bent voor erge ziektes. Zelfs als dokters zeggen dat je niks hebt, blijft die angst knagen. Deze angst kan je dagelijks leven flink beïnvloeden en is een serieuze mentale last.',
        linkText: 'Meer informatie over hypochondrie vind je hier.',
        href: 'https://www.thuisarts.nl/hypochondrie/ik-heb-last-van-hypochondrie#adviezen-bij-hypochondrie',
      },
      {
        title: 'Dwangstoornis',
        description:
          'Bij een dwangstoornis heb je last van terugkerende dwanggedachten en dwanghandelingen die volgens vaste regels moeten worden uitgevoerd om spanning of angst te verminderen. Hoewel je weet dat deze handelingen overdreven zijn, blijf je ze doen om de spanning te verlichten, waardoor je niet op een gezonde manier met je gevoelens leert omgaan. De dwang kan veel tijd in beslag nemen en je functioneren op school of werk beïnvloeden.',
        linkText: 'Meer informatie over een dwangstoornis vind je hier.',
        href: 'https://www.thuisarts.nl/dwangstoornis/ik-heb-dwangstoornis#adviezen-bij-een-dwangstoornis',
      },
    ],
  },

  {
    title: 'Depressie',
    description:
      'Een depressie is meer dan een dip. Het is een aanhoudende somberheid en lusteloosheid die langer dan twee weken aanhoudt. Je voelt je vaak moe, onrustig, schuldig en waardeloos. Deze gevoelens verstoren je dagelijks leven, thuis, in je vrije tijd en op je werk. Hoe depressieve klachten aanvoelen en zich uiten, is voor iedereen anders.',
    linkText: 'Meer informatie over een depressie vind je hier.',
    href: 'https://www.thuisarts.nl/depressie/ik-heb-depressie',
    image: '/images/depression.jpg',
  },

  {
    title: 'Paniek',
    description:
      'Bij paniek is het goed om onderscheid te maken tussen een paniekaanval en een paniekstoornis.',
    linkText: '',
    image: '/images/panic.jpeg',
    additionalData: [
      {
        title: 'Paniekaanval',
        description:
          'Bij een paniekaanval reageert je lichaam alsof er gevaar is, ook al is dat er niet. Je hart gaat sneller kloppen, je ademhaling versnelt en je begint te zweten of te trillen. Door de angst worden de klachten erger, en het voelt alsof je de controle verliest. Je kunt niet helder nadenken en wilt misschien vluchten of huilen. Zo’n paniekaanval kan een paar minuten tot anderhalf uur duren.',
        linkText: 'Meer intormatie over een paniekaanval vind je hier.',
        href: 'https://www.thuisarts.nl/paniekaanvallen/ik-heb-paniekaanval',
      },
      {
        title: 'Paniekstoornis',
        description:
          'Bij een paniekstoornis heb je plotselinge paniekaanvallen en leef je in angst voor de volgende. Dit kan je dagelijkse leven sterk beïnvloeden. Je gaat situaties vermijden waaruit ontsnappen lastig is, zoals drukke winkels, bussen, treinen of volle straten. Hierdoor voel je je steeds meer beperkt in wat je doet en vermijd je deze plekken helemaal.',
        linkText: 'Meer informatie over een paniekstoornis vind je hier.',
        href: 'https://www.thuisarts.nl/paniekaanvallen/ik-heb-paniekstoornis',
      },
    ],
  },

  {
    title: 'Stress',
    description:
      'Een beetje stress is normaal en helpt je om scherp te zijn in spannende situaties, zoals een presentatie of examen. Meestal verdwijnt deze stress daarna. Maar als stress lang duurt door hoge verwachtingen, veel problemen of weinig steun, dan wordt het te veel. Dit leidt tot vermoeidheid, snel boos worden, slecht slapen en een constant gevoel van spanning, wat slecht is voor je gezondheid.',
    linkText:
      'Meer informatie over wat stress is, welke klachten je ervaart en waardoor het kan komen vind je hier.',
    href: 'https://www.thuisarts.nl/stress/ik-wil-beter-omgaan-met-stress',
    image: '/images/stress.jpg',
  },
]

const MentaleKlachtenPage = ({ settings, page }) => {
  const [fearSubdisorderIndex, setFearSubdisorderIndex] = useState<number>(0)
  const [panicSubdisorderIndex, setPanicSubdisorderIndex] = useState<number>(0)

  return (
    <>
      <HomePageHead page={page} settings={settings} />
      <Layout settings={settings} route={'Mentale klachten'}>
        {/* Main Section */}
        <section className="min-h-[calc(100vh-120px)] xl:flex">
          {/* Main Wrapper */}
          <div className="flex flex-col lg:flex-row min-h-full w-full">
            {/* Hero Text Container */}
            <div className="flex flex-col justify-between h-full w-full lg:w-1/2 bg-[#c5d5bc] bg-opacity-15 gap-y-8 px-12 lg:px-24 pb-4 lg:pb-8 pt-28 lg:pt-12 2xl:pt-16">
              <h1 className="text-3xl/[2.5rem] font-sofia font-bold lg:text-4xl/[3rem] 2xl:text-5xl/[4rem]">
                Ervaar je mentale klachten? Boost je welzijn met Releafe
              </h1>
              <h3 className="text-md lg:text-lg 2xl:text-xl font-sofia font-light">
                Mentale klachten? Iedereen heeft er weleens mee te maken. Van
                een dipje tot serieuzere dingen, het kan ons allemaal overkomen.
                Het belangrijkste is: je staat er niet alleen voor. Releafe is
                er om je te steunen, wat er ook speelt. Heb je last van
                onderstaande klachten? Releafe helpt je om mentaal sterk te
                worden én te blijven. Ontdek hier wat we voor je kunnen doen.
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
                  className="flex justify-center items-center rounded-full h-[50px] lg:h-[60px] w-full mt-4 bg-gradient-to-b from-[#d4e3c4] to-[#849b6f] transform duration-300 ease-in-out font-sofia font-bold text-white text-lg lg:text-xl leading-none"
                >
                  {/* Pseudo-element for the hover effect */}
                  <span className="absolute inset-0 bg-black opacity-0 rounded-full transition-opacity duration-300 ease-out z-0 hover:opacity-15"></span>

                  {/* Text above the overlay */}
                  <p className="relative z-10 pointer-events-none">
                    Voel je better
                  </p>
                </Link>

                <button
                  onClick={() => {
                    document
                      .getElementById('mental-disorders-section')
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
            <div className="relative h-[400px] lg:min-h-full w-full lg:w-1/2">
              <Image
                src="/images/mentale_klachten_hero_image.jpg"
                alt="Mentale Klachten Hero Image"
                fill // fill = absolute positioning, therefore container needs relative
                className="object-cover object-center"
              />
            </div>
          </div>
        </section>

        {/* Gradient Background Container */}
        <div className="bg-gradient-to-b from-white via-[#c5d5bc50] to-white h-full">
          {/* Mental Disorders Section */}
          <section
            id="mental-disorders-section"
            className="mt-[2rem] xl:mt-[6rem] w-full scroll-mt-[5.5rem] lg:scroll-mt-[2.5rem]"
          >
            <div className="px-5 md:px-32 lg:px-64">
              <h1 className="text-2xl font-sofia font-bold lg:text-5xl text-center lg:text-nowrap">
                Veelvoorkomende mentale klachten
              </h1>
              <p className="mt-4 font-sofia font-light text-center text-md md:text-xl">
                Voel je je soms down, gestrest of angstig? Je bent niet de
                enige. Veel mensen van alle leeftijden worstelen met mentale
                klachten. Check onderstaande veelvoorkomende klachten en ontdek
                hoe Releafe je kan helpen en ondersteunen. Heb je behoefte aan
                meer info? Klik dan door naar betrouwbare bronnen zoals
                Thuisarts.nl.
              </p>
            </div>

            {/* Mental Disorder Wrapper */}
            <div className="my-[2rem] lg:my-[4rem] flex flex-col gap-y-12 lg:gap-y-32 px-8 lg:px-32">
              {mentalDisordersData.map((item, index) => {
                const {
                  title,
                  description,
                  linkText,
                  href,
                  image,
                  additionalData,
                } = item
                const isEven = index % 2 == 0

                return (
                  <div key={index} className="flex flex-col">
                    <div
                      className={`flex ${isEven ? 'flex-col lg:flex-row' : 'flex-col lg:flex-row-reverse'} items-center gap-x-12 gap-y-8`}
                    >
                      {/* Mental Disorder Text Container */}
                      <div className="flex flex-col gap-y-4 lg:gap-y-8 w-full lg:w-1/2">
                        <h2 className="text-2xl lg:text-4xl font-sofia font-bold">
                          {title}
                        </h2>

                        <p className="text-md lg:text-xl font-sofia font-light">
                          {description}
                        </p>

                        {/* Panic Subdisorders Box */}
                        {title === 'Paniek' && additionalData && (
                          <div className="relative rounded-[2.5rem] w-full h-full bg-white drop-shadow-sm p-8">
                            {/* Panic Subdisorders Selection Row */}
                            <div className="flex flex-col w-full gap-y-4 lg:gap-y-8">
                              <div className="flex flex-row w-full justify-center gap-x-2">
                                {additionalData.map((subdisorder, index) => {
                                  return (
                                    <button
                                      key={index}
                                      className={`rounded-xl w-full ${panicSubdisorderIndex == index ? 'bg-gradient-to-b from-[#d4e3c4] to-[#849b6f] text-white' : 'bg-gray-200 hover:bg-gray-300 text-black'} font-sofia font-semibold text-sm xl:text-lg py-2 transition duration-300 ease-in-out`}
                                      onClick={() =>
                                        setPanicSubdisorderIndex(index)
                                      }
                                    >
                                      {subdisorder.title}
                                    </button>
                                  )
                                })}
                              </div>

                              <p className="text-md lg:text-lg font-sofia font-light">
                                {
                                  additionalData[panicSubdisorderIndex]
                                    .description
                                }
                              </p>

                              {/* @TODO: Replace all instances with a `LinkText` component! */}
                              <div className="flex items-center">
                                <p className="text-md lg:text-lg font-sofia font-light">
                                  {
                                    additionalData[
                                      panicSubdisorderIndex
                                    ].linkText?.split('hier')[0]
                                  }{' '}
                                  <Link
                                    href={
                                      additionalData[panicSubdisorderIndex].href
                                    }
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
                                </p>
                              </div>
                            </div>
                          </div>
                        )}

                        {linkText !== '' && (
                          <p className="text-md lg:text-xl font-sofia font-light">
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
                          </p>
                        )}
                      </div>

                      {/* Mental Disorder Image Container */}
                      <div className="relative rounded-3xl overflow-hidden h-[350px] lg:h-[400px] w-full lg:w-1/2">
                        <Image
                          src={image}
                          alt=""
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {title === 'Angst' && additionalData && (
                      <>
                        {/* Fear Subdisorders Box */}
                        <div className="relative mt-[4rem] rounded-[2.5rem] w-full h-full lg:h-[250px] bg-white drop-shadow-sm p-8 lg:p-0 flex flex-col lg:flex-row items-center gap-y-8">
                          {/* Fear Subdisorders Selection Row */}
                          <div className="flex flex-row flex-wrap lg:flex-nowrap gap-2.5 justify-center lg:absolute lg:-top-5 lg:left-1/2 lg:transform lg:-translate-x-1/2 z-10 ">
                            {additionalData.map((subdisorder, index) => {
                              return (
                                <button
                                  key={index}
                                  onClick={() => setFearSubdisorderIndex(index)}
                                  className={`${fearSubdisorderIndex === index ? 'bg-gradient-to-b from-[#d4e3c4] to-[#849b6f] text-white' : 'bg-gray-200 hover:bg-gray-300'} rounded-lg text-sm xl:text-lg font-sofia font-semibold ${fearSubdisorderIndex === index ? 'text-white' : 'text-black'} text-nowrap py-2 px-10 2xl:px-20 transition duration-300 ease-in-out`}
                                >
                                  {subdisorder.title}
                                </button>
                              )
                            })}
                          </div>

                          {/* Subdisorders Body Container */}
                          <div className="flex flex-col lg:px-16 gap-y-4">
                            <p className="text-md lg:text-lg font-sofia font-light">
                              {additionalData[fearSubdisorderIndex].description}
                            </p>
                            <p className="text-md lg:text-lg font-sofia font-light">
                              {
                                additionalData[
                                  fearSubdisorderIndex
                                ].linkText?.split('hier')[0]
                              }
                              <Link
                                className="inline-flex items-center underline"
                                href={additionalData[fearSubdisorderIndex].href}
                                target="_blank"
                              >
                                hier.
                                <Image
                                  src="/images/external_link.png"
                                  width={20}
                                  height={20}
                                  alt="External Link Icon"
                                  className="ml-2.5 mt-1"
                                />
                              </Link>
                            </p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                )
              })}
            </div>
          </section>
        </div>

        {/* Call-to-Action Section */}
        <section className="my-[4rem] lg:my-[6rem] px-8 md:px-32 lg:px-64 flex flex-col justify-center items-center gap-y-8">
          <h2 className="text-3xl text-center font-sofia font-bold lg:text-5xl ">
            Ontdek hoe je jouw mentale gezondheid een boost kunt geven
          </h2>
          <p className="mt-4 text-center font-sofia font-light text-lg lg:text-xl">
            Benieuwd wat je kan doen wanneer je een van bovenstaande klachten
            ervaart? Op de Mentaal fit pagina ontdek je wat je zelf kan doen om
            je mentale gezondheid een boost te geven en te onderhouden.
          </p>

          <Link
            href="/mentaal-fit"
            className="
    relative flex justify-center items-center rounded-full overflow-hidden h-[50px] w-full xl:w-1/2 2xl:w-1/3 mt-2
    bg-gradient-to-b from-[#d4e3c4] to-[#849b6f] text-white font-sofia font-bold text-lg xl:text-lg 
    leading-none"
          >
            {/* Pseudo-element for the hover effect */}
            <span className="absolute inset-0 bg-black opacity-0 rounded-full transition-opacity duration-300 ease-out z-0 hover:opacity-15"></span>

            {/* Text above the overlay */}
            <p className="relative z-10 pointer-events-none">
              Ga naar Mentaal fit
            </p>
          </Link>
        </section>

        {/* Workaround: scroll to top on route change */}
        <ScrollUp />
      </Layout>
    </>
  )
}

export default MentaleKlachtenPage
