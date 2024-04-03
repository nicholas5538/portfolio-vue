<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons/faMoon";
import { faSun } from "@fortawesome/free-regular-svg-icons/faSun";
import { SwitchRoot, SwitchThumb } from "radix-vue";
import useToggleTheme from "~/composables/toggleTheme";

const darkMode = useState<boolean>("darkMode");
const { toggleTheme } = useToggleTheme();
const toggleIconClass =
  "dark:text-light-orange transition-colors duration-300 ease-out";
</script>

<template>
  <SwitchRoot
    id="appearance"
    v-model:checked="darkMode"
    class="bg-black/50 data-[state=checked]:bg-black relative flex h-[25px] w-[42px] cursor-pointer rounded-full shadow-sm outline dark:outline-light-orange"
    @update:checked="toggleTheme"
  >
    <SwitchThumb as-child>
      <span
        class="my-auto block h-[21px] w-[21px] translate-x-0.5 rounded-full bg-transparent shadow-sm transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[19px]"
      >
        <FontAwesomeIcon
          v-show="darkMode"
          :class="toggleIconClass"
          :icon="faMoon"
          data-testid="faMoon"
        />
        <FontAwesomeIcon
          v-show="!darkMode"
          :class="toggleIconClass"
          :icon="faSun"
          data-testid="faSun"
        />
      </span>
    </SwitchThumb>
  </SwitchRoot>
</template>

<style scoped></style>
