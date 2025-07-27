import { afterEach, test, expect, vi } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import AppHero from "~/components/AppHero.vue";
import * as dataFunctions from "~/graphql/data";

vi.mock("~/graphql/data", () => ({
  getGithubViewer: vi.fn().mockResolvedValue({
    clear: vi.fn(),
    data: {
      data: {
        viewer: {
          avatarUrl: "https://example.com/avatar.jpg",
          bio: "Software Developer",
          email: "user@example.com",
          followers: { totalCount: 100 },
          following: { totalCount: 50 },
          location: "San Francisco, CA",
          login: "githubuser",
          name: "John Doe",
          url: "https://github.com/githubuser",
        },
      },
    },
    execute: vi.fn(),
    refresh: vi.fn(),
    error: undefined,
    pending: false,
    status: "success",
  }),
}));

afterEach(() => vi.clearAllMocks());

test("Hero section is rendered correctly", async () => {
  const component = await mountSuspended(AppHero);

  expect(dataFunctions.getGithubViewer).toHaveBeenCalledOnce();
  expect(dataFunctions.getGithubViewer).toHaveBeenCalledWith(
    expect.objectContaining({
      getCachedData: expect.any(Function),
    })
  );

  expect(
    component
      .get('[aria-label="Click to see more on my GitHub Profile"]')
      .attributes("data-state")
  ).toEqual("closed");
});
