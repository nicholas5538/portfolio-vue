function useSetButtonState() {
  const visible = useState<boolean>("visible", () => shallowRef(false));

  const setBtnState = () => {
    visible.value = window.scrollY > 400;
  };

  onMounted(() => {
    window.addEventListener("scroll", setBtnState);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", setBtnState);
  });
}

export default useSetButtonState;
