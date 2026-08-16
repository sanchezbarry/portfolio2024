// Reads blog posts out of Payload, which is the sole source of blog content.
// The shapes here are a holdover from the markdown reader this replaced, kept
// so that ArticleListItem and the blog pages did not need to change.

import { getPayload } from 'payload'
import config from '@payload-config'
import moment from 'moment'
import { convertLexicalToHTMLAsync } from '@payloadcms/richtext-lexical/html-async'

import type { ArticleItem } from '../types'

const PUBLISHED = { _status: { equals: 'published' } } as const

// Code is inserted into an HTML string, so it must be escaped — one of the
// existing posts contains a literal `<br>` inside a snippet, which would
// otherwise render as an actual line break instead of as code.
const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

const getClient = async () => getPayload({ config })

/** Every published post, oldest first — matching the previous date sort. */
export const getSortedArticles = async (): Promise<ArticleItem[]> => {
  const payload = await getClient()

  const { docs } = await payload.find({
    collection: 'posts',
    where: PUBLISHED,
    sort: 'date',
    limit: 1000,
    depth: 0,
  })

  return docs.map((post) => ({
    // `id` carries the slug because that is what the links are built from.
    id: post.slug,
    title: post.title,
    date: post.date,
    category: post.category,
  }))
}

/** Published posts bucketed by category, for the /blog index. */
export const getCategorisedArticles = async (): Promise<Record<string, ArticleItem[]>> => {
  const sorted = await getSortedArticles()

  return sorted.reduce<Record<string, ArticleItem[]>>((acc, article) => {
    ;(acc[article.category] ||= []).push(article)
    return acc
  }, {})
}

/**
 * A single published post with its rich text already rendered to HTML, so the
 * article page can keep using the same `.article` styles it always has.
 */
export const getArticleData = async (slug: string) => {
  const payload = await getClient()

  const { docs } = await payload.find({
    collection: 'posts',
    where: { and: [PUBLISHED, { slug: { equals: slug } }] },
    limit: 1,
    depth: 1,
  })

  const post = docs[0]
  if (!post) return null

  const contentHtml = await convertLexicalToHTMLAsync({
    data: post.content as never,
    disableContainer: true,
    converters: ({ defaultConverters }) => ({
      ...defaultConverters,
      blocks: {
        // Emits the <pre> that `.article > pre` in globals.css already styles.
        code: ({ node }: { node: { fields: { code: string; language?: string } } }) => {
          const { code, language } = node.fields
          return `<pre><code class="language-${language ?? 'plaintext'}">${escapeHtml(code)}</code></pre>`
        },
      },
    }),
  })

  return {
    id: post.slug,
    contentHtml,
    title: post.title,
    category: post.category,
    date: moment(post.date).format('MMMM Do, YYYY'),
  }
}
