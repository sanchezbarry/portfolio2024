import type { CollectionConfig } from 'payload'

import { revalidatePost, revalidatePostDelete } from './hooks/revalidatePost'

const slugify = (value: string): string =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'sortOrder', 'date', '_status'],
  },
  access: {
    // Anonymous readers only ever see published posts. Logged-in editors see
    // everything, which is what makes the admin's draft preview work.
    read: ({ req: { user } }) => {
      if (user) return true
      return {
        _status: {
          equals: 'published',
        },
      }
    },
  },
  versions: {
    drafts: true,
  },
  hooks: {
    afterChange: [revalidatePost],
    afterDelete: [revalidatePostDelete],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: {
        position: 'sidebar',
        description: 'URL path. "arrays" is served at /arrays.',
      },
      hooks: {
        // Derive from the title when left blank, but never overwrite a slug
        // that already exists — published URLs must stay stable.
        beforeValidate: [
          ({ value, data }) => {
            if (typeof value === 'string' && value.length > 0) return slugify(value)
            if (typeof data?.title === 'string') return slugify(data.title)
            return value
          },
        ],
      },
    },
    {
      name: 'category',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar',
        description: 'Groups posts on the /blog index, e.g. "data structures".',
      },
    },
    {
      // Not named `order`: that is a reserved word in Postgres, and while
      // Drizzle would quote it, every hand-written query against the table
      // would have to remember to.
      name: 'sortOrder',
      label: 'Order in category',
      type: 'number',
      min: 1,
      admin: {
        position: 'sidebar',
        step: 1,
        description:
          'Position within the category on /blog — 1 first. Numbers only need to ascend, so gaps are fine. Leave blank and the post falls to the end of its category, oldest first.',
      },
    },
    {
      name: 'date',
      type: 'date',
      required: true,
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayOnly',
          displayFormat: 'd MMM yyyy',
        },
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
  ],
}
