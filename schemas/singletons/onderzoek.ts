import { DocumentIcon } from '@sanity/icons'

export default {
  name: 'onderzoek',
  title: 'Onderzoek',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    {
      name: 'sections',
      title: 'Sections',
      description:
        'Reorder to control the order of sections on the Onderzoek page.',
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
        title: 'Onderzoek page',
      }
    },
  },
}
