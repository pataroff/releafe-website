import { DocumentIcon } from '@sanity/icons'
import { defineType } from 'sanity'

export default defineType({
  name: 'overOns',
  title: 'Over ons',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    {
      name: 'sections',
      title: 'Sections',
      description:
        'Reorder to control the order of sections on the Over ons page.',
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
        title: 'Over ons page',
      }
    },
  },
})
