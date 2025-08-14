import { DocumentIcon } from '@sanity/icons'

export default {
  name: 'mentaalFit',
  title: 'Mentaal fit',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    {
      name: 'sections',
      title: 'Sections',
      description:
        'Reorder to control the order of sections on the Mentaal fit page.',
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
        title: 'Mentaal fit page',
      }
    },
  },
}
