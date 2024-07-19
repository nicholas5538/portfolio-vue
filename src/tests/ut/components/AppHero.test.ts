// @vitest-environment nuxt
import { afterAll, test, expect, vi } from "vitest";
import { mockNuxtImport, mountSuspended } from "@nuxt/test-utils/runtime";
import AppHero from "~/components/AppHero.vue";
import { mockReturnValues } from "~/mocks/mocks";

const { useLazyAsyncDataMock } = vi.hoisted(() => {
  return {
    useLazyAsyncDataMock: vi.fn().mockImplementation(async () => {
      return mockReturnValues;
    }),
  };
});

mockNuxtImport("useLazyAsyncData", () => useLazyAsyncDataMock);

afterAll(() => useLazyAsyncDataMock.mockRestore());

test("Hero section is rendered correctly", async () => {
  const component = await mountSuspended(AppHero);
  const result = useLazyAsyncDataMock.mock.settledResults;

  expect(result[0]?.value).toBe(mockReturnValues);
  expect(result[0]?.type).toBe("fulfilled");
  expect(useLazyAsyncDataMock).toHaveResolvedWith(mockReturnValues);
  expect(component.findAll("button").length).toEqual(1);
  expect(
    component
      .get('[aria-label="Click to see more on my GitHub Profile"]')
      .attributes("data-state")
  ).toEqual("closed");
});
