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
  const projectImage = page.getByAltText("An image of Voucher Management");
  const projectHeading = page.getByRole("heading", {
    name: "👇Projects",
    exact: true,
  });
  const projectSubHeading = page.getByRole("heading", {
    name: "Coding projects that I enjoyed working on",
    exact: true,
  });

  if (!isMobile) {
    await page
      .getByRole("listitem")
      .filter({ hasText: "Projects" })
      .click({ button: "left" });

    await expect(externalLink).toBeInViewport();
    await expect(externalLink).toHaveAttribute("data-state", "closed");
    await externalLink.hover();
    await expect(externalLink).toHaveAttribute("data-state", "delayed-open");

    await expect(projectHeading).toBeInViewport();
    await expect(projectSubHeading).toBeInViewport();
    await expect(projectImage).toBeInViewport();
  } else {
    await expect(externalLink).toBeVisible();
    await expect(projectHeading).toBeVisible();
    await expect(projectSubHeading).toBeVisible();
    await expect(projectImage).toBeHidden();
  }
});
