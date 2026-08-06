import type { NextConfig } from "next";

const devOrigins = process.env.NODE_ENV === 'development' 
  ? ['localhost', '127.0.0.1'] 
  : [];

const nextConfig: NextConfig = {
  allowedDevOrigins: devOrigins,
  
  experimental: {
  },
};

export default nextConfig;
