/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'media.istockphoto.com',
          port: '',
          pathname: '/id/177373093/photo/**',
        },
        {
          protocol: 'https',
          hostname: 'media.istockphoto.com',
          port: '',
          pathname: '/id/1434687410/photo/**',
        },
        {
          protocol: 'https',
          hostname: 'media.istockphoto.com',
          port: '',
          pathname: '/id/488119238/photo/**',
        },
      ],
    // 
    },
  };
  
export default nextConfig;
  