/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        // ⚠️ Warning: Only ignore TS/type errors if you're sure about what you're doing
        ignoreBuildErrors: true,
      },
      eslint: {
        // Ignore ESLint errors during build
        ignoreDuringBuilds: true,
      },
};

export default nextConfig;
