export default {
  name: 'cta',
  title: 'Call To Action',
  type: 'document',
  fields: [
    {
      name: 'callToActionButtonText',
      title: 'Call To Action Button Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'callToActionLink',
      title: 'Call To Action Link',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'callToActionTitle',
      title: 'Call To Action Title',
      type: 'string',
    },
    {
      name: 'callToActionText',
      title: 'Call To Action Text',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'callToActionButtonText',
    },
  },
}
