export default {
  name: 'cta',
  title: 'Call To Action',
  type: 'document',
  fields: [
    {
      name: 'callToActionButtonText',
      title: 'Button Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'callToActionLink',
      title: 'Link',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'callToActionTitle',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'callToActionText',
      title: 'Text',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'callToActionButtonText',
    },
  },
}
