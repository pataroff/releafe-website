import { defineType } from 'sanity'
import { CogIcon } from '@sanity/icons'

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
      name: 'siteKeywords',
      title: 'Site Keywords',
      type: 'string',
      description:
        'Comma-separated keywords for the <meta name="keywords"> tag.',
    },
    {
      name: 'siteRobots',
      title: 'Site Robots',
      type: 'text',
      description: 'Custom robots.txt rules.',
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
