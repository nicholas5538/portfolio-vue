// https://nuxt.com/docs/api/configuration/nuxt-config
const largeModules = ["radix-vue", "vue3-lottie"];

export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "192x192",
          href: "/android-chrome-192x192.png",
        },
        {
          rel: "apple-touch-icon",
          type: "image/png",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "mask-icon",
          type: "image/svg+xml",
          href: "/safari-pinned-tab.svg",
        },
      ],
      noscript: [{ children: "JavaScript is required" }],
    },
  },
  build: { analyze: true },
  css: ["~/assets/css/fonts.css", "~/assets/css/main.css"],
  devServer: { port: 5173 },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  experimental: {
    renderJsonPayloads: false,
    payloadExtraction: true,
    componentIslands: true,
  },
  modules: [
    "@nuxt/image",
    "@nuxt/test-utils/module",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Montserrat: {
            wght: "100..900",
          },
        },
      },
    ],
  ],
  plugins: ["~/plugins/Lottie.client"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: { grid: "autoplace" },
      ...(process.env.NODE_ENV === "production"
        ? { cssnano: { preset: ["default", { discardUnused: true }] } }
        : {}),
    },
  },
  runtimeConfig: {
    githubSecret: "",
    public: {
      githubBaseUrl: "https://api.github.com",
    },
  },
  srcDir: "src/",
  telemetry: false,
  typescript: { typeCheck: true },
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            const separatedModule = largeModules.find((module) =>
              id.includes(module)
            );
            if (separatedModule) return separatedModule;
          },
        },
      },
    },
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag === "iconify-icon",
    },
  },
});
