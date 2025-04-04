/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'assets.aceternity.com',
            port: '',
            pathname: '/demos/**',
          },
          {
            protocol: 'https',
            hostname: 'avatar.vercel.sh',
            port: '',
            pathname: '/**',
          },
        ],
      },
      
};

export default nextConfig;
