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
          { title: 'Infographic', value: 'infographic' },
          { title: 'Custom Image', value: 'customImage' },
          { title: 'Video', value: 'video' },
          { title: 'Header', value: 'header' },
          { title: 'Footer', value: 'footer' },
          { title: 'Call To Action', value: 'cta' },
          { title: 'Hero', value: 'hero' },
          { title: 'Features', value: 'features' },
          { title: 'Companies', value: 'companies' },
          { title: 'Testimonials', value: 'testimonials' },
          { title: 'Core Values', value: 'coreValues' },
          { title: 'Articles', value: 'articles' },
          { title: 'FAQ', value: 'faq' },
          { title: 'Team', value: 'team' },
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
          { title: 'Call To Action', value: 'cta' }, // PROBEER RELEAFE
          { title: 'Informational', value: 'informational' }, // Mentale klachten and others
          { title: 'Informational (Grouped)', value: 'informationalGrouped' }, // Mentaal fit
          { title: 'Informational (Mockup)', value: 'informationalMockup' }, // Ontdek Releafe
          {
            title: 'Informational (Organisaties)', // Releafe voor organisaties
            value: 'informationalOrganisaties',
          },
          {
            title: 'Informational (Over ons)',
            value: 'informationalOverOns',
          },
          { title: 'Informational (Media)', value: 'informationalMedia' },
          { title: 'Informational (Articles)', value: 'informationalArticles' },
          { title: 'Informational (Research)', value: 'informationalResearch' },
        ],
      },
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      hidden: ({ parent }) =>
        parent.sectionVariant !== 'informationalOrganisaties',
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
          name: 'inlineCta',
          title: 'Inline CTA',
          type: 'reference',
          to: [{ type: 'cta' }],
        },
        { type: 'emailSubscription' },
        {
          name: 'inlineSocialMedia',
          title: 'Inline Social Media Link',
          type: 'reference',
          to: [{ type: 'socialMedia' }],
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
      name: 'video',
      title: 'Video',
      type: 'file',
      options: {
        accept: 'video/*', // restricts to video files
      },
      hidden: ({ parent }) => parent.sectionType !== 'video',
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
            { type: 'fact' },
            { type: 'coreValue' },
            { type: 'teamMember' },
            { type: 'media' },
            { type: 'linkItem' },
            { type: 'socialMedia' },
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
        case 'coreValues':
          displayType = 'Core Values'
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
