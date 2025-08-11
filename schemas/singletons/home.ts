import { HomeIcon } from '@sanity/icons'

export default {
  name: 'home',
  title: 'Home',
  type: 'document',
  icon: HomeIcon,
  fields: [
    {
      name: 'sections',
      title: 'Sections',
      description: 'Reorder to control the order of sections on the Home page.',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'section' }],
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Home Page',
      }
    },
  },
}
