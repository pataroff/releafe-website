import { DocumentIcon } from '@sanity/icons'

export default {
  name: 'probeerReleafe',
  title: 'Probeer Releafe',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    {
      name: 'sections',
      title: 'Sections',
      description:
        'Reorder to control the order of sections on the Probeer Releafe page.',
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
        title: 'Probeer Releafe page',
      }
    },
  },
}
