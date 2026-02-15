module.exports = {
  globDirectory: "dist/",
  globPatterns: ["**/*.{js,css,html,png,jpg,svg,woff2,json}"],
  swDest: "dist/sw.js",

  modifyURLPrefix: {
    "/MiniQR/": "/",
  },

  navigateFallback: '/MiniQR/index.html',
  navigateFallbackDenylist: [/^\/api/],

  runtimeCaching: [
    {
      urlPattern: ({ url }) => url.pathname.startsWith("/api/"),
      handler: "NetworkFirst",
      options: {
        cacheName: "api-cache",
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 24 * 60 * 60,
        },
      },
    },
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg|webp|avif)$/,
      handler: "CacheFirst",
      options: {
        cacheName: "images",
        expiration: {
          maxEntries: 100,
          maxAgeSeconds: 30 * 24 * 60 * 60,
        },
      },
    },
  ],
  cleanupOutdatedCaches: true,
  skipWaiting: true,
  clientsClaim: true,
};
