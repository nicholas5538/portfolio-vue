function useThemeMount(darkMode: globalThis.Ref<boolean>) {
  function initialThemeHandler() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      darkMode.value = true;
    } else {
      document.documentElement.classList.remove("dark");
      darkMode.value = false;
    }
  }

  onMounted(() => initialThemeHandler());
}

export default useThemeMount;
