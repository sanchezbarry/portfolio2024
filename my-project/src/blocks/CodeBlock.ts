import type { Block } from 'payload'

/**
 * A fenced code block for rich text. Payload's Lexical has no built-in
 * block-level code node (InlineCodeFeature is a text style, like bold), so this
 * supplies one via BlocksFeature.
 *
 * Rendered as <pre><code> by the converter in src/lib/posts.ts, which is what
 * the existing `.article > pre` rule in globals.css already styles.
 */
export const CodeBlock: Block = {
  slug: 'code',
  interfaceName: 'CodeBlock',
  labels: {
    singular: 'Code block',
    plural: 'Code blocks',
  },
  fields: [
    {
      name: 'language',
      type: 'select',
      defaultValue: 'javascript',
      required: true,
      options: [
        { label: 'JavaScript', value: 'javascript' },
        { label: 'TypeScript', value: 'typescript' },
        { label: 'JSON', value: 'json' },
        { label: 'HTML', value: 'html' },
        { label: 'CSS', value: 'css' },
        { label: 'Bash', value: 'bash' },
        { label: 'Python', value: 'python' },
        { label: 'SQL', value: 'sql' },
        { label: 'Plain text', value: 'plaintext' },
      ],
    },
    {
      name: 'code',
      type: 'code',
      required: true,
      admin: {
        language: 'javascript',
      },
    },
  ],
}
