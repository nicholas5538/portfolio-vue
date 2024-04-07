import { fileURLToPath } from "node:url";
import { defineConfig, devices } from "@playwright/test";
import type { ConfigOptions } from "@nuxt/test-utils/playwright";

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
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"], isMobile: false },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"], isMobile: false },
    },
    {
      name: "Mobile Chrome",
      use: { ...devices["Pixel 7"], isMobile: true },
    },
  ],
  timeout: 30000,
});
