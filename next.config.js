/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com'],
  },
  experimental: {
    serverActions: {
      enabled: true,
    },
  },
  /**
   * Configure custom HTTP headers to strengthen the site's security.
   * These headers are applied to every route and help protect against
   * common web vulnerabilities such as clickjacking, MIME sniffing,
   * and cross‑site scripting. The Content Security Policy restricts
   * where resources can be loaded from and limits dangerous features.
   */
  async headers() {
    return [
      {
        // Apply these headers to all routes in the application.
        source: '/(.*)',
        headers: [
          // Enforce HTTPS and preload HSTS
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          // Disable MIME-type sniffing
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // Prevent clickjacking by only allowing this site to frame itself
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          // Enable XSS protection in older browsers
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          // Control information sent in the Referer header
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // Restrict which browser features can be used on the site
          {
            key: 'Permissions-Policy',
            // Only allow geolocation on this site; disallow microphone, camera, etc.
            value: 'geolocation=(self), microphone=(), camera=(), fullscreen=(self)',
          },
          // Define a strong Content Security Policy
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self';",
              // Permit Google Tag Manager for analytics and allow inline scripts (for injected metadata)
              "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com;",
              // Allow inline styles for Tailwind and CSS modules
              "style-src 'self' 'unsafe-inline';",
              // Only load images from same origin, HTTPS domains, or data URIs
              "img-src 'self' data: https:;",
              // Limit API requests to this origin
              "connect-src 'self';",
              // Restrict font loading to self and data URIs
              "font-src 'self' data:;",
              // Disallow plugins like Flash
              "object-src 'none';",
              // Restrict which origins can embed this site
              "frame-ancestors 'self';",
            ].join(' '),
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
