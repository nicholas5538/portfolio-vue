import { expect, test } from "@nuxt/test-utils/playwright";

const invalidURL = "/random-url";

test("Error page rendering and redirect button", async ({ page, goto }) => {
  await goto(invalidURL, { waitUntil: "hydration" });
  await expect(page).toHaveURL(invalidURL);
  await expect(page).toHaveTitle("Page not found");
  await expect(
    page.getByRole("heading", {
      name: "Uh oh, looks like you're lost.",
      exact: true,
    })
  ).toBeVisible();
  await expect(
    page.getByAltText("Error page picture", { exact: true })
  ).toBeVisible();

  const redirectButton = page.getByRole("button", { name: "Send me back!" });

  await expect(redirectButton).toBeVisible();
  await redirectButton.click({ button: "left" });
  await expect(page).toHaveURL("/");
  await expect(page).toHaveTitle("Nicholas Yong's Portfolio");
});
