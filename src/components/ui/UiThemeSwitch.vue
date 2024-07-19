<script setup lang="ts">
import { SwitchRoot, SwitchThumb } from "radix-vue";
import UiIconifyIcon from "~/components/ui/UiIconifyIcon.vue";
import useToggleTheme from "~/composables/toggleTheme";
import { iconAlias } from "~/constants/globalVariables";

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
    class="bg-black/50 data-[state=checked]:bg-black relative flex h-[26px] w-[48px] cursor-pointer rounded-full shadow-sm outline dark:outline-white-100"
    @update:checked="toggleTheme"
  >
    <SwitchThumb as-child>
      <span
        class="my-auto block translate-x-1 rounded-full bg-transparent shadow-sm transition-transform duration-200 will-change-transform data-[state=checked]:translate-x-5"
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
