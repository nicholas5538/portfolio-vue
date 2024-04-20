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
  const psIcon = page.getByLabel("Photoshop", { exact: true });
  const psToolTip = page.getByText("Photoshop", { exact: true });

  await expect(psIcon).toHaveAttribute("data-state", "closed");
  await expect(psIcon).toBeVisible();
  await expect(psToolTip).toBeHidden();
  await expect(
    page.getByRole("heading", { name: "💪Skills", exact: true })
  ).toBeVisible();

  if (isMobile) {
    await expect(skillsLottie).toBeHidden();
  } else {
    await psIcon.hover();
    await expect(psIcon).toHaveAttribute("data-state", "delayed-open");
    await expect(psToolTip).toBeVisible();
    await expect(skillsLottie).toBeVisible();
  }
});
