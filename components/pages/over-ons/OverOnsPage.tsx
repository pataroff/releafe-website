import React, { useState } from 'react'

import Layout from 'components/shared/Layout'
import ScrollUp from 'components/shared/ScrollUp'

import Link from 'next/link'
import Image from 'next/image'

import HomePageHead from '../home/HomePageHead'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

import { faLinkedinIn, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const coreValuesData = [
  {
    valueEmoji: '📌',
    valueTitle: 'Toegankelijkheid',
    valueDescription:
      'Iedereen verdient ondersteuning bij mentale gezondheid, zonder stigma.',
  },
  {
    valueEmoji: '🔧',
    valueTitle: 'Praktische tools',
    valueDescription:
      'Geen vrijblijvende adviezen, maar concrete stappen om je beter te voelen.',
  },
  {
    valueEmoji: '🌱',
    valueTitle: 'Persoonlijke groei',
    valueDescription:
      'Kleine, haalbare veranderingen maken een groot verschil op de lange termijn.',
  },
  {
    valueEmoji: '🤝🏻',
    valueTitle: 'Samenwerking',
    valueDescription:
      'We geloven dat de beste resultaten ontstaan door te luisteren naar gebruikers en samen te werken met experts op het gebied van psychologie en technologie.',
  },
  {
    valueEmoji: '❤️',
    valueTitle: 'Empathie',
    valueDescription:
      'We begrijpen wat onze gebruikers doormaken en ontwikkelen Releafe met hun behoeften en ervaringen in gedachten.',
  },
]

const teamData = [
  {
    name: 'Jan Grobbe',
    title: 'Oprichter van Releafe',
    description:
      'Jan heeft uit eigen ervaring ondervonden hoe ingrijpend mentale uitdagingen kunnen zijn. Met zijn bedrijfskundige achtergrond en strategische blik bouwt hij aan een toekomst waarin mentale gezondheid voor iedereen toegankelijk is.',
    photo: '/images/Jan_Photo.jpeg',
    socialMediaLinks: [
      {
        icon: faLinkedin,
        href: 'https://www.linkedin.com/in/jan-grobbe-b9158322/',
      },
    ],
  },
  {
    name: 'Nynke Dijk',
    title: 'Medeoprichter van Releafe',
    description:
      'Nynke’s betrokkenheid, zakelijke visie en expertise zijn essentieel om Releafe efficiënt en duurzaam te laten groeien.',
    photo: '/images/Nynke_Photo.jpg',
    socialMediaLinks: [
      {
        icon: faLinkedin,
        href: 'https://www.linkedin.com/in/nynkedijk/',
      },
    ],
  },
]

const OverOnsPage = ({ settings, page }) => {
  const [valuesActiveIndex, setValuesActiveIndex] = useState<number>(0)

  const handleValuesNext = () => {
    setValuesActiveIndex((prev) => (prev + 1) % coreValuesData.length)
  }

  const handleValuesPrev = () => {
    setValuesActiveIndex((prev) =>
      prev === 0 ? coreValuesData.length - 1 : prev - 1,
    )
  }

  return (
    <>
      <HomePageHead page={page} settings={settings} />
      <Layout settings={settings} route={'Over Ons'}>
        {/* Main Section */}
        <section className="min-h-[calc(100vh-120px)] bg-[#F7F7F7] pt-[5rem] xl:pt-0 xl:flex xl:flex-col xl:justify-center ">
          {/* Main Wrapper */}
          <div className="flex flex-col max-w-screen-xl mx-auto py-14 xl:pt-0 px-8 xl:px-16">
            {/* Main Container */}
            <div className="flex flex-col-reverse xl:flex-row justify-between items-center bg-white rounded-3xl xl:px-12 px-8 py-8 gap-y-8 drop-shadow-lg">
              {/* Text Container */}
              <div className="space-y-8 xl:w-1/2 w-full">
                <h2 className="font-sofia font-bold text-2xl xl:text-3xl 2xl:text-5xl">
                  Hoe is Releafe ontstaan?
                </h2>
                <p className="font-sofia font-light text-md xl:text-lg 2xl:text-xl">
                  Releafe is geboren uit persoonlijke ervaring met mentale
                  uitdagingen en de zoektocht naar toegankelijke ondersteuning.
                  Deze reis leidde tot het creëren van een app die inzichten,
                  oefeningen en begeleiding biedt om anderen te helpen grip te
                  krijgen op hun mentale welzijn.
                </p>
              </div>
              {/* Image Container */}
              <div className="relative rounded-3xl overflow-hidden xl:w-[400px] xl:h-[400px] h-[250px] w-full drop-shadow-md">
                <Image
                  src="/images/releafe_logo_white_background.png"
                  alt={'Releafe Logo'}
                  fill
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission & Our Vision Section */}
        <section>
          {/* Gradient Background */}
          <div className="bg-gradient-to-b from-[#c5d5bc] to-[#8fa58b] py-[4rem] xl:py-[6rem]">
            <div className="max-w-screen-xl mx-auto px-8 xl:px-16">
              <h2 className="font-sofia font-bold text-2xl xl:text-3xl 2xl:text-5xl text-center text-white">
                Onze Missie
              </h2>
              <div className="mt-[2rem] space-y-4 text-center text-white">
                <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                  Releafe helpt mensen grip te krijgen op hun mentale welzijn
                  met praktische en bewezen tools. Onze missie? Mentale zorg
                  toegankelijker, begrijpelijker en effectief maken, zodat
                  niemand er alleen voor staat.
                </p>

                <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                  Bij Releafe vind je een plek waar je op je eigen tempo en
                  zonder oordeel aan je mentale gezondheid kunt werken. We
                  geloven dat kleine stappen grote impact hebben, en we geven
                  iedereen de kans om die eerste stap te zetten.
                </p>
              </div>

              <h2 className="font-sofia font-bold text-2xl xl:text-3xl 2xl:text-5xl text-center mt-[4rem] xl:mt-[6rem] text-white">
                Onze visie: samen werken aan welzijn
              </h2>

              <p className="font-sofia font-light xl:text-lg 2xl:text-xl mt-[2rem] text-center text-white">
                Wij geloven in een wereld waarin je net zo makkelijk over je
                mentale gezondheid praat als over een gebroken been. Samen maken
                we het verschil door ervoor te zorgen dat iedereen, ongeacht hun
                situatie, toegang heeft tot de juiste ondersteuning en tools.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="mt-[4rem] lg:mt-[6rem] w-full px-5 lg:px-64">
          <h2 className="font-sofia font-bold text-2xl xl:text-3xl 2xl:text-5xl text-center">
            Onze kernwaarden:
          </h2>
          {/* Core Values Wrapper */}
          <div className="mt-[2rem] lg:mt-[4rem] mx-auto max-w-[1440px]">
            {/* Core Values Container */}
            <ul className="relative h-[450px]">
              {/* Core Values Box */}
              {coreValuesData.map((value, index) => {
                const { valueEmoji, valueTitle, valueDescription } = value

                // Calculate the relative position of the element
                const relativeIndex = index - valuesActiveIndex

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
                    className={`rounded-[2.5rem] absolute w-[350px] h-[450px] bg-gradient-to-b from-[#c5d5bc] to-[#8fa58b] px-8 py-10 flex flex-col justify-center items-center space-y-2 drop-shadow-md`}
                  >
                    <h2 className="mt-4 font-sofia font-normal text-5xl leading-tight text-white text-center">
                      {valueEmoji}
                    </h2>

                    <h3 className="font-sofia font-semibold text-white text-2xl text-center">
                      {valueTitle}
                    </h3>
                    <h3 className="font-sofia font-light text-white text-lg text-center">
                      {valueDescription}
                    </h3>
                  </li>
                )
              })}
            </ul>
            {/* Core Values Control Buttons */}
            <ul className="mt-[2rem] lg:mt-[4rem] w-full h-14 flex flex-row gap-x-4 justify-center lg:justify-end">
              <li
                className={`flex justify-center items-center rounded-full w-10 h-10 bg-[#c5d6bc] hover:bg-[#b7c6ae] transform duration-300 ease-in-out ${valuesActiveIndex === 0 ? 'opacity-50' : 'opacity-100'}`}
              >
                <button
                  className="h-[2.5rem] w-[2.5rem] rounded-full"
                  disabled={valuesActiveIndex === 0 ? true : false}
                  onClick={() => handleValuesPrev()}
                >
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    color="white"
                    size="lg"
                  />
                </button>
              </li>
              <li
                className={`flex justify-center items-center rounded-full w-10 h-10 bg-[#96a78d] hover:bg-[#8d9b81] transform duration-300 ease-in-out ${valuesActiveIndex === coreValuesData.length - 1 ? 'opacity-50' : 'opacity-100'}`}
              >
                <button
                  className="h-[2.5rem] w-[2.5rem] rounded-full"
                  disabled={
                    valuesActiveIndex === coreValuesData.length - 1
                      ? true
                      : false
                  }
                  onClick={() => handleValuesNext()}
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

        <section className="mt-[4rem] xl:mt-[6rem]">
          <h2 className="font-sofia font-bold text-2xl xl:text-3xl 2xl:text-5xl text-center">
            Het Team
          </h2>
          <div className="mt-[4rem] max-w-screen-xl mx-auto px-8 xl:px-16 2xl:px-0">
            <div className="flex flex-col xl:flex-row gap-8">
              {teamData.map((teamMember, index) => {
                const { name, title, photo, description, socialMediaLinks } =
                  teamMember

                return (
                  <div
                    key={index}
                    className="flex flex-col xl:flex-row w-full drop-shadow-md"
                  >
                    {/* Image Container */}
                    <div className="relative rounded-3xl rounded-b-none xl:rounded-bl-3xl xl:rounded-r-none overflow-hidden xl:w-1/2 xl:h-full h-[300px] w-full">
                      <Image
                        className={`object-cover ${index == 0 ? 'scale-110 object-[60%_100%]' : 'object-top'}`}
                        src={photo}
                        alt={`${name}'s Photo`}
                        fill
                      />
                    </div>

                    {/* Text Container */}
                    <div className="bg-white rounded-3xl rounded-t-none xl:rounded-tr-3xl xl:rounded-l-none xl:w-1/2 w-full p-8 space-y-4">
                      <h2 className="font-sofia font-bold xl:text-lg 2xl:text-xl text-lg">
                        {name}
                      </h2>
                      <h3 className="font-sofia font-light text-gray-500 xl:text-md 2xl:text-lg text-md">
                        {title}
                      </h3>
                      <h3 className="font-sofia font-light xl:text-md 2xl:text-md text-md xl:min-h-[250px]">
                        {description}
                      </h3>
                      {/* Divider Line */}
                      <div className="w-full border-[0.5px] border-[#c5d6bc]"></div>
                      {/* Social Media Links */}
                      <div className="flex flex-row space-x-4">
                        {socialMediaLinks.map((social, index) => {
                          return (
                            <Link key={index} href={social.href}>
                              <FontAwesomeIcon
                                icon={social.icon}
                                color="#96a78d"
                                size="2xl"
                              />
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <p className="py-[4rem] font-sofia font-light xl:text-lg 2xl:text-xl text-center">
              We werken nauw samen met een team van experts,
              ervaringsdeskundigen en professionals uit de regio. Door continu
              in gesprek te blijven met psychologen, therapeuten en
              technologie-experts, zorgen we ervoor dat Releafe aansluit bij de
              behoeften van onze gebruikers en gebaseerd is op de laatste
              wetenschappelijke inzichten. Zo maken we samen het verschil.
            </p>
          </div>
        </section>

        {/* <h2 className="font-sofia font-bold text-2xl xl:text-3xl 2xl:text-4xl mt-[2rem] xl:mt-[4rem]">
              Je staat er niet alleen voor
            </h2>

            <div className="space-y-8 mt-[2rem]">
              <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
                Mentale gezondheid? Daar helpen we je mee! Met Releafe pak je
                stap voor stap je doelen aan. Samen zorgen we dat je lekkerder
                in je vel zit.
              </p>

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
            </div> */}
        {/* Workaround: scroll to top on route change */}
        <ScrollUp />
      </Layout>
    </>
  )
}

export default OverOnsPage
