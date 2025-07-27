import { defineVitestConfig } from "@nuxt/test-utils/config";

export default defineVitestConfig({
  test: {
    environment: "nuxt",
    coverage: {
      provider: "istanbul",
      reporter: ["text", "json", "json-summary", "html"],
      reportOnFailure: true,
      reportsDirectory: "coverage",
    },
    environmentOptions: {
      nuxt: {
        mock: {
          intersectionObserver: true,
        },
      },
    },
    exclude: [
      "**/node_modules/**",
      "**/dist/**",
      "**/cypress/**",
      "**/.{idea,git,cache,output,temp}/**",
      "**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*",
      "./app/tests/e2e/**",
      "./app/constants/**",
    ],
    include: ["./app/tests/ut/**/*.{test,spec}.ts"],
    server: {
      deps: {
        inline: ["vitest-canvas-mock"],
      },
    },
    setupFiles: ["./vitest.setup.ts"],
  },
});
