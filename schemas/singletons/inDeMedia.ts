import { DocumentIcon } from '@sanity/icons'
import { defineType } from 'sanity'

export default defineType({
  name: 'inDeMedia',
  title: 'In de media',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    {
      name: 'sections',
      title: 'Sections',
      description:
        'Reorder to control the order of sections on the In de media page.',
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
        title: 'In de media page',
      }
    },
  },
})
