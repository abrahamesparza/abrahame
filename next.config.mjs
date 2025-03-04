import { withNextVideo } from 'next-video/process';

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(mp4|webm|ogg|swf|ogv)$/,
        type: "asset/resource",
      });
  
      return config;
    },
    images: {
      remotePatterns: [{
        protocol: 'https',
        hostname: 'esparza-studios.s3.amazonaws.com',
        pathname: '/professional/*'
      }]
    }
  };

export default withNextVideo(nextConfig);
