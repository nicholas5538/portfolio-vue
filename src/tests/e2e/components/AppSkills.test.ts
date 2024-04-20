import { expect, test } from "@nuxt/test-utils/playwright";

test.beforeEach(async ({ page, goto }) => {
  await goto("/", { waitUntil: "hydration" });
  await expect(page).toHaveTitle("Nicholas Yong's Portfolio");
});

test("Skills section heading, icons and lottie component", async ({
  page,
  isMobile,
}) => {
  const skillsLottie = page.getByTestId("skillLottie");
  const typeScriptIcon = page.getByLabel("TypeScript", { exact: true });

  await expect(typeScriptIcon).toHaveAttribute("data-state", "closed");
  await expect(typeScriptIcon).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "💪Skills", exact: true })
  ).toBeVisible();

  if (isMobile) {
    await expect(skillsLottie).toBeHidden();
  } else {
    await typeScriptIcon.hover();
    await expect(typeScriptIcon).toHaveAttribute("data-state", "delayed-open");
    await expect(skillsLottie).toBeVisible();
  }
});
