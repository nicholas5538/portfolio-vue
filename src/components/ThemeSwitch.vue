<script setup lang="ts">
import { SwitchRoot, SwitchThumb } from "radix-vue";
import useToggleTheme from "~/composables/toggleTheme";

const darkMode = useState<boolean>("darkMode");
const { toggleTheme } = useToggleTheme();
const toggleIconClass = "transition-colors duration-300 ease-out";
</script>

<template>
  <SwitchRoot
    id="appearance"
    v-model:checked="darkMode"
    class="bg-black/50 data-[state=checked]:bg-black relative flex h-[28px] w-[48px] cursor-pointer rounded-full shadow-sm outline dark:outline-white-100"
    @update:checked="toggleTheme"
  >
    <SwitchThumb as-child>
      <span
        class="my-auto block translate-x-1 rounded-full bg-transparent shadow-sm transition-transform duration-200 will-change-transform data-[state=checked]:translate-x-5"
      >
        <IconCSS
          v-show="!darkMode"
          name="sun"
          :class="toggleIconClass"
          data-testid="sun"
        />
        <IconCSS
          v-show="darkMode"
          class="text-white-200"
          name="moon"
          :class="toggleIconClass"
          data-testid="moon"
        />
      </span>
    </SwitchThumb>
  </SwitchRoot>
</template>

<style scoped></style>
