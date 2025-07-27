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
  testDir: "./app/tests/e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? "blob" : "html",
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
  timeout: process.env.CI ? 45000 : 60000,
  webServer: {
    command: "pnpm run dev",
    url: "http://localhost:5173/",
    reuseExistingServer: !process.env.CI,
    stdout: "ignore",
    stderr: "pipe",
  },
});
