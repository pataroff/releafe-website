export default {
  name: 'disorder',
  title: 'Disorder',
  type: 'document',
  fields: [
    {
      name: 'disorderName',
      title: 'Disorder Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'disorderDescription',
      title: 'Disorder Description',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'disorderName',
    },
    prepare({ title, subtitle }) {
      return {
        title,
      }
    },
  },
}
