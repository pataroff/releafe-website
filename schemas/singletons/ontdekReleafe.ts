import { DocumentIcon } from '@sanity/icons'

export default {
  name: 'ontdekReleafe',
  title: 'Ontdek Releafe',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    {
      name: 'sections',
      title: 'Sections',
      description:
        'Reorder to control the order of sections on the Ontdek Releafe page.',
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
        title: 'Ontdek Releafe Page',
      }
    },
  },
}
