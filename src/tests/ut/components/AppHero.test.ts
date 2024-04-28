// @vitest-environment nuxt
import { afterAll, test, expect, vi } from "vitest";
import { mockNuxtImport, mountSuspended } from "@nuxt/test-utils/runtime";
import AppHero from "~/components/AppHero.vue";
import { mockReturnValues } from "~/mocks/mocks";

const { useFetchMock } = vi.hoisted(() => {
  return {
    useFetchMock: vi.fn().mockImplementation(async () => {
      return mockReturnValues;
    }),
  };
});

mockNuxtImport("useFetch", () => useFetchMock);

afterAll(() => useFetchMock.mockRestore());

test("Hero section is rendered correctly", async () => {
  useFetchMock.getMockImplementation();
  const component = await mountSuspended(AppHero);

  expect(useFetchMock).toHaveBeenCalledOnce();
  expect(useFetchMock).toHaveReturnedWith(mockReturnValues);
  expect(component.findAll("button").length).toEqual(4);
  expect(
    component
      .get('[aria-label="Click to see more on my GitHub Profile"]')
      .attributes("data-state")
  ).toEqual("closed");
});
