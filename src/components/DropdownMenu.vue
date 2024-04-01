<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { resumeButtonProps } from "~/constants/globalVariables";
import Button from "~/components/Button.vue";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuRoot,
  DropdownMenuTrigger,
} from "radix-vue";

const toggleState = ref(false);
const listElements = [
  "About Me",
  "Skills",
  "Experience",
  "Projects",
  "Contact",
  "Resume",
];
const lastIndex = listElements.length - 1;
</script>

<template>
  <div class="lg:hidden">
    <DropdownMenuRoot v-model:open="toggleState">
      <DropdownMenuTrigger>
        <FontAwesomeIcon :icon="faBars" />
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent
          align="end"
          class="min-w-[300px] max-w-sm z-50 bg-white-400 rounded-tr-xl rounded-br-xl shadow-dropdown will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade dark:bg-black-500 dark:shadow-none"
          side="bottom"
          :side-offset="22"
          update-position-strategy="optimized"
        >
          <DropdownMenuItem
            v-for="(list, index) in listElements"
            :key="list"
            class="cursor-pointer font-mont font-semibold tracking-widest text-black-200 transition duration-200 hover:bg-white-300 hover:text-aqua rounded-none dark:text-white-200 dark:hover:bg-black-400 dark:hover:text-orange"
            :class="{
              'rounded-tr-xl': index === 0,
              'rounded-br-xl': index === lastIndex,
              'py-2.5 pl-4': index < lastIndex,
            }"
            :value="list"
          >
            <NuxtLink
              v-if="index === lastIndex"
              class="redirect-button block h-full w-full rounded-br-xl rounded-t-none bg-aqua py-2.5 pl-4 font-bold text-white-400 transition-colors duration-300 ease-out hover:bg-dark-aqua hover:no-underline dark:bg-light-orange dark:text-black-300 dark:hover:bg-orange-red"
              external
              :aria-label="resumeButtonProps.ariaLabel"
              :target="resumeButtonProps.target"
              :to="resumeButtonProps.link"
            >
              {{ resumeButtonProps.text }}
            </NuxtLink>
            <template v-else>
              {{ list }}
            </template>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenuRoot>
  </div>
  <div class="hidden lg:inline-block">
    <ul
      class="flex flex-row items-center justify-between gap-x-6 lg:order-2 2xl:gap-x-10"
    >
      <li
        v-for="(list, index) in listElements"
        :key="list"
        class="navbar-text cursor-pointer hover:underline hover:decoration-white-400 hover:decoration-2 hover:underline-offset-8"
      >
        <Button
          v-if="index === listElements.length - 1"
          v-bind="resumeButtonProps"
          link-class="xl:text-xl"
        />
        <template v-else>
          {{ list }}
        </template>
      </li>
    </ul>
  </div>
</template>
