import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Force trailing slashes for consistent URLs
  trailingSlash: false,

  // Security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },

  // Redirect www to apex
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.madexus.com" }],
        destination: "https://madexus.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
