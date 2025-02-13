import React, { useState } from 'react'

import Layout from 'components/shared/Layout'
import ScrollUp from 'components/shared/ScrollUp'

import Link from 'next/link'
import Image from 'next/image'

import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

import HomePageHead from '../home/HomePageHead'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProbeerReleafeGratisPage = ({ settings, page }) => {
  const [email, setEmail] = useState<string>('')

  return (
    <>
      <HomePageHead page={page} settings={settings} />
      <Layout settings={settings} route={'Probeer Releafe gratis'}>
        <section className="min-h-[calc(100vh-120px)] bg-[#F7F7F7]">
          <div className="flex flex-row justify-center items-center xl:gap-x-16 2xl:gap-x-32 xl:max-w-screen-xl 2xl:max-w-[1440px] h-full mx-auto xl:py-14">
            {/* Text Container */}
            <div className="flex flex-col xl:gap-y-6 2xl:gap-y-10 w-2/3 2xl:w-2/3 bg-white p-12 rounded-3xl shadow-xl">
              <h1 className="font-sofia font-bold xl:text-4xl 2xl:text-5xl">
                Releafe komt eraan!
              </h1>

              <div className="space-y-6">
                <h3 className="font-sofia font-light xl:text-lg 2xl:text-xl">
                  We zijn op dit moment hard aan het werk om de Releafe-app af
                  te ronden. Onze planning is om de app in{' '}
                  <strong>mei 2025</strong> te lanceren, zodat jij Releafe
                  gratis kunt proberen en je mentale welzijn een boost kunt
                  geven.
                </h3>
                <h3 className="font-sofia font-light xl:text-lg 2xl:text-xl">
                  Wil je als eerste op de hoogte zijn van updates en de
                  lancering? Laat hier je e-mailadres achter en we houden je op
                  de hoogte!
                </h3>
              </div>

              {/* Email Container */}
              <div className="space-y-6">
                <h2 className="font-sofia font-bold xl:text-2xl 2xl:text-3xl">
                  📩 Blijf op de hoogte:
                </h2>
                {/* Email entry field + button 'Meld je aan' */}
                <form
                  className="flex flex-col items-center lg:flex-row gap-x-2 gap-y-3 w-full"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    className="rounded-full bg-gray-100 w-2/3 font-sofia text-md xl:text-lg h-[50px] xl:h-[60px] p-6 outline-none z-10"
                    type="email"
                    placeholder="email@example.com"
                    required={true}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    className="cursor-pointer flex justify-center items-center rounded-full h-[50px] xl:h-[60px] w-1/2 lg:w-1/3 bg-[#c5d5bc] hover:bg-[#b7c6ae] transform duration-300 ease-in-out 
                    font-sofia font-bold text-white text-lg lg:text-xl leading-none"
                    type="submit"
                    value="Meld je aan"
                  />
                </form>
              </div>

              <div className="space-y-6">
                <h1 className="font-sofia font-bold xl:text-2xl 2xl:text-3xl">
                  🔗 Volg ons op social media voor de laatste updates:
                </h1>
                <Link
                  href="https://www.linkedin.com/company/releafeapp/"
                  target="_blank"
                  className="block w-fit h-fit"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="xl:text-4xl 2xl:text-5xl"
                  />
                </Link>
              </div>
            </div>

            {/* Image Container */}
            <div className="xl:w-1/3 2xl:w-1/3 h-[600px] xl:h-[600px] 2xl:h-[700px] relative">
              <Image
                className="object-contain xl:scale-110 mt-4"
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

export default ProbeerReleafeGratisPage
