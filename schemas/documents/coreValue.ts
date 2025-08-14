export default {
  name: 'coreValue',
  title: 'Core Value',
  type: 'document',
  fields: [
    {
      name: 'coreValueEmoji',
      title: 'Core Value Emoji',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'coreValueTitle',
      title: 'Core Value Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'coreValueDescription',
      title: 'Core Value Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'coreValueTitle',
      subtitle: 'coreValueDescription',
    },
  },
}
