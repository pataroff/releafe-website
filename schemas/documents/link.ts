export default {
  name: 'linkItem',
  title: 'Link Item',
  type: 'document',
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'The text to display for the link (e.g. "Contact")',
      validation: (Rule) => Rule.required().min(1).max(100),
    },
    {
      name: 'url',
      title: 'Link (URL)',
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
      name: 'hasIcon',
      title: 'Has Icon?',
      type: 'boolean',
      initialValue: false,
      description: 'Toggle on if this link should have an icon/image badge',
    },
    {
      name: 'iconSrc',
      title: 'Icon',
      type: 'image',
      description:
        'Upload an icon for this link (shown if Has Icon is enabled)',
      hidden: ({ parent }) => !parent?.hasIcon,
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'url',
      media: 'iconSrc',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'Untitled Link',
        subtitle,
        media,
      }
    },
  },
}
