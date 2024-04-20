import { expect, test } from "@nuxt/test-utils/playwright";

test.beforeEach(async ({ page, goto }) => {
  await goto("/", { waitUntil: "hydration" });
  await expect(page).toHaveTitle("Nicholas Yong's Portfolio");
});

test("Skills section heading, icons and lottie component", async ({
  page,
  isMobile,
}) => {
  const experienceLottie = page.getByTestId("experienceLottie");

  await expect(
    page.getByRole("heading", { name: "🧑‍💻Experience", exact: true })
  ).toBeVisible();
  await expect(
    page.getByRole("heading", {
      name: "A peek at my early career",
      exact: true,
    })
  ).toBeVisible();
  await expect(
    page.getByLabel("Click here to redirect to foodpanda website", {
      exact: true,
    })
  ).toBeVisible();
  await expect(
    page
      .getByLabel("Technologies used in foodpanda", {
        exact: true,
      })
      .getByRole("listitem")
  ).toHaveCount(5);

  if (isMobile) {
    await expect(experienceLottie).toBeHidden();
  } else {
    await expect(experienceLottie).toBeVisible();
  }
});
