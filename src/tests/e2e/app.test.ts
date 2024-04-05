import { expect, test } from "@nuxt/test-utils/playwright";

test.beforeEach(async ({ page, goto }) => {
  await goto("/", { waitUntil: "hydration" });
  await expect(page).toHaveTitle("Nicholas Yong's Portfolio");
});

test.describe("Desktop viewport only", { tag: "@desktop" }, () => {
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

  test("Hero section rendering", async ({ page }) => {
    await expect(
      page.getByAltText("Profile picture", { exact: true })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", {
        name: "Always looking out for opportunities.",
        exact: true,
      })
    ).toBeVisible();
  });

  test("Hero icon buttons", async ({ page }) => {
    const linkIcon = page.getByLabel(
      "Click to see more on my LinkedIn Profile",
      {
        exact: true,
      }
    );
    const gitIcon = page.getByLabel("Click to see more on my GitHub Profile", {
      exact: true,
    });

    await page.mouse.down();
    await expect(linkIcon).toBeVisible();
    await expect(gitIcon).toBeVisible();

    await linkIcon.hover();
    await expect(
      page.getByText("LinkedIn Profile", { exact: true })
    ).toBeVisible();

    await gitIcon.hover();
    await expect(
      page.getByAltText("GitHub Avatar image", {
        exact: true,
      })
    ).toBeVisible();
    await expect(
      page.getByText("Whatever happens, happens", { exact: true })
    ).toBeVisible();
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
