/* @type {import('next').NextConfig} */
import 'dotenv/config';

const nextConfig = {
  
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
};

export default nextConfig;
