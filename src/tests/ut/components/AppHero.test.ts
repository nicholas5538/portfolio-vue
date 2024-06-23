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
  useLazyAsyncDataMock.getMockImplementation();
  const component = await mountSuspended(AppHero);

  expect(useLazyAsyncDataMock).toHaveBeenCalledOnce();
  expect(useLazyAsyncDataMock).toHaveReturnedWith(mockReturnValues);
  // Server component breaks unit test, so it is 0 for now
  // TODO: Fix this unit test once server component is no longer an experimental feature
  expect(component.findAll("button").length).toEqual(0);
  expect(
    component
      .get('[aria-label="Click to see more on my GitHub Profile"]')
      .attributes("data-state")
  ).toEqual("closed");
});
