import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // generate static files
  images: { 
    unoptimized: true, // disables Next.js image optimization for static export
  },
  basePath: '/scrimba-tutorial-printforge', // repo name
  assetPrefix: '/scrimba-tutorial-printforge/', // ensures assets load correctly on GitHub Pages
};

export default nextConfig;