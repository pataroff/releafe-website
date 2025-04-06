import React, { useState } from 'react'

import Layout from 'components/shared/Layout'
import ScrollUp from 'components/shared/ScrollUp'

import Link from 'next/link'
import Image from 'next/image'

import HomePageHead from '../home/HomePageHead'

const formatDate = (date: Date) => {
  return date.toLocaleDateString('nl-NL', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

const mediaData = [
  {
    title:
      'Hoe een diep dal leidde tot een app die helpt bij mentaal welzijn | SNN',
    date: formatDate(new Date('2025-02-27')),
    src: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7300879116768038912?collapsed=1',
    isEmbedded: true,
  },
  {
    title: 'MKB HV Releafe Video',
    date: formatDate(new Date('2024-10-20')),
    src: '/videos/MKB HV Releafe (1080p).mp4',
    isEmbedded: false,
  },
]

const InDeMediaPage = ({ settings, page }) => {
  return (
    <>
      <HomePageHead page={page} settings={settings} />
      <Layout settings={settings} route={'In de media'}>
        {/* Main Section */}
        <section className="min-h-[calc(100vh-120px)] bg-[#F7F7F7] pt-[5rem] xl:flex xl:pt-0 ">
          <div className="bg-white rounded-3xl shadow-xl my-[2rem] xl:my-[4rem] max-w-screen-xl mx-auto py-14 px-8 xl:px-16 flex flex-col gap-y-8">
            {mediaData.map((media, index) => {
              const { title, date, src, isEmbedded } = media
              return (
                <React.Fragment key={index}>
                  <div className="flex flex-col space-y-2">
                    <h3 className="font-sofia font-bold text-2xl">{title}</h3>
                    <p className="font-sofia font-normal text-lg">{date}</p>
                  </div>

                  {isEmbedded ? (
                    <iframe
                      className="w-full"
                      src={src}
                      height="399"
                      width="504"
                      title="Embedded post"
                    ></iframe>
                  ) : (
                    <video
                      src={src}
                      className="object-cover w-full  h-[400px]"
                      controls
                      playsInline
                    />
                  )}
                </React.Fragment>
              )
            })}
          </div>
        </section>
        {/* Workaround: scroll to top on route change */}
        <ScrollUp />
      </Layout>
    </>
  )
}

export default InDeMediaPage
