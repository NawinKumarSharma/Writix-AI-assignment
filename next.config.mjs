/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com/",
        pathname: "/products",
      },
      {
        protocol: "https",
        hostname: "images-na.ssl-images-amazon.com",
        pathname: "/images",
      },
    ],
    domains: ["fakestoreapi.com", "images-na.ssl-images-amazon.com"],
  },
};

export default nextConfig;
