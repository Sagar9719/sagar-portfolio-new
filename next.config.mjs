/** @type {import('next').NextConfig} */

// Repo name — only used for GitHub Pages subpath.
const repo = "sagar-portfolio-new";

// GitHub Pages sets this in its workflow; Vercel does not.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? `/${repo}` : "";

const nextConfig = {
  ...(isGithubPages ? { output: "export" } : {}),
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;