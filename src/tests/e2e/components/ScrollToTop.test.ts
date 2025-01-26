import { expect, test } from "@nuxt/test-utils/playwright";

test.describe("Test ScrollToTop component", () => {
  test("Test ScrollToTop rendering and state", async ({
    page,
    goto,
    isMobile,
  }) => {
    await goto("/", { waitUntil: "hydration" });
    await expect(page).toHaveTitle("Nicholas Yong's Portfolio");

    const profilePicture = page.getByAltText("My profile picture", {
      exact: true,
    });
    await expect(profilePicture).toBeInViewport();

    // Scroll all the way down to projects heading, ScrollToTop button should appear
    if (isMobile) {
      await page.getByRole("button", { expanded: false }).tap();
      await page.getByRole("menuitem").filter({ hasText: "Projects" }).tap();
    } else {
      await page
        .getByRole("listitem")
        .filter({ hasText: "Projects" })
        .click({ button: "left" });
    }

    const scrollToTopButton = page.getByLabel("Click to scroll to the top", {
      exact: true,
    });

    await expect(scrollToTopButton).toBeInViewport();
    await expect(profilePicture).not.toBeInViewport();

    if (isMobile) {
      await scrollToTopButton.tap({ force: true });
    } else {
      await scrollToTopButton.click({ button: "left" });
    }

    await expect(profilePicture).toBeInViewport();
    await expect(scrollToTopButton).toBeHidden();
  });
});
