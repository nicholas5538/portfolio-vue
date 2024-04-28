import { expect, test } from "@nuxt/test-utils/playwright";

test.beforeEach(async ({ page, goto }) => {
  await goto("/", { waitUntil: "hydration" });
  await expect(page).toHaveTitle("Nicholas Yong's Portfolio");
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

  test("Browser's scrollIntoView API", async ({ page }) => {
    const experienceListItem = page
      .getByRole("listitem")
      .filter({ hasText: "Experience" });
    const experienceHeading = page.getByRole("heading", {
      name: "🧑‍💻Experience",
      exact: true,
    });

    await expect(experienceListItem).toBeInViewport();
    await expect(experienceHeading).not.toBeInViewport();

    // TODO: In the future, check whether the experienceListItem is not in the viewport once useScrollDirection has been implemented
    await experienceListItem.click({ button: "left" });
    await expect(experienceHeading).toBeInViewport();
  });
});

test.describe("Mobile viewport only", { tag: "@mobile" }, () => {
  test.skip(({ isMobile }) => !isMobile);

  test("Test navigation bar dropdown menu", async ({ page }) => {
    const dropdownContent = page.getByRole("menu");
    await expect(dropdownContent).not.toBeVisible();

    await page.getByRole("button", { expanded: false }).click();
    await expect(dropdownContent).toBeVisible();
  });
});
