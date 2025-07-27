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
import page from 'schemas/documents/page'
import project from 'schemas/documents/project'
import duration from 'schemas/objects/duration'
import milestone from 'schemas/objects/milestone'
import timeline from 'schemas/objects/timeline'
import youtube from 'schemas/objects/youtube'
import home from 'schemas/singletons/home'
import settings from 'schemas/singletons/settings'
import { debugSecrets } from '@sanity/preview-url-secret/sanity-plugin-debug-secrets'

import navbarItem from 'schemas/objects/navbarItem'

import article from 'schemas/documents/article'
import category from 'schemas/documents/category'
import testimonial from 'schemas/documents/testimonial'
import faq from 'schemas/documents/faq'
import partners from 'schemas/singletons/partners'
import company from 'schemas/objects/company'
import features from 'schemas/singletons/features'
import feature from 'schemas/objects/feature'

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
      home,
      settings,
      features,
      partners,
      // Documents
      duration,
      page,
      project,
      article,
      category,
      testimonial,
      faq,
      // Objects
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
      structure: pageStructure([home, settings, features, partners]),
    }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    singletonPlugin([home.name, settings.name, features.name, partners.name]),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    // See url preview secrets in the schema for debugging
    process.env.NODE_ENV === 'development' && debugSecrets(),
  ].filter(Boolean),
})
