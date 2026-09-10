# Self-hosted fonts

Loaded through `next/font/local` in `src/app/(frontend)/layout.tsx`, which
fingerprints and serves them from `/_next/static/media`. Converted to woff2
with fontTools; nothing here is fetched from a third-party CDN at runtime.

## Amiamie — body font

- Files: `Amiamie-Light.woff2` (300), `Amiamie-Regular.woff2` (400),
  `Amiamie-Black.woff2` (declared as 700)
- Designer: Mirat-Masson, after Sora Sagano — <http://www.miratmasson.com>
- Copyright: © 2022 Mirat-Masson
- License: SIL Open Font License — <https://openfontlicense.org>
- Source: <https://bestfreefonts.com/amiamie>

Body copy rests on Light 300, set on `body` in `globals.css`. The family has
no weight between Regular 400 and Black 900, so Black is declared as 700 to let
`font-bold` resolve to a real face rather than a synthesised one; `font-medium`
(500) resolves down to Regular. See the note in layout.tsx.

The OFL requires this notice to accompany the font files wherever they are
redistributed. Keep it alongside them.

## Bricolage Grotesque — headings

Pulled by `next/font/google`, not stored here. Applied to `h1`–`h6` by the
`!important` rule in `globals.css`.
