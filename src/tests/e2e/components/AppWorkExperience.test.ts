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
    await page.getByRole("button", { expanded: false }).tap();
    await page.getByRole("menuitem").filter({ hasText: "Experience" }).tap();
    await expect(experienceLottie).toBeHidden();
  } else {
    await page
      .getByRole("listitem")
      .filter({ hasText: "Experience" })
      .click({ button: "left" });
    await expect(experienceLottie).toBeInViewport();
  }

  await expect(
    page.getByRole("heading", {
      name: "A peek at my early career",
      exact: true,
    })
  ).toBeInViewport();
  await expect(
    page.getByLabel("Click here to redirect to foodpanda website", {
      exact: true,
    })
  ).toBeInViewport();
  await expect(
    page
      .getByLabel("Technologies used in foodpanda", {
        exact: true,
      })
      .getByRole("listitem")
  ).toHaveCount(5);
});
