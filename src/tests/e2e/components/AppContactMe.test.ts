import { expect, test } from "@nuxt/test-utils/playwright";

test.beforeEach(async ({ page, goto }) => {
  await goto("/", { waitUntil: "hydration" });
  await expect(page).toHaveTitle("Nicholas Yong's Portfolio");
});

test.describe("Contact me section testing", () => {
  test("Contact me heading and button", async ({ page, isMobile }) => {
    const contactMeHeading = page.getByRole("heading", {
      name: "Get in touch",
      exact: true,
    });
    const contactMeButton = page.getByLabel(
      "Click here to send an email to me",
      {
        exact: true,
      }
    );

    if (isMobile) {
      await page.getByRole("button", { expanded: false }).tap();
      await page.getByRole("menuitem").filter({ hasText: "Contact" }).tap();
    } else {
      await page
        .getByRole("listitem")
        .filter({ hasText: "Contact" })
        .click({ button: "left" });
    }

    await expect(contactMeHeading).toBeInViewport();
    await expect(contactMeButton).toBeInViewport();
    await expect(contactMeButton).toHaveAttribute(
      "href",
      "mailto:nicholas8399@gmail.com"
    );
  });

  test("Dark blue gradient dismount on dark mode", async ({ page }) => {
    const themeSwitch = page.getByLabel("Appearance", { exact: true });
    await expect(themeSwitch).toBeInViewport();

    const darkBlueGradient = page.getByTestId("contact-me-dark-blue-gradient");
    await expect(darkBlueGradient).toBeVisible();

    await themeSwitch.click({ button: "left" });
    await expect(page.getByTestId("sun")).not.toBeVisible();
    await expect(page.getByTestId("moon")).toBeInViewport();
    await expect(darkBlueGradient).not.toBeVisible();
  });
});
