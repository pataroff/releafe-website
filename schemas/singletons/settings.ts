import { CogIcon } from '@sanity/icons'

import { defineType } from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: CogIcon,
  fields: [
    {
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
      description:
        'Global site title used in the header and default meta title.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'siteDescription',
      title: 'Site Description',
      type: 'text',
      description: 'Global default meta description for SEO.',
    },
    {
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Displayed on social cards and search engine results.',
      options: { hotspot: true },
    },
  ],
  preview: {
    select: {
      title: 'siteTitle',
    },
  },
})
