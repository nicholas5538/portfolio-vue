// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";
import { defineNuxtConfig } from "nuxt/config";

const largeModules = ["radix-vue", "@lottiefiles/dotlottie-vue"];

export default defineNuxtConfig({
  modules: [
    "@nuxt/image",
    "@nuxt/test-utils/module",
    "@nuxtjs/google-fonts",
    "@nuxt/eslint",
  ],
  plugins: ["~/plugins/Lottie.client"],
  devtools: {
    componentInspector: false,
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
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
  css: ["~/assets/css/fonts.css", "~/assets/css/main.css"],
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag === "iconify-icon",
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
      githubBaseUrl: "https://api.github.com/graphql",
    },
  },
  build: {
    analyze: {
      brotliSize: true,
      gzipSize: true,
      template: "treemap",
    },
  },
  devServer: { port: 5173 },
  future: {
    compatibilityVersion: 4,
  },
  experimental: {
    renderJsonPayloads: false,
    payloadExtraction: true,
    componentIslands: true,
  },
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
    externals: {
      inline: ["graphql"],
    },
    preset:
      process.env.NODE_ENV !== "production" ? "node-server" : "aws-amplify",
  },
  vite: {
    css: {
      transformer: "lightningcss",
      lightningcss: {
        targets: browserslistToTargets(browserslist(">= 0.25%")),
      },
    },
    build: {
      chunkSizeWarningLimit: 550,
      cssMinify: "lightningcss",
      emptyOutDir: true,
      minify: "terser",
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
      reportCompressedSize: true,
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
      ssrManifest: true,
    },
    plugins: [tailwindcss()],
  },
  typescript: {
    typeCheck: true,
    tsConfig: { compilerOptions: { strict: true } },
    nodeTsConfig: {
      compilerOptions: {
        strict: true,
      },
    },
  },
  telemetry: false,
  googleFonts: {
    display: "swap",
    families: {
      Montserrat: {
        wght: "400..700",
      },
    },
  },
});
