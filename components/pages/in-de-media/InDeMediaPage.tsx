import React, { useState } from 'react'

import Layout from 'components/shared/Layout'
import ScrollUp from 'components/shared/ScrollUp'

import Link from 'next/link'
import Image from 'next/image'

import HomePageHead from '../home/HomePageHead'

import { LinkedInEmbed } from 'react-social-media-embed'

const InDeMediaPage = ({ settings, page }) => {
  return (
    <>
      <HomePageHead page={page} settings={settings} />
      <Layout settings={settings} route={'In de media'}>
        {/* Main Section */}
        <section className="min-h-[calc(100vh-120px)] bg-[#F7F7F7] pt-[5rem] xl:flex xl:pt-0 ">
          <div className="bg-white rounded-3xl shadow-xl my-[2rem] xl:my-[4rem] max-w-screen-xl mx-auto py-14 px-8 xl:px-16 flex flex-col items-center gap-y-8">
            <h3 className="font-sofia font-bold text-2xl">
              MKB HV Releafe Video
            </h3>
            <video
              src={'/videos/MKB HV Releafe (1080p).mp4'}
              className="object-cover w-full  h-[400px]"
              controls
              playsInline
            />
            <h3 className="font-sofia font-bold text-2xl">
              Hoe een diep dal leidde tot een app die helpt bij mentaal welzijn
              | SNN
            </h3>
            <iframe
              className="w-full"
              src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7300879116768038912?collapsed=1"
              height="399"
              width="504"
              title="Embedded post"
            ></iframe>
          </div>
        </section>
        {/* Workaround: scroll to top on route change */}
        <ScrollUp />
      </Layout>
    </>
  )
}

export default InDeMediaPage
