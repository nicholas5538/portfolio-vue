import { expect, test } from "@nuxt/test-utils/playwright";

test("Skills section heading, icons and lottie component", async ({
  page,
  goto,
  isMobile,
}) => {
  await goto("/", { waitUntil: "hydration" });
  await expect(page).toHaveTitle("Nicholas Yong's Portfolio");

  const skillsLottie = page.getByTestId("skillLottie");
  const psIcon = page.getByLabel("Photoshop", { exact: true });
  const psToolTip = page.getByText("Photoshop", { exact: true });

  await expect(psIcon).toHaveAttribute("data-state", "closed");
  await expect(psIcon).toBeVisible();
  await expect(psToolTip).toBeHidden();

  if (isMobile) {
    await expect(skillsLottie).toBeHidden();
  } else {
    await psIcon.hover();
    await expect(psIcon).toHaveAttribute("data-state", "delayed-open");
    await expect(psToolTip).toBeVisible();
    await expect(skillsLottie).toBeVisible();
  }
});
