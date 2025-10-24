// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   /* config options here */
//   reactCompiler: true,
// };

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'i.pravatar.cc'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      exclude: /node_modules/,
      use: ['raw-loader', 'glslify-loader'],
    });
    return config;
  },
}

// module.exports = nextConfig



export default nextConfig;
