/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // transpilePackages, Next.js'in node_modules içindeki bazı paketleri 
  // derlemesini (JS'e çevirmesini) sağlar.
  transpilePackages: [
    'react-native',
    'react-native-web',
    'expo',
    'expo-modules-core', // Yeni hata veren paketi de ekliyoruz
    'react-native-screens',
    'react-native-safe-area-context',
    '@react-navigation/native',
    '@react-navigation/bottom-tabs',
    '@react-native-async-storage/async-storage',
  ],
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Webpack (Kararlı Mühendislik) için alias
      'react-native$': 'react-native-web',
    };
    config.resolve.extensions = [
      '.web.js',
      '.web.ts',
      '.web.tsx',
      ...config.resolve.extensions,
    ];
    return config;
  },
};

module.exports = nextConfig;
