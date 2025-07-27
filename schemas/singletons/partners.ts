import { UsersIcon } from '@sanity/icons'

export default {
  name: 'partners',
  title: 'Partners',
  type: 'document',
  icon: UsersIcon,
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'partners',
      title: 'Partners',
      type: 'array',
      of: [{ type: 'company' }],
      validation: (Rule) => Rule.min(1),
    },
  ],
}
