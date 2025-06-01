import { expect, test } from "@nuxt/test-utils/playwright";

test("App project section heading, and tooltip", async ({
  page,
  goto,
  isMobile,
}) => {
  await goto("/", { waitUntil: "hydration" });
  await expect(page).toHaveTitle("Nicholas Yong's Portfolio");

  const externalLink = page
    .getByLabel("Click to see more on my Website", { exact: true })
    .first();
  const projectImage = page.getByAltText("Voucher Management");

  if (isMobile) {
    await page.getByRole("button", { expanded: false }).tap();
    await page.getByRole("menuitem").filter({ hasText: "Projects" }).tap();
    await expect(projectImage).toBeHidden();
  } else {
    await page
      .getByRole("listitem")
      .filter({ hasText: "Projects" })
      .click({ button: "left" });
    await expect(externalLink).toHaveAttribute("data-state", "closed");
    await externalLink.hover();

    await Promise.all([
      expect(externalLink).toHaveAttribute("data-state", "delayed-open"),
      expect(projectImage).toBeInViewport(),
    ]);
  }

  await expect(externalLink).toBeInViewport();
});
