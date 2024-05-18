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

  if (isMobile) {
    await page.getByRole("button", { expanded: false }).tap();
    await page.getByRole("menuitem").filter({ hasText: "Skills" }).tap();
    await expect(skillsLottie).toBeHidden();
  } else {
    await page
      .getByRole("listitem")
      .filter({ hasText: "Skills" })
      .click({ button: "left" });
    await expect(psToolTip).toBeHidden();
    await psIcon.hover();
    await expect(psIcon).toHaveAttribute("data-state", "delayed-open");
    await expect(psToolTip).toBeVisible();
    await expect(skillsLottie).toBeInViewport();
  }

  await expect(psIcon).toBeInViewport();
});
