export default {
  name: 'faq',
  title: 'FAQ Item',
  type: 'document',
  fields: [
    {
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'answer',
      title: 'Answer',
      type: 'text',
      description: 'Provide a clear and concise answer to the question.',
      validation: (Rule) => Rule.required(),
    },
  ],
}
