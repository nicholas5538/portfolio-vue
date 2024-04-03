import { expect, test } from "@nuxt/test-utils/playwright";

test.beforeEach(async ({ page, goto }) => {
  await goto("/", { waitUntil: "hydration" });
  await expect(page).toHaveTitle("Nicholas Yong's Portfolio");
  await expect(page.getByRole("heading")).toHaveText("NICHOLAS");
});

test.describe("Desktop viewport only", { tag: "@desktop" }, () => {
  test.skip(({ isMobile }) => isMobile);

  test("Test dark mode switch", async ({ page }) => {
    const themeButton = page.getByLabel("Appearance");
    const faSun = page.getByTestId("sun");
    const faMoon = page.getByTestId("moon");

    await expect(themeButton).toBeInViewport();
    await expect(faSun).toBeVisible();
    await expect(faMoon).not.toBeVisible();

    await themeButton.click();
    await expect(faSun).not.toBeVisible();
    await expect(faMoon).toBeVisible();
  });
});

test.describe("Mobile viewport only", { tag: "@mobile" }, () => {
  test.skip(({ isMobile }) => !isMobile);

  test("Test navigation bar dropdown menu", async ({ page }) => {
    // const dropdownContent = page.getByLabel(
    //   "radix-vue-dropdown-menu-trigger-1"
    // );
    const dropdownContent = page.getByRole("menu");
    await expect(dropdownContent).not.toBeVisible();

    await page.getByRole("button", { expanded: false }).click();
    await expect(dropdownContent).toBeVisible();
  });
});
