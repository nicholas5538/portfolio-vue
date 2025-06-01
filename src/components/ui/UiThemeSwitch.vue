<script setup lang="ts">
import { SwitchRoot, SwitchThumb } from "radix-vue";
import UiIconifyIcon from "~/components/ui/UiIconifyIcon.vue";
import useToggleTheme from "~/composables/toggleTheme";
import { iconAlias } from "~/constants/global-variables";

const darkMode = useState<boolean>("darkMode");
const { toggleTheme } = useToggleTheme();
const toggleIconClass =
  "inline-block transition-colors duration-300 ease-out w-6 h-6";
const sunIcon = iconAlias.get("sun")!;
const moonIcon = iconAlias.get("moon")!;
</script>

<template>
  <SwitchRoot
    id="appearance"
    v-model:checked="darkMode"
    class="dark:outline-white-100 relative flex h-[1.625rem] w-12 cursor-pointer rounded-full bg-transparent shadow-xs outline data-[state=checked]:bg-black"
    @update:checked="toggleTheme"
  >
    <SwitchThumb as-child>
      <span
        class="my-auto block translate-x-1 rounded-full bg-transparent shadow-xs transition-transform duration-200 will-change-transform data-[state=checked]:translate-x-5"
      >
        <UiIconifyIcon
          v-show="!darkMode"
          :icon="sunIcon"
          :class="toggleIconClass"
          data-testid="sun"
        />
        <UiIconifyIcon
          v-show="darkMode"
          class="text-white-200"
          :icon="moonIcon"
          :class="toggleIconClass"
          data-testid="moon"
        />
      </span>
    </SwitchThumb>
  </SwitchRoot>
</template>

<style scoped></style>
