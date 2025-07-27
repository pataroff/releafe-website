export default {
  name: 'features',
  title: 'Features',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'feature' }],
      validation: (Rule) => Rule.min(1),
    },
  ],
}
