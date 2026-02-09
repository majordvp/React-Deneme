/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {}, // Next.js 16+ gereksinimi için eklendi
  transpilePackages: [
    'react-native',
    'react-native-web',
    'expo',
    '@expo/next-adapter',
    'react-native-screens',
    'react-native-safe-area-context',
    '@react-navigation/native',
    '@react-navigation/bottom-tabs',
    '@react-native-async-storage/async-storage',
  ],
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Web tarafında 'react-native' çağrılarını 'react-native-web'e yönlendiriyoruz
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
