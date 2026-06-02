# sanchezbarry.com

Personal portfolio site for Barry Sanchez — frontend developer at InvestCloud based in Singapore.

Built with **Next.js 14**, **TailwindCSS**, **Framer Motion**, and **TypeScript**. Features a project showcase, commercial client work, dev notes blog, and a contact form powered by EmailJS with reCAPTCHA.

## Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** TailwindCSS + custom Aceternity UI components
- **Animations:** Framer Motion
- **Blog:** Markdown files with gray-matter + remark
- **Contact form:** EmailJS + Google reCAPTCHA v2
- **CMS (CCK project):** Keystatic
- **Backend/Auth (CCK project):** Supabase
- **Deployment:** Vercel

## Getting Started

Copy `.env.example` to `.env.local` and fill in the required values, then:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

See `.env.example` for required keys (EmailJS credentials, reCAPTCHA site key).
