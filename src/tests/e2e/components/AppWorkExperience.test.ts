import { expect, test } from "@nuxt/test-utils/playwright";

test("Skills section heading, icons and lottie component", async ({
  page,
  goto,
  isMobile,
}) => {
  await goto("/", { waitUntil: "hydration" });
  await expect(page).toHaveTitle("Nicholas Yong's Portfolio");

  const experienceLottie = page.getByTestId("experienceLottie");
  if (isMobile) {
    await Promise.all([
      expect(experienceLottie).toBeHidden(),
      page.getByRole("button", { expanded: false }).tap(),
    ]);

    const menuItem = page
      .getByRole("menuitem")
      .filter({ hasText: "Experience" });
    await menuItem.waitFor();
    await menuItem.tap();
  } else {
    await page
      .getByRole("listitem")
      .filter({ hasText: "Experience" })
      .click({ button: "left" });
    await expect(experienceLottie).toBeInViewport();
  }

  await Promise.all([
    expect(
      page.getByRole("heading", {
        name: "A peek at my early career",
        exact: true,
      })
    ).toBeInViewport(),
    expect(
      page.getByLabel("Click here to redirect to foodpanda website", {
        exact: true,
      })
    ).toBeInViewport(),
    expect(
      page
        .getByLabel("Technologies used in foodpanda", {
          exact: true,
        })
        .getByRole("listitem")
    ).toHaveCount(5),
  ]);
});
