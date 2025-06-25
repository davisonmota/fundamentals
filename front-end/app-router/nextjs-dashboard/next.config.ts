import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    ppr: 'incremental' //'true' para todas as rotas
  }
};

export default nextConfig;
