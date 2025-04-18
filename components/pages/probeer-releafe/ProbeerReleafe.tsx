import React, { useState } from 'react'

import Layout from 'components/shared/Layout'
import ScrollUp from 'components/shared/ScrollUp'

import Link from 'next/link'
import Image from 'next/image'

import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

import HomePageHead from '../home/HomePageHead'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import axios from 'axios'

const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const ProbeerReleafePage = ({ settings, page }) => {
  const [hasSubscribed, setHasSubscribed] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!emailRegex.test(email)) {
      console.log('Invalid email address provided')
      return
    }

    try {
      const response = await axios.post('/api/subscribe', { email })
      console.log('Success:', response.data)
      setHasSubscribed(true)
    } catch (error) {
      console.error('Error:', error.response?.data || 'Unknown error')
      setHasSubscribed(false)
    }
  }

  return (
    <>
      <HomePageHead page={page} settings={settings} />
      <Layout settings={settings} route={'Probeer Releafe gratis'}>
        <section className="xl:min-h-[calc(100vh-120px)] bg-[#F7F7F7] xl:flex">
          <div className="flex flex-col-reverse justify-between xl:flex-row xl:justify-center xl:items-center max-w-[1440px] min-h-full mx-auto pt-[5rem] xl:pt-0 px-8 py-12">
            {/* Text Container */}
            <div className="flex flex-col gap-y-6 w-full xl:w-3/4 bg-white p-10 xl:p-12 rounded-3xl shadow-xl">
              <h1 className="font-sofia font-bold text-3xl xl:text-4xl 2xl:text-5xl">
                Releafe is live voor organisaties!
              </h1>

              <div className="space-y-6">
                <h3 className="font-sofia font-light text-md lg:text-lg xl:text-xl">
                  We zijn gestart met de uitrol van Releafe bij organisaties,
                  zoals bedrijven, onderwijsinstellingen en gemeentes. Zo kunnen
                  medewerkers, studenten en bewoners hun mentale welzijn
                  versterken. We streven ernaar om de app in{' '}
                  <strong>2026</strong> voor iedereen beschikbaar te stellen.
                </h3>
                <h3 className="font-sofia font-light text-md lg:text-lg xl:text-xl">
                  Wil jij graag gebruik maken van Releafe? Breng je werkgever,
                  onderwijsinstelling of gemeente op de hoogte en vraag hen
                  contact met ons op te nemen!
                </h3>

                <h3 className="font-sofia font-light text-md lg:text-lg xl:text-xl">
                  Wil je op de hoogte blijven van updates en de lancering voor
                  particulieren? Laat hier je e-mailadres achter.
                </h3>
              </div>

              {/* Email Container */}
              <div className="space-y-6">
                <h2 className="font-sofia font-bold text-xl xl:text-2xl 2xl:text-3xl">
                  📩 Blijf op de hoogte:
                </h2>
                {hasSubscribed ? (
                  <>
                    <h3 className="font-sofia font-light text-lg xl:text-xl 2xl:text-2xl">
                      You have subscribed successfully! 🎉
                    </h3>
                  </>
                ) : (
                  <form
                    className="flex flex-col items-center lg:flex-row gap-x-2 gap-y-3 w-full"
                    onSubmit={(e) => handleSubmit(e)}
                  >
                    <input
                      className="rounded-full bg-gray-100 w-full xl:w-2/3 font-sofia text-md xl:text-lg h-[50px] xl:h-[60px] p-6 outline-none z-10"
                      type="email"
                      placeholder="email@example.com"
                      required={true}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                      className="cursor-pointer flex justify-center items-center rounded-full h-[50px] xl:h-[60px] w-full xl:w-1/2 lg:w-1/3 bg-[#c5d5bc] hover:bg-[#b7c6ae] transform duration-300 ease-in-out 
                    font-sofia font-bold text-white text-lg lg:text-xl leading-none"
                      type="submit"
                      value="Meld je aan"
                    />
                  </form>
                )}
              </div>

              <div className="space-y-6">
                <h1 className="font-sofia font-bold text-xl xl:text-2xl 2xl:text-3xl">
                  🔗 Volg ons op social media voor de laatste updates:
                </h1>
                <Link
                  href="https://www.linkedin.com/company/releafeapp/"
                  target="_blank"
                  className="block w-fit h-fit"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-3xl xl:text-4xl 2xl:text-5xl"
                  />
                </Link>
              </div>
            </div>

            {/* Image Container */}
            <div className="w-full xl:w-1/2 h-[600px] lg:h-[700px] xl:h-[600px] 2xl:h-[700px] relative">
              <Image
                className="object-contain xl:scale-110"
                src="/images/probeer_releafe_gratis_perspective_image.png"
                alt=""
                fill
              />
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default ProbeerReleafePage
