import DynamicVariantSelect from 'components/shared/DynamicVariantSelect'

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
      components: {
        input: DynamicVariantSelect,
      },
    },
    {
      name: 'customElementsVariant',
      title: 'Custom Elements Variant',
      type: 'string',
      options: {
        list: [
          { title: 'None', value: 'none' }, // GENERAL TYPE
          { title: 'Angst', value: 'angst' },
          { title: 'Paniek', value: 'paniek' },
        ],
      },
      hidden: ({ parent }) => {
        const allowedTypes = ['informational']
        const allowedVariants = ['default']
        return !(
          allowedTypes.includes(parent?.sectionType) &&
          allowedVariants.includes(parent?.sectionVariant)
        )
      },
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      hidden: ({ parent }) => {
        const allowedVariants = ['informationalOrganisaties']
        return !allowedVariants.includes(parent?.sectionVariant)
      },
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      hidden: ({ parent }) => {
        const disallowedTypes = ['customImage', 'video', 'cta']
        return disallowedTypes.includes(parent?.sectionType)
      },
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

      hidden: ({ parent }) => {
        const disallowedTypes = [
          'features',
          'customImage',
          'companies',
          'testimonials',
          'articles',
          'faq',
          'cta',
          'infographic',
          'video',
          'coreValues',
          'footer',
        ]

        const disallowedVariants = [
          'informationalMedia',
          'informationalArticles',
        ]
        return (
          disallowedTypes.includes(parent?.sectionType) ||
          disallowedVariants.includes(parent?.sectionVariant)
        )
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      hidden: ({ parent }) => {
        const disallowedTypes = [
          'header',
          'features',
          'faq',
          'articles',
          'testimonials',
          'companies',
          'cta',
          'infographic',
          'video',
          'coreValues',
          'team',
          'footer',
        ]
        const disallowedVariants = [
          'informationalOverOns',
          'informationalMedia',
          'informationalArticles',
          'informationalResearch',
        ]
        return (
          disallowedTypes.includes(parent?.sectionType) ||
          disallowedVariants.includes(parent?.sectionVariant)
        )
      },
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
      hidden: ({ parent }) => {
        const disallowedTypes = [
          'hero',
          'header',
          'customImage',
          'cta',
          'video',
        ]

        const disallowedVariants = ['informationalResearch']
        const isDisallowedType = disallowedTypes.includes(parent?.sectionType)
        const isDisallowedVariant = disallowedVariants.includes(
          parent?.sectionVariant,
        )

        const isInformational = parent?.sectionType === 'informational'
        const hasCustomVariant = parent.customElementsVariant !== 'none'

        if (isDisallowedType || isDisallowedVariant) return true
        if (isInformational && !hasCustomVariant) return true
        return false
      },
    },
    {
      name: 'ctaElement',
      title: 'Call To Action Element',
      type: 'reference',
      to: [{ type: 'cta' }],
      hidden: ({ parent }) => {
        const disallowedTypes = [
          'header',
          'features',
          'customImage',
          'companies',
          'testimonials',
          'faq',
          'informational',
          'infographic',
          'video',
          'coreValues',
          'team',
          'footer',
        ]
        const disallowedVariants = ['informationalOverOns', 'cta']

        return (
          disallowedTypes.includes(parent?.sectionType) ||
          disallowedVariants.includes(parent?.sectionVariant)
        )
      },
    },
  ],
  preview: {
    select: {
      sectionType: 'sectionType',
      title: 'title',
    },
    prepare({ sectionType, title }) {
      let displayType

      if (!sectionType) {
        displayType = 'Untitled'
      } else {
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
      }

      return {
        title: displayType,
        subtitle: title || 'Untitled',
      }
    },
  },
}
