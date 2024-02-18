/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		typedRoutes: true,
		mdxRs: true,
	},
	images: {
		domains: ["images.ctfassets.net"],
	},
	pageExtensions: ["ts", "tsx", "mdx"],
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
