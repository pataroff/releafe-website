export default {
  name: 'company',
  title: 'Company / Partner',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Company Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      description: 'For accessibility and SEO',
    },
    {
      name: 'url',
      title: 'Website URL',
      type: 'url',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'logo',
    },
  },
}
