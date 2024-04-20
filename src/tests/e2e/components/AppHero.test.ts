import { expect, test } from "@nuxt/test-utils/playwright";

test.beforeEach(async ({ page, goto }) => {
  await goto("/", { waitUntil: "hydration" });
  await expect(page).toHaveTitle("Nicholas Yong's Portfolio");
});

test.describe("Hero section picture and headings", () => {
  test("Hero picture and headings", async ({ page }) => {
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
});

test.describe("Hero icon buttons", () => {
  test.skip(({ isMobile }) => isMobile);

  test("Hero icon buttons' hover effect", async ({ page }) => {
    const linkIcon = page.getByLabel(
      "Click to see more on my LinkedIn Profile",
      {
        exact: true,
      }
    );
    const gitIcon = page.getByLabel("Click to see more on my GitHub Profile", {
      exact: true,
    });
    await expect(gitIcon).toBeVisible();
    await expect(gitIcon).toHaveAttribute("data-state", "closed");

    await linkIcon.hover();
    await expect(
      page.getByText("LinkedIn Profile", { exact: true })
    ).toBeVisible();

    await gitIcon.hover();
    await expect(gitIcon).toHaveAttribute("data-state", "open");
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
