export default {
  name: 'section',
  title: 'Section',
  type: 'document',
  fields: [
    {
      name: 'sectionType',
      title: 'Section Type',
      type: 'string',
      description: 'Identify the type of section for rendering purposes',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: 'Default', value: 'default' },
          { title: 'Hero', value: 'hero' },
          { title: 'Feature', value: 'feature' },
          { title: 'Company', value: 'company' },
          { title: 'Testimonial', value: 'testimonial' },
        ],
      },
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'customElement',
      title: 'Custom Element',
      type: 'reference',
      to: [
        // Add other supported schemas you want here
        { type: 'testimonial' },
        { type: 'feature' },
        { type: 'company' },
      ],
    },
    {
      name: 'ctaElement',
      title: 'Call To Action Element',
      type: 'reference',
      to: [{ type: 'cta' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'body',
    },
  },
}
