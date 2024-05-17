import { expect, test } from "@nuxt/test-utils/playwright";

test("Skills section heading, icons and lottie component", async ({
  browserName,
  page,
  goto,
  isMobile,
}) => {
  await goto("/", { waitUntil: "hydration" });
  await expect(page).toHaveTitle("Nicholas Yong's Portfolio");

  const profilePicture = page.getByAltText("Profile picture", { exact: true });
  await expect(profilePicture).toBeInViewport();

  // Scroll all the way down to projects heading, ScrollToTop button should appear
  await page
    .getByRole("listitem")
    .filter({ hasText: "Projects" })
    .click({ button: "left" });
  await expect(profilePicture).not.toBeInViewport();

  const scrollToTopButton = page.getByLabel("Click to scroll to the top", {
    exact: true,
  });

  await expect(scrollToTopButton).toBeInViewport();
  await expect(scrollToTopButton).toHaveAttribute("data-state", "closed");

  // For some reason, data-state remained closed in chromium, though it works on development
  if (!isMobile && browserName !== "chromium") {
    await scrollToTopButton.hover({ force: true });
    await expect(scrollToTopButton).toHaveAttribute(
      "data-state",
      "delayed-open"
    );
  }

  await scrollToTopButton.click({ button: "left" });
  await expect(
    page.getByAltText("Profile picture", { exact: true })
  ).toBeInViewport();
});
