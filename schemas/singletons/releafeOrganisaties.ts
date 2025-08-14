import { DocumentIcon } from '@sanity/icons'

export default {
  name: 'releafeOrganisaties',
  title: 'Releafe voor organisaties',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    {
      name: 'sections',
      title: 'Sections',
      description:
        'Reorder to control the order of sections on the Releafe voor organisaties page.',
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
        title: 'Releafe voor organisaties Page',
      }
    },
  },
}
