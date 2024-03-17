/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: "export",
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "/404",
      },
    ];
  },
};

export default nextConfig;
