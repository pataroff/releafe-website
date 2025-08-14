export default {
  name: 'socialMedia',
  title: 'Social Media',
  type: 'document',
  fields: [
    {
      name: 'platform',
      title: 'Platform',
      type: 'string',
      options: {
        list: [
          { title: 'Facebook', value: 'facebook' },
          { title: 'Twitter', value: 'twitter' },
          { title: 'LinkedIn', value: 'linkedin' },
          { title: 'Instagram', value: 'instagram' },
          { title: 'YouTube', value: 'youtube' },
          { title: 'GitHub', value: 'github' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'url',
      title: 'Profile URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'platform',
      subtitle: 'url',
    },
  },
}
