import path from 'path'
import { fileURLToPath } from 'url'

import { postgresAdapter } from '@payloadcms/db-postgres'
import { BlocksFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { buildConfig } from 'payload'
import sharp from 'sharp'

import { CodeBlock } from './blocks/CodeBlock'
import { Media } from './collections/Media'
import { Posts } from './collections/Posts'
import { Users } from './collections/Users'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  // The site already serves its own routes under /api (testimonials,
  // verify-recaptcha, testimonialphoto/upload). Payload's REST API is moved
  // aside so the two never contend for the same path.
  routes: {
    api: '/payload-api',
  },
  collections: [Posts, Media, Users],
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [...defaultFeatures, BlocksFeature({ blocks: [CodeBlock] })],
  }),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    // Drizzle's dev "push" mode syncs schema changes automatically, but this
    // project points local dev at the same Neon database as production — so a
    // push here is a push to prod. Migrations only, in every environment.
    // Workflow for a schema change: `npm run payload migrate:create <name>`,
    // commit the generated file, then `npm run payload migrate`.
    push: false,
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    vercelBlobStorage({
      collections: {
        // Namespaced under cms/ because this blob store is shared with the
        // testimonial photos, which live at the root. /api/testimonials lists
        // the whole store, so without a prefix every CMS upload would show up
        // on the homepage as a testimonial.
        [Media.slug]: { prefix: 'cms' },
      },
      token: process.env.BLOB_READ_WRITE_TOKEN || '',
    }),
  ],
})
