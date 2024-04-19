import { expect, test } from "@nuxt/test-utils/playwright";

test.beforeEach(async ({ page, goto }) => {
  await goto("/", { waitUntil: "hydration" });
  await expect(page).toHaveTitle("Nicholas Yong's Portfolio");
});

test("Skills section heading, icons and lottie component", async ({
  page,
  isMobile,
}) => {
  await expect(page.getByRole("heading", { name: "💪Skills" })).toBeVisible();
  await expect(page.getByLabel("TypeScript")).toBeVisible();

  if (isMobile) {
    await expect(page.getByTestId("skillLottie")).toBeHidden();
  } else {
    await expect(page.getByTestId("skillLottie")).toBeVisible();
  }
});
