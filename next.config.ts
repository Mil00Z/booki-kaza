import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  images: {
   
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3-eu-west-1.amazonaws.com',
      },
    ],
  },
  reactStrictMode: true, // Active une vérification plus stricte (optionnel)
  compiler: {
    styledComponents: true, // Peut corriger certains problèmes liés aux entités dans les styles
  },
 
};
export default nextConfig;
