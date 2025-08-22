import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'navbarItem',
  title: 'Navbar Item',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'hasSubLinks',
      title: 'Has Sub Links?',
      type: 'boolean',
    }),
    defineField({
      name: 'subLinks',
      title: 'Sub Links',
      type: 'array',
      of: [
        defineField({
          name: 'subLink',
          title: 'Sub Link',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'slug',
              title: 'Slug',
              type: 'slug',
              options: {
                source: (_doc, { parent }) =>
                  (parent as { title?: string })?.title,
                maxLength: 100,
              },
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
      description: 'Optional sub-links for dropdown menus like "Over"',
      hidden: ({ parent }) => !parent?.hasSubLinks,
    }),
  ],
})
