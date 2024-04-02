import { fileURLToPath } from "node:url";
import { defineConfig, devices } from "@playwright/test";
import type { ConfigOptions } from "@nuxt/test-utils/playwright";

const devicesToTest = [
  "Desktop Chrome",
  "Desktop Firefox",
  "iPhone 14 Pro",
] satisfies Array<string | (typeof devices)[string]>;

export default defineConfig<ConfigOptions>({
  use: {
    trace: "on-first-retry",
    nuxt: {
      rootDir: fileURLToPath(new URL(".", import.meta.url)),
    },
  },
  testDir: "./src/tests/e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  projects: devicesToTest.map((p) => ({ name: p, use: devices[p] })),
  timeout: 30000,
});
