/** @type {import('next').NextConfig} */
const nextConfig = {
  skipTrailingSlashRedirect: true,
  reactStrictMode: false,
  experimental: {
    typedRoutes: true,
  },
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      { source: "/kaliska", destination: "/kaliska/", permanent: false },
    ];
  },
  async rewrites() {
    return [
      { source: "/kaliska/:path*", destination: "http://srv71.mikr.us:40457/:path*" },
    ];
  },
  webpack: (config) => {
    // ... other rules

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
        },
      ],
      type: "javascript/auto",
      issuer: {
        and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
      },
    });

    return config;
  },
};

module.exports = nextConfig;
