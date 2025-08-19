import { LinkIcon } from '@sanity/icons'
import { defineType } from 'sanity'

export default defineType({
  name: 'navbar',
  title: 'Navbar',
  type: 'document',
  icon: LinkIcon,
  fields: [
    {
      name: 'navbarItems',
      title: 'Navbar Items',
      description:
        'Reorder to control the order of navbar items on the Navbar.',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'navbarItem' }],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'navbarItems',
    },
    prepare() {
      return {
        title: 'Navbar',
      }
    },
  },
})
