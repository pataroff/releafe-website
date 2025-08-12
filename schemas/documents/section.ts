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
          { title: 'Default', value: 'default' }, // GENERAL TYPE
          { title: 'Hero', value: 'hero' },
          { title: 'Features', value: 'features' },
          { title: 'Partners', value: 'partners' },
          { title: 'Testimonials', value: 'testimonials' },
          { title: 'Articles', value: 'articles' },
          { title: 'FAQ', value: 'faq' },
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
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'customElements',
      title: 'Custom Elements',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'testimonial' },
            { type: 'feature' },
            { type: 'company' },
          ],
        },
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
      sectionType: 'sectionType',
      title: 'title',
    },
    prepare({ sectionType, title }) {
      // Capitalize first letter and keep rest lowercase
      const capitalizedType =
        sectionType.charAt(0).toUpperCase() + sectionType.slice(1)

      return {
        title: capitalizedType,
        subtitle: title,
      }
    },
  },
}
