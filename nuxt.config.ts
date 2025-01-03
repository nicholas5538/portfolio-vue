// https://nuxt.com/docs/api/configuration/nuxt-config
const largeModules = ["radix-vue", "@lottiefiles/dotlottie-vue"];

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
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
          type: "image/svg+xml",
          href: "/safari-pinned-tab.svg",
        },
        {
          rel: "apple-touch-icon",
          type: "image/png",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
      ],
      noscript: [{ innerHTML: "JavaScript is required" }],
    },
  },
  build: {
    analyze: {
      brotliSize: true,
      gzipSize: true,
      template: "treemap",
    },
  },
  compatibilityDate: "2024-09-28",
  css: ["~/assets/css/fonts.css", "~/assets/css/main.css"],
  devServer: { port: 5173 },
  devtools: {
    componentInspector: false,
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
  future: {
    compatibilityVersion: 4,
  },
  googleFonts: {
    display: "swap",
    families: {
      Montserrat: {
        wght: "400..700",
      },
    },
  },
  modules: ["@nuxt/image", "@nuxt/test-utils/module", "@nuxtjs/google-fonts"],
  nitro: {
    awsAmplify: {
      catchAllStaticFallback: true,
      imageOptimization: {
        cacheControl: "public, max-age=31536000, immutable",
        path: "/_amplify/image",
      },
      imageSettings: {
        dangerouslyAllowSVG: false,
        formats: ["image/webp", "image/jpeg"],
        minimumCacheTTL: 31536000,
        remotePatterns: [
          {
            protocol: "https",
            hostname: "www.nicholasyong.dev",
            pathname: "/_amplify/image/**",
          },
        ],
      },
    },
    preset:
      process.env.NODE_ENV !== "production" ? "node-server" : "aws-amplify",
  },
  plugins: ["~/plugins/Lottie.client"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: { flexbox: "no-2009", grid: "autoplace" },
      ...(process.env.NODE_ENV === "production"
        ? { cssnano: { preset: ["default", { discardUnused: true }] } }
        : {}),
    },
  },
  runtimeConfig: {
    cloudflareR2Region: process.env.NUXT_CLOUDFLARE_R2_REGION,
    cloudflareR2AccountID: process.env.NUXT_CLOUDFLARE_R2_ACCOUNT_ID,
    cloudflareR2AccessKey: process.env.NUXT_CLOUDFLARE_R2_ACCESS_KEY,
    cloudflareR2SecretAccessKey:
      process.env.NUXT_CLOUDFLARE_R2_SECRET_ACCESS_KEY,
    githubSecret: process.env.NUXT_GITHUB_SECRET,
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
