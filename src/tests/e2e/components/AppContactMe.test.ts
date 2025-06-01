import { expect, test } from "@nuxt/test-utils/playwright";

test.beforeEach(async ({ page, goto }) => {
  await goto("/", { waitUntil: "hydration" });
  await expect(page).toHaveTitle("Nicholas Yong's Portfolio");
});

test("Contact me heading and button", async ({ page, isMobile }) => {
  const contactMeHeading = page.getByRole("heading", {
    name: "Get in touch",
    exact: true,
  });
  const contactMeButton = page.getByLabel("Click here to send an email to me", {
    exact: true,
  });

  if (isMobile) {
    await page.getByRole("button", { expanded: false }).tap();
    const menuItem = page.getByRole("menuitem").filter({ hasText: "Contact" });
    await menuItem.waitFor();
    await menuItem.tap();
  } else {
    await page
      .getByRole("listitem")
      .filter({ hasText: "Contact" })
      .click({ button: "left" });
  }

  await Promise.all([
    expect(contactMeHeading).toBeInViewport(),
    expect(contactMeButton).toBeInViewport(),
    expect(contactMeButton).toHaveAttribute(
      "href",
      "mailto:nicholas8399@gmail.com"
    ),
  ]);
});
