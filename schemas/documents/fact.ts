export default {
  name: 'fact',
  title: 'Fact Item',
  type: 'document',
  fields: [
    {
      name: 'factTitle',
      title: 'Fact Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'factDescription',
      title: 'Fact Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'factTitle',
      subtitle: 'factDescription',
    },
  },
}
