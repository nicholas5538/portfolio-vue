// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: { analyze: true },
  css: ["~/assets/css/main.css"],
  devServer: { port: 5173 },
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  srcDir: "src/",
  typescript: { typeCheck: true },
});
