import { LinkIcon } from '@sanity/icons'

export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  icon: LinkIcon,
  fields: [
    {
      name: 'sections',
      title: 'Sections',
      description: 'Reorder to control the order of sections on the Footer.',
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
        title: 'Footer',
      }
    },
  },
}
