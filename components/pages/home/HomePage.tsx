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

export interface HomePageProps {
  settings?: SettingsPayload
  page?: HomePagePayload
  preview?: boolean
}

export function HomePage({ page, settings, preview }: HomePageProps) {
  const { overview, showcaseProjects, title = 'Personal website' } = page ?? {}

  return (
    <>
      <HomePageHead page={page} settings={settings} />
      <Layout settings={settings} preview={preview}>
        {/* Main Section */}
        <section>
          <div className="relative w-full h-[600px] z-0">
            {/* Hero Image Container */}
            <span className="absolute w-full h-full">
              <Image
                src="/images/hero_image.jpeg"
                alt="Hero Image"
                fill
                className="object-cover object-bottom"
              />
              <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-white to-transparent" />
            </span>
          </div>
          {/* Header Container */}
          {/* @TODO: Is there a better way of doing this? */}
          <div className="mt-[3rem] px-8">
            {title && <Header centered title={title} description={overview} />}
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
