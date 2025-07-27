import useThemeMount from "~/composables/themeMount";

function useToggleTheme() {
  const darkMode = useState("darkMode", () => shallowRef(false));

  function toggleTheme() {
    if (localStorage.getItem("theme") === "dark") {
      localStorage.setItem("theme", "light");
      darkMode.value = false;
    } else {
      localStorage.setItem("theme", "dark");
      darkMode.value = true;
    }
    document.documentElement.classList.toggle("dark");
  }

  useThemeMount(darkMode);

  return { toggleTheme };
}

export default useToggleTheme;
