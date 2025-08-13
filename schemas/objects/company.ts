export default {
  name: 'company',
  title: 'Company',
  type: 'document',
  fields: [
    {
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
    },
    {
      name: 'companyLogo',
      title: 'Company Logo',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'altText',
      title: 'Alt Text',
      type: 'string',
      description: 'For accessibility and SEO',
    },
    {
      name: 'companyWebsite',
      title: 'Company Website',
      type: 'url',
    },
  ],
  preview: {
    select: {
      title: 'companyName',
      media: 'companyLogo',
    },
  },
}
