import { expect, test } from "@nuxt/test-utils/playwright";

test("About Me section heading, link and Lottie component", async ({
  page,
  goto,
}) => {
  await goto("/", { waitUntil: "hydration" });
  await expect(page).toHaveTitle("Nicholas Yong's Portfolio");
  await expect(
    page.getByLabel("SIT ASE program external link", { exact: true })
  ).toBeVisible();
  await expect(
    page.getByRole("heading", {
      name:
        "Since then, I have taken a liking in web development which comprises of\n" +
        "        problem-solving skills and creativity.",
    })
  ).toBeVisible();
  await expect(
    page.locator(".lottie-animation-container").first()
  ).toBeVisible();
});
