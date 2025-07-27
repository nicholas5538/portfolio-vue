import { expect, test } from "@nuxt/test-utils/playwright";

test.beforeEach(async ({ page, goto }) => {
  await goto("/", { waitUntil: "hydration" });
  await expect(page).toHaveTitle("Nicholas Yong's Portfolio");
});

test.describe("Hero section picture and headings", () => {
  test("Hero picture and headings", async ({ page }) => {
    await Promise.all([
      expect(
        page.getByAltText("My profile picture", { exact: true })
      ).toBeVisible(),
      expect(
        page.getByRole("heading", {
          name: "Always looking out for opportunities.",
          exact: true,
        })
      ).toBeVisible(),
    ]);
  });
});

test.describe("Hero icon buttons", () => {
  test.skip(({ isMobile }) => isMobile);

  test("Hero icon buttons' hover effect", async ({ page }) => {
    const linkedinIcon = page
      .getByLabel("Click to see more on my LinkedIn Profile", {
        exact: true,
      })
      .first();

    await Promise.all([
      expect(linkedinIcon).toBeVisible(),
      expect(linkedinIcon).toHaveAttribute("data-state", "closed"),
    ]);

    await linkedinIcon.hover();
    await Promise.all([
      expect(linkedinIcon).toHaveAttribute("data-state", "delayed-open"),
      expect(page.getByText("LinkedIn Profile", { exact: true })).toBeVisible(),
    ]);
  });
});
