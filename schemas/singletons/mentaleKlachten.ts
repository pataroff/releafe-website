import { DocumentIcon } from '@sanity/icons'
import { defineType } from 'sanity'

export default defineType({
  name: 'mentaleKlachten',
  title: 'Mentale klachten',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    {
      name: 'sections',
      title: 'Sections',
      description:
        'Reorder to control the order of sections on the Mentale klachten page.',
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
        title: 'Mentale klachten page',
      }
    },
  },
})
