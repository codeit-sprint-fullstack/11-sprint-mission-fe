import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

const withVanillaExtract = createVanillaExtractPlugin();
/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  reactCompiler: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default withVanillaExtract(nextConfig);
