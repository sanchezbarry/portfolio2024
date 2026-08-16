/** @type {import('next').NextConfig} */

import 'dotenv/config';
import path from 'path';
import { fileURLToPath } from 'url';
import { withPayload } from '@payloadcms/next/withPayload';

const dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  // The repo root carries a stray package-lock.json from an older layout, so
  // Next cannot infer the workspace root on its own. Pin it to this app.
  turbopack: {
    root: dirname,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '**',
        pathname: '**',
      },
    ],
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ],
      },
    ];
  },
};

// withPayload registers Payload's server-only externals — without it the
// bundler tries to follow drizzle-kit's dynamic `require('@libsql/...')`.
export default withPayload(nextConfig);