/** @type {import('next').NextConfig} */

// 👇 CHANGE THIS to your GitHub repository name (case-sensitive).
//    Your live URL will be https://<username>.github.io/<repo>/
const repo = "sagar-portfolio-new";

const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? `/${repo}` : "";

const nextConfig = {
  output: "export", // emit a static site into ./out
  images: { unoptimized: true }, // required: no image server on GitHub Pages
  basePath, // serve under /<repo> in production
  assetPrefix: basePath || undefined, // load JS/CSS from /<repo>
  env: { NEXT_PUBLIC_BASE_PATH: basePath }, // expose to client code
  trailingSlash: true, // GitHub Pages serves folder/index.html reliably
  reactStrictMode: true,
};

export default nextConfig;
