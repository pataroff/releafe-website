export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'quote',
      title: 'Quote',
      type: 'text',
      description: 'The main testimonial text.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'authorName',
      title: 'Author Name',
      type: 'string',
      description: 'The author name.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'authorLocation',
      title: 'Author Location',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'authorRole',
      title: 'Author Role',
      type: 'string',
    },
    {
      name: 'topic',
      title: 'Topic',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
}
