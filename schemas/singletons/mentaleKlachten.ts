import { DocumentIcon } from '@sanity/icons'

export default {
  name: 'mentaleKlachten',
  title: 'Mentale Klachten',
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
        title: 'Mentale Klachten Page',
      }
    },
  },
}
