<script setup lang="ts">
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuRoot,
  DropdownMenuTrigger,
} from "radix-vue";
import UiButton from "~/components/ui/UiButton.server.vue";
import UiIconifyIcon from "~/components/ui/UiIconifyIcon.vue";
import { resumeButtonProps } from "~/constants/global-variables";

const emit = defineEmits<{
  (e: "executeScroll", index: number): void;
}>();

function scrollEmit(index: number, lastIndex: number) {
  if (index < lastIndex) {
    return emit("executeScroll", index);
  }
}

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
      <DropdownMenuTrigger
        aria-label="Click to expand or collapse the dropdown menu"
      >
        <UiIconifyIcon
          class="text-black-200 dark:text-white-400"
          icon="mdi:hamburger-menu"
        />
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent
          align="end"
          class="bg-white-400 shadow-dropdown data-[side=bottom]:animate-slide-up-and-fade data-[side=left]:animate-slide-right-and-fade data-[side=right]:animate-slide-left-and-fade data-[side=top]:animate-slide-down-and-fade dark:bg-black-500 z-50 max-w-sm min-w-75 rounded-tr-xl rounded-br-xl will-change-[opacity,transform] dark:shadow-none"
          hide-when-detached
          side="bottom"
          :side-offset="22"
          update-position-strategy="optimized"
        >
          <DropdownMenuItem
            v-for="(list, index) in listElements"
            :key="`${list}-dropdown`"
            :class="[
              {
                'rounded-tr-xl': index === 0,
                'rounded-br-xl': index === lastIndex,
                'py-2.5 pl-4': index < lastIndex,
              },
              'font-mont text-black-200 hover:bg-white-300 hover:text-aqua dark:text-white-200 dark:hover:bg-black-400 dark:hover:text-orange cursor-pointer rounded-none font-semibold tracking-widest transition duration-200',
            ]"
            :value="list"
            @click="scrollEmit(index, lastIndex)"
          >
            <NuxtLink
              v-if="index === lastIndex"
              class="redirect-button bg-aqua text-white-400 hover:bg-dark-aqua dark:bg-light-orange dark:text-black-300 dark:hover:bg-orange-red block h-full w-full rounded-t-none rounded-br-xl py-2.5 pl-4 font-bold transition-colors duration-300 ease-out hover:no-underline"
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
      class="flex items-center justify-between space-x-6 lg:order-2 2xl:space-x-10"
    >
      <li
        v-for="(list, index) in listElements"
        :key="`${list}-navbar`"
        class="font-mont text-black-200 dark:text-white-400 hover:decoration-black-200 dark:hover:decoration-white-400 cursor-pointer text-base font-bold tracking-widest transition-all duration-300 ease-out hover:underline hover:decoration-2 hover:underline-offset-8 xl:text-xl"
        @click="scrollEmit(index, lastIndex)"
      >
        <UiButton
          v-if="index === lastIndex"
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
