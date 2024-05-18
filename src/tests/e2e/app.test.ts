import { expect, test } from "@nuxt/test-utils/playwright";

test.beforeEach(async ({ page, goto }) => {
  await goto("/", { waitUntil: "hydration" });
  await expect(page).toHaveTitle("Nicholas Yong's Portfolio");
});

test("Test dark mode switch", async ({ page }) => {
  const themeButton = page.getByLabel("Appearance");
  const faSun = page.getByTestId("sun");
  const faMoon = page.getByTestId("moon");

  await expect(themeButton).toBeInViewport();
  await expect(faSun).toBeInViewport();
  await expect(faMoon).toBeHidden();

  await themeButton.click();
  await expect(faSun).toBeHidden();
  await expect(faMoon).toBeInViewport();
});

test.describe("Desktop viewport only", { tag: "@desktop" }, () => {
  test.skip(({ isMobile }) => isMobile);
  test("Browser's scrollIntoView API", async ({ page }) => {
    const projectListItem = page
      .getByRole("listitem")
      .filter({ hasText: "Projects" });
    const heroHeading = page.getByRole("heading", {
      name: "Hi There! I'm",
    });

    await expect(projectListItem).toBeInViewport();
    await expect(heroHeading).toBeInViewport();
    await projectListItem.click({ button: "left" });
    await expect(heroHeading).not.toBeInViewport();
  });
});

test.describe("Mobile viewport only", { tag: "@mobile" }, () => {
  test.skip(({ isMobile }) => !isMobile);

  test("Test navigation bar dropdown menu", async ({ page }) => {
    const dropdownContent = page.getByRole("menu");
    await expect(dropdownContent).toBeHidden();

    await page.getByRole("button", { expanded: false }).click();
    await expect(dropdownContent).toBeInViewport();
  });
});
