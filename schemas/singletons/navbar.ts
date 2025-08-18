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
    prepare(selection) {
      const count = selection.title?.length || 0
      return {
        title: `Navbar (${count} items)`,
      }
    },
  },
})
