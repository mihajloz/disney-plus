// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["firebasestorage.googleapis.com"],
    // Add the remotePatterns configuration for Firebase Storage URLs
    remotePatterns: [
      {
        protocol: "https", // The protocol of the URL
        hostname: "firebasestorage.googleapis.com", // The hostname of Firebase Storage
        port: "", // Port (leave it empty)
        pathname: "/v0/b/disney-plus-img.appspot.com/o/**", // Pathname pattern for Firebase Storage URLs
      },
    ],
  },
};
