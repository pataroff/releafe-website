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
      type: 'string',
      description:
        'The link destination (can be http(s), mailto, or relative path)',
      validation: (Rule) =>
        Rule.required().custom((value) => {
          if (!value) return 'Required'
          if (
            value.startsWith('http://') ||
            value.startsWith('https://') ||
            value.startsWith('mailto:') ||
            value.startsWith('/')
          ) {
            return true
          }
          return 'Must start with "/", http://, https://, or mailto:'
        }),
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
