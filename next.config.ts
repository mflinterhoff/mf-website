import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Pin the workspace root to this project. Avoids Next inferring it from a
  // stray lockfile in a parent directory (e.g. ~/package-lock.json).
  turbopack: { root: __dirname },
  // Static export so the site can be hosted anywhere (Cloudflare Pages, Vercel,
  // Netlify, S3, …) without a Node server.
  output: 'export',
  // next/image optimization needs a server; disable for static export.
  images: { unoptimized: true },
  // Emit trailing-slash directories (index.html per route) for static hosts.
  trailingSlash: true,
}

export default nextConfig
