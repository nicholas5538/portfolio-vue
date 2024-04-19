import { expect, test } from "@nuxt/test-utils/playwright";

test.beforeEach(async ({ page, goto }) => {
  await goto("/", { waitUntil: "hydration" });
  await expect(page).toHaveTitle("Nicholas Yong's Portfolio");
});

test("Skills section heading, icons and lottie component", async ({ page }) => {
  // Test if the heading text Skills is visible
  await expect(page.getByRole("heading", { name: "Skills" })).toBeVisible();
  // Test if one of the icons is visible
  await expect(page.getByLabel("TypeScript")).toBeVisible();
  // Test if the lottie component is visible
  await expect(page.getByTestId("skillLottie")).toBeVisible();
});
