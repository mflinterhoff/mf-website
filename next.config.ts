import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Static export so the site can be hosted anywhere (Cloudflare Pages, Vercel,
  // Netlify, S3, …) without a Node server.
  output: 'export',
  // next/image optimization needs a server; disable for static export.
  images: { unoptimized: true },
  // Emit trailing-slash directories (index.html per route) for static hosts.
  trailingSlash: true,
}

export default nextConfig
