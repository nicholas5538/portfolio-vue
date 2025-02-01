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
    const githubToolTip = page
      .getByRole("link")
      .getByLabel("Click to see more on my GitHub Profile", { exact: true });
    const linkedinIcon = page
      .getByLabel("Click to see more on my LinkedIn Profile", {
        exact: true,
      })
      .first();

    await Promise.all([
      expect(githubToolTip).toBeVisible(),
      expect(githubToolTip).toHaveAttribute("data-state", "closed"),
      expect(linkedinIcon).toBeVisible(),
      expect(linkedinIcon).toHaveAttribute("data-state", "closed"),
    ]);

    await githubToolTip.hover();
    await Promise.all([
      expect(githubToolTip).toHaveAttribute("data-state", "open"),
      expect(
        page.getByText("Whatever happens, happens", { exact: true })
      ).toBeVisible(),
    ]);

    await linkedinIcon.hover({ force: true });
    await Promise.all([
      expect(linkedinIcon).toHaveAttribute("data-state", "delayed-open"),
      expect(page.getByText("LinkedIn Profile", { exact: true })).toBeVisible(),
    ]);
  });
});
