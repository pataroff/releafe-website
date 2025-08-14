export default {
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    {
      name: 'teamMemberName',
      title: 'Team Member Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'teamMemberRole',
      title: 'Team Member Role',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'teamMemberDescription',
      title: 'Team Member Description',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'teamMemberImage',
      title: 'Team Member Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'teamMemberSocialMediaLinks',
      title: 'Team Member Social Media Links',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'socialMedia' }] }],
    },
  ],
  preview: {
    select: {
      title: 'teamMemberName',
      subtitle: 'teamMemberRole',
      media: 'teamMemberImage',
    },
  },
}
