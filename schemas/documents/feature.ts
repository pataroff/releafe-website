export default {
  name: 'feature',
  title: 'Feature',
  type: 'document',
  fields: [
    {
      name: 'featureName',
      title: 'Feature Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'featureDescription',
      title: 'Feature Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'ctaElement',
      title: 'Call to Action Element',
      type: 'reference',
      to: [{ type: 'cta' }],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'featureName',
      media: 'image',
    },
  },
}
