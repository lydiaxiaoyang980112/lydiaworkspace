import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const repositoryBasePath = '/lydiaworkspace';

const nextConfig: NextConfig = {
  ...(isGitHubPages
    ? {
        output: 'export',
        trailingSlash: true,
        images: {
          unoptimized: true,
        },
        basePath: repositoryBasePath,
        assetPrefix: repositoryBasePath,
      }
    : {}),
};

export default nextConfig;
