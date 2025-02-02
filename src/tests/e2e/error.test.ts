import { expect, test } from "@nuxt/test-utils/playwright";

const invalidURL = "/random-url";

test("Error page rendering and redirect button", async ({ page, goto }) => {
  await goto(invalidURL, { waitUntil: "hydration" });

  await Promise.all([
    expect(page).toHaveURL(invalidURL),
    expect(page).toHaveTitle("Page not found"),
    expect(
      page.getByRole("heading", {
        name: "Uh oh, looks like you're lost.",
        exact: true,
      })
    ).toBeVisible(),
    expect(
      page.getByAltText("Error page picture", { exact: true })
    ).toBeVisible(),
  ]);

  const redirectButton = page.getByRole("button", { name: "Send me back!" });
  await Promise.all([
    expect(redirectButton).toBeVisible(),
    redirectButton.click({ button: "left" }),
  ]);

  await Promise.all([
    expect(page).toHaveURL("/"),
    expect(page).toHaveTitle("Nicholas Yong's Portfolio"),
  ]);
});
