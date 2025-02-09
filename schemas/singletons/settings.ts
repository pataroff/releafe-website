import { CogIcon } from '@sanity/icons'
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'navbarItems',
      title: 'Navbar Items',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'navbarItem' }] }],
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Displayed on social cards and search engine results.',
      options: { hotspot: true },
    }),
  ],
})
