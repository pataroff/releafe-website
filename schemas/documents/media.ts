export default {
  name: 'media',
  title: 'Media Item',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'isEmbedded',
      title: 'Is Embedded?',
      type: 'boolean',
      description:
        'Check this if the media is an embedded link (e.g., LinkedIn post)',
      initialValue: true,
    },
    {
      name: 'src',
      title: 'Source',
      type: 'url',
      hidden: ({ parent }) => parent?.isEmbedded === false,
      description: 'URL of the embedded media (required if isEmbedded = true)',
    },
    {
      name: 'videoFile',
      title: 'Video File',
      type: 'file',
      hidden: ({ parent }) => parent?.isEmbedded === true,
      description: 'Upload video file (required if isEmbedded = false)',
      options: {
        accept: 'video/*',
      },
    },
  ],
}
