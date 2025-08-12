import React from 'react'
import { CustomPortableText } from 'components/shared/CustomPortableText'
import Layout from 'components/shared/Layout'
import ScrollUp from 'components/shared/ScrollUp'
import type { ArticlePayload, SettingsPayload } from 'types'

import { urlForImage } from 'lib/sanity.image'

import Link from 'next/link'
import Image from 'next/image'

export interface ArticlePageProps {
  article: ArticlePayload | undefined
}

const BlogPage = ({ article }: ArticlePageProps) => {
  if (!article) {
    return <div>Article not found.</div>
  }

  const {
    title,
    authorName,
    authorRole,
    coverImage,
    body,
    callToActionTitle,
    callToActionText,
    callToActionButtonText,
    callToActionLink,
    externalResources,
  } = article

  return (
    <>
      <section className="min-h-[calc(100vh-120px)] bg-[#F7F7F7] pt-14 xl:pt-0">
        <div className="max-w-[1440px] mx-auto py-14 px-8 lg:px-16 xl:px-32">
          {/* Title */}
          <h1 className="font-sofia font-bold text-3xl xl:text-4xl 2xl:text-5xl">
            {title}
          </h1>

          {/* Author */}
          <div className="flex flex-row flex-wrap lg:items-center lg:space-x-2 text-gray-600 font-sofia text-md xl:text-lg my-8">
            <span>{authorName}</span>
            <span className="pl-2 lg:pl-0">•</span>
            <span>{authorRole}</span>
          </div>

          {/* Cover Image */}
          {coverImage?.asset && (
            <div className="relative rounded-3xl overflow-hidden h-[200px] lg:h-[600px] xl:h-[700px] w-full my-8">
              <Image
                className="object-cover object-top"
                src={urlForImage(coverImage).url()}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 700px"
              />
            </div>
          )}

          {/* Article Body (Portable Text) */}
          {body && (
            <div className="mb-12 space-y-8">
              <CustomPortableText
                value={body}
                paragraphClasses="font-sofia font-light xl:text-lg 2xl:text-xl"
                listItemClasses="font-sofia font-light xl:text-lg 2xl:text-xl"
                bulletClasses="list-disc marker:text-gray-300 pl-6 space-y-4"
                numberClasses="list-decimal marker:text-gray-600 pl-6 space-y-4"
                headingClasses={{
                  h2: 'font-sofia font-bold text-2xl xl:text-3xl mb-6',
                  h3: 'font-sofia font-bold text-xl xl:text-2xl mb-4',
                }}
              />
            </div>
          )}

          {/* Call to Action */}
          {callToActionTitle &&
            callToActionText &&
            callToActionButtonText &&
            callToActionLink && (
              <div className="bg-white p-8 rounded-3xl shadow-md">
                <h3 className="font-sofia font-bold text-xl xl:text-2xl mb-4">
                  {callToActionTitle}
                </h3>
                <p className="mb-6 font-sofia font-light text-md xl:text-lg">
                  {callToActionText}
                </p>
                <Link
                  href={callToActionLink}
                  className="relative flex justify-center items-center rounded-full overflow-hidden h-[50px] lg:h-[60px] w-full lg:w-[18rem] mt-4 bg-gradient-to-b from-[#c5d5bc] to-[#8fa58b] text-white font-sofia font-bold text-md xl:text-lg leading-none"
                >
                  <span className="absolute inset-0 bg-black opacity-0 rounded-full transition-opacity duration-300 ease-out z-0 hover:opacity-15"></span>
                  <p className="relative z-10 pointer-events-none">
                    {callToActionButtonText}
                  </p>
                </Link>
              </div>
            )}

          {/* External Resources */}
          {externalResources?.length > 0 && (
            <div className="mt-12 text-md xl:text-lg text-gray-600">
              <CustomPortableText
                paragraphClasses="font-sofia font-light text-md xl:text-lg"
                value={externalResources}
              />
            </div>
          )}
        </div>
      </section>
      <ScrollUp />
    </>
  )
}

export default BlogPage
