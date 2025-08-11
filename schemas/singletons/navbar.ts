import { LinkIcon } from '@sanity/icons'

export default {
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
}
