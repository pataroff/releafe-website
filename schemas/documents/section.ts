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
          { title: 'Informational', value: 'informational' },
          { title: 'Custom Image', value: 'customImage' },
          { title: 'Header', value: 'header' },
          { title: 'Call To Action', value: 'cta' },
          { title: 'Hero', value: 'hero' },
          { title: 'Features', value: 'features' },
          { title: 'Companies', value: 'companies' },
          { title: 'Testimonials', value: 'testimonials' },
          { title: 'Articles', value: 'articles' },
          { title: 'FAQ', value: 'faq' },
        ],
      },
    },
    {
      name: 'sectionVariant',
      title: 'Section Variant',
      type: 'string',
      description: 'Identify variant of section for rendering purposes',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: 'Default', value: 'default' }, // GENERAL TYPE
          { title: 'Landing', value: 'landing' },
          { title: 'Informational', value: 'informational' }, // Mentale klachten and others
          { title: 'Informational (Grouped)', value: 'informationalGrouped' }, // Mentaal fit
          { title: 'Informational (Mockup)', value: 'informationalMockup' }, // Ontdek Releafe
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
      of: [
        { type: 'block' },
        {
          title: 'Inline CTA',
          type: 'reference',
          to: [{ type: 'cta' }],
        },
      ],
      hidden: ({ parent }) =>
        parent.sectionType === 'faq' ||
        parent.sectionType === 'articles' ||
        parent.sectionType === 'testimonials' ||
        parent.sectionType === 'companies',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      hidden: ({ parent }) =>
        parent.sectionType === 'header' ||
        parent.sectionType === 'faq' ||
        parent.sectionType === 'articles' ||
        parent.sectionType === 'testimonials' ||
        parent.sectionType === 'companies',
    },
    {
      name: 'customElements',
      title: 'Custom Elements',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'disorder' },
            { type: 'feature' },
            { type: 'company' },
            { type: 'testimonial' },
            { type: 'article' },
            { type: 'faq' },
          ],
        },
      ],
      hidden: ({ parent }) =>
        parent.sectionType === 'hero' || parent.sectionType === 'header',
    },
    {
      name: 'ctaElement',
      title: 'Call To Action Element',
      type: 'reference',
      to: [{ type: 'cta' }],
      hidden: ({ parent }) =>
        parent.sectionType === 'faq' ||
        parent.sectionType === 'testimonials' ||
        parent.sectionType === 'companies',
    },
  ],
  preview: {
    select: {
      sectionType: 'sectionType',
      title: 'title',
    },
    prepare({ sectionType, title }) {
      let displayType: string | undefined

      switch (sectionType) {
        case 'customImage':
          displayType = 'Custom Image'
          break
        case 'faq':
          displayType = 'FAQ'
          break
        case 'cta':
          displayType = 'Call To Action'
          break
        default:
          displayType =
            sectionType.charAt(0).toUpperCase() + sectionType.slice(1)
      }

      return {
        title: displayType,
        subtitle: title,
      }
    },
  },
}
