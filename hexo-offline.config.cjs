module.exports = {
  globPatterns: ['**/*.{js,html,css,png,jpg,gif,svg,webp,eot,ttf,woff,woff2}'],
  globDirectory: 'public',
  swDest: 'public/service-worker.js',
  maximumFileSizeToCacheInBytes: 10485760,
  skipWaiting: true,
  clientsClaim: true,
  runtimeCaching: [
    // shields.io 页脚徽章
    {
      urlPattern: /^https:\/\/img\.shields\.io\/.*/,
      handler: 'CacheFirst'
    },
    // Artalk 评论系统
    {
      urlPattern: /^https:\/\/artalk\.luvhub\.cn\/.*/,
      handler: 'StaleWhileRevalidate'
    }
  ]
}