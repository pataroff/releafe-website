'use client'
/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...index]].tsx` route
 */
import { visionTool } from '@sanity/vision'
import { apiVersion, basePath, dataset, projectId } from 'lib/sanity.api'
import { locate } from 'plugins/locate'
import { pageStructure, singletonPlugin } from 'plugins/settings'
import { defineConfig } from 'sanity'
import { presentationTool } from 'sanity/presentation'
import { structureTool } from 'sanity/structure'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import duration from 'schemas/objects/duration'
import milestone from 'schemas/objects/milestone'
import timeline from 'schemas/objects/timeline'
import youtube from 'schemas/objects/youtube'
import { debugSecrets } from '@sanity/preview-url-secret/sanity-plugin-debug-secrets'

import navbarItem from 'schemas/objects/navbarItem'

import article from 'schemas/documents/article'
import category from 'schemas/documents/category'
import testimonial from 'schemas/documents/testimonial'
import faq from 'schemas/documents/faq'
import company from 'schemas/objects/company'
import feature from 'schemas/documents/feature'

// SINGLETONS
import settings from 'schemas/singletons/settings'
import navbar from 'schemas/singletons/navbar'
import home from 'schemas/singletons/home'
import mentaleKlachten from 'schemas/singletons/mentaleKlachten'
import mentaalFit from 'schemas/singletons/mentaalFit'
import ontdekReleafe from 'schemas/singletons/ontdekReleafe'
import releafeOrganisaties from 'schemas/singletons/releafeOrganisaties'
import overOns from 'schemas/singletons/overOns'
import inDeMedia from 'schemas/singletons/inDeMedia'
import blogs from 'schemas/singletons/blogs'
import onderzoek from 'schemas/singletons/onderzoek'
import probeerReleafe from 'schemas/singletons/probeerReleafe'
import footer from 'schemas/singletons/footer'
// DOCUMENTS
import section from 'schemas/documents/section'
import teamMember from 'schemas/documents/teamMember'
import coreValue from 'schemas/documents/coreValue'
import fact from 'schemas/documents/fact'
import disorder from 'schemas/documents/disorder'
import cta from 'schemas/documents/cta'
import socialMedia from 'schemas/documents/socialMedia'
import media from 'schemas/documents/media'
import emailSubscription from 'schemas/objects/emailSubscription'
import link from 'schemas/documents/link'

const title = process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE

export default defineConfig({
  basePath,
  projectId: projectId || '',
  dataset: dataset || '',
  title,
  schema: {
    // If you want more content types, you can add them to this array
    types: [
      // Singletons
      settings,
      navbar,
      home,
      mentaleKlachten,
      mentaalFit,
      ontdekReleafe,
      releafeOrganisaties,
      overOns,
      inDeMedia,
      blogs,
      onderzoek,
      probeerReleafe,
      footer,
      // Documents
      link,
      section,
      cta,
      duration,
      article,
      category,
      testimonial,
      fact,
      faq,
      disorder,
      coreValue,
      teamMember,
      socialMedia,
      media,
      // Objects
      emailSubscription,
      milestone,
      timeline,
      youtube,
      navbarItem,
      feature,
      company,
    ],
  },
  plugins: [
    presentationTool({
      locate,
      previewUrl: {
        previewMode: {
          enable: '/api/draft',
        },
      },
    }),
    structureTool({
      structure: pageStructure([
        settings,
        navbar,
        home,
        mentaleKlachten,
        mentaalFit,
        ontdekReleafe,
        releafeOrganisaties,
        overOns,
        inDeMedia,
        blogs,
        onderzoek,
        probeerReleafe,
        footer,
      ]),
    }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    singletonPlugin([
      settings.name,
      navbar.name,
      home.name,
      mentaleKlachten.name,
      mentaalFit.name,
      ontdekReleafe.name,
      releafeOrganisaties.name,
      overOns.name,
      inDeMedia.name,
      blogs.name,
      onderzoek.name,
      probeerReleafe.name,
      footer.name,
    ]),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    // See url preview secrets in the schema for debugging
    process.env.NODE_ENV === 'development' && debugSecrets(),
  ].filter(Boolean),
})
