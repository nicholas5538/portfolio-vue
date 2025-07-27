import { mountSuspended } from "@nuxt/test-utils/runtime";
import {
  afterAll,
  afterEach,
  describe,
  expect,
  onTestFinished,
  test,
  vi,
} from "vitest";
import ThemeSwitch from "~/components/ui/UiThemeSwitch.vue";

const getItemSpy = vi.spyOn(window.localStorage, "getItem");
const setItemSpy = vi.spyOn(window.localStorage, "setItem");
const addClassListSpy = vi.spyOn(
  window.document.documentElement.classList,
  "add"
);
const removeClassListSpy = vi.spyOn(
  window.document.documentElement.classList,
  "remove"
);
const toggleClassListSpy = vi.spyOn(
  window.document.documentElement.classList,
  "toggle"
);

function clearMocks() {
  getItemSpy.mockClear();
  setItemSpy.mockClear();
  addClassListSpy.mockClear();
  removeClassListSpy.mockClear();
  toggleClassListSpy.mockClear();
  localStorage.clear();
}

describe("useToggleTheme initial render", () => {
  afterAll(() => clearMocks());

  test("Initial theme is light without any OS preference or theme key in localStorage", async () => {
    const component = await mountSuspended(ThemeSwitch);

    const darkMode = useState("darkMode");
    expect(darkMode.value).toBeFalsy();
    expect(removeClassListSpy).toHaveBeenCalledOnce();
    onTestFinished(async () => {
      await component.find("button").trigger("click");
      addClassListSpy.mockClear();
    });
  });

  test("Initial theme is dark with a theme key and value dark in localStorage", async () => {
    await mountSuspended(ThemeSwitch);
    const darkMode = useState("darkMode");
    expect(darkMode.value).toBeTruthy();
    expect(addClassListSpy).toHaveBeenCalledOnce();
  });
});

describe("Toggling theme switch tests", () => {
  afterEach(() => clearMocks());

  test("Toggle theme from light to dark mode", async () => {
    const component = await mountSuspended(ThemeSwitch);
    const darkMode = useState("darkMode");
    await component.find("button").trigger("click");

    expect(toggleClassListSpy).toHaveBeenCalledOnce();
    expect(getItemSpy).toHaveBeenCalledOnce();
    expect(setItemSpy).toHaveBeenCalledWith("theme", "dark");
    expect(darkMode.value).toBeTruthy();
  });

  test("Toggle theme from dark back to light", async () => {
    const component = await mountSuspended(ThemeSwitch);
    const darkMode = useState("darkMode");
    const button = component.find("button");

    await button.trigger("click");
    expect(setItemSpy).toHaveBeenCalledWith("theme", "dark");
    await button.trigger("click");
    expect(setItemSpy).toHaveBeenCalledWith("theme", "light");

    expect(getItemSpy).toHaveBeenCalledTimes(2);
    expect(darkMode.value).toBeFalsy();
  });
});
