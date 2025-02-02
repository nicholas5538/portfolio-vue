import { expect, test } from "@nuxt/test-utils/playwright";

test("Skills section heading, icons and lottie component", async ({
  page,
  goto,
  isMobile,
}) => {
  await goto("/", { waitUntil: "hydration" });

  const skillsLottie = page.getByTestId("skillLottie");
  const psIcon = page.getByLabel("Photoshop", { exact: true });
  const psToolTip = page.getByText("Photoshop", { exact: true });

  await Promise.all([
    expect(page).toHaveTitle("Nicholas Yong's Portfolio"),
    expect(psIcon).toHaveAttribute("data-state", "closed"),
  ]);

  if (isMobile) {
    await Promise.all([
      expect(skillsLottie).toBeHidden(),
      page.getByRole("button", { expanded: false }).tap(),
    ]);

    const menuItem = page.getByRole("menuitem").filter({ hasText: "Skills" });
    await menuItem.waitFor();
    await menuItem.tap();
  } else {
    await Promise.all([
      page
        .getByRole("listitem")
        .filter({ hasText: "Skills" })
        .click({ button: "left" }),
      expect(psToolTip).toBeHidden(),
    ]);

    await psIcon.hover();

    await Promise.all([
      expect(psIcon).toHaveAttribute("data-state", "delayed-open"),
      expect(psToolTip).toBeVisible(),
      expect(skillsLottie).toBeInViewport(),
    ]);
  }

  await expect(psIcon).toBeInViewport();
});
