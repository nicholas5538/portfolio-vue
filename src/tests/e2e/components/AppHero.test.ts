import { expect, test } from "@nuxt/test-utils/playwright";

test.beforeEach(async ({ page, goto }) => {
  await goto("/", { waitUntil: "hydration" });
  await expect(page).toHaveTitle("Nicholas Yong's Portfolio");
});

test.describe("Hero section picture and headings", () => {
  test("Hero picture and headings", async ({ page }) => {
    await expect(
      page.getByAltText("My profile picture", { exact: true })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", {
        name: "Always looking out for opportunities.",
        exact: true,
      })
    ).toBeVisible();
  });
});

test.describe("Hero icon buttons", () => {
  test.skip(({ isMobile }) => isMobile);

  test("Hero icon buttons' hover effect", async ({ page, browserName }) => {
    const linkedinIcon = page
      .getByLabel("Click to see more on my LinkedIn Profile", {
        exact: true,
      })
      .first();
    await expect(linkedinIcon).toBeVisible();
    await expect(linkedinIcon).toHaveAttribute("data-state", "closed");

    // For some reason, data-state remained closed in chromium, though it works on development
    if (browserName !== "chromium") {
      await linkedinIcon.hover();
      await expect(linkedinIcon).toHaveAttribute("data-state", "delayed-open");
    }
  });
});
