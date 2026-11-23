/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Sertakan file SQLite & engine Prisma ke dalam bundle serverless Vercel
    outputFileTracingIncludes: {
      "/**": ["./prisma/dev.db", "./node_modules/.prisma/client/*"],
    },
  },
};

export default nextConfig;
