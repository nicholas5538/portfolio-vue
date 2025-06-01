import { expect, test } from "@nuxt/test-utils/playwright";

test("About Me section heading, link and Lottie component", async ({
  page,
  goto,
}) => {
  await goto("/", { waitUntil: "hydration" });

  await Promise.all([
    expect(page).toHaveTitle("Nicholas Yong's Portfolio"),
    expect(
      page.getByLabel("SIT ASE program external link", { exact: true })
    ).toBeVisible(),
    expect(
      page.getByText(
        "Since then, I have taken a liking in web development which comprises of problem-solving skills and creativity.",
        {
          exact: true,
        }
      )
    ).toBeVisible(),
  ]);
});
