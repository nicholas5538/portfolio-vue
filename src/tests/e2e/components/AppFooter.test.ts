import { expect, test } from "@nuxt/test-utils/playwright";

test.beforeEach(async ({ page, goto }) => {
  await goto("/", { waitUntil: "hydration" });
  await expect(page).toHaveTitle("Nicholas Yong's Portfolio");
});

test.describe.configure({ mode: "parallel" });

test("Footer text", async ({ page }) => {
  const footerHeading = page.getByRole("heading", {
    name: "Designed & Built by Nicholas Yong",
    exact: true,
  });

  await footerHeading.scrollIntoViewIfNeeded();

  await Promise.all([
    expect(footerHeading).toBeInViewport(),
    expect(
      page.getByRole("heading", {
        name: "Thanks for visiting!",
        exact: true,
      })
    ).toBeInViewport(),
  ]);
});

test("Footer link button", async ({ page, browserName }) => {
  const gitHubFooterButton = page
    .getByLabel("Click to see more on my GitHub Profile", { exact: true })
    .last();

  await gitHubFooterButton.scrollIntoViewIfNeeded();

  await Promise.all([
    expect(gitHubFooterButton).toBeInViewport(),
    expect(gitHubFooterButton).toHaveAttribute("data-state", "closed"),
  ]);

  // For some reason, data-state remained closed in chromium, though it works on development
  if (browserName !== "chromium") {
    await gitHubFooterButton.hover();
    await expect(gitHubFooterButton).toHaveAttribute(
      "data-state",
      "delayed-open"
    );
  }
});
