// `/blog`, `/[slug]` and the sitemap all read Payload through the local API,
// which Next cannot see — so without this they are prerendered once at build
// time and a post published afterwards never shows up. These hooks mark the
// affected paths stale so the next visit re-renders them against the database.

import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'
import { revalidatePath } from 'next/cache'

import type { Post } from '../../payload-types'

// The index lists every published post and the sitemap enumerates them, so both
// go stale on any write — a new category only appears on /blog once this runs.
const SHARED_PATHS = ['/blog', '/sitemap.xml']

const revalidate = (paths: Iterable<string>) => {
  for (const path of paths) revalidatePath(path)
}

export const revalidatePost: CollectionAfterChangeHook<Post> = ({
  doc,
  previousDoc,
  req: { context },
}) => {
  // Local API writes from a script or the CLI run outside a request, where
  // revalidatePath would throw. Such callers set `disableRevalidate` to opt out.
  if (context.disableRevalidate) return doc

  const paths = new Set(SHARED_PATHS)

  if (doc._status === 'published') paths.add(`/${doc.slug}`)
  // Unpublishing, or publishing under a changed slug, has to drop the old URL.
  if (previousDoc?._status === 'published') paths.add(`/${previousDoc.slug}`)

  revalidate(paths)

  return doc
}

export const revalidatePostDelete: CollectionAfterDeleteHook<Post> = ({
  doc,
  req: { context },
}) => {
  if (context.disableRevalidate) return doc

  const paths = new Set(SHARED_PATHS)
  if (doc?.slug) paths.add(`/${doc.slug}`)

  revalidate(paths)

  return doc
}
