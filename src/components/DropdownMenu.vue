<script setup lang="ts">
import Button from "~/components/Button.server.vue";
import { resumeButtonProps } from "~/constants/globalVariables";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuRoot,
  DropdownMenuTrigger,
} from "radix-vue";

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
      <DropdownMenuTrigger>
        <IconCSS
          class="text-black-200 dark:text-white-400"
          name="mdi:hamburger-menu"
        />
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent
          align="end"
          class="z-50 min-w-[300px] max-w-sm rounded-br-xl rounded-tr-xl bg-white-400 shadow-dropdown will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade dark:bg-black-500 dark:shadow-none"
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
              'cursor-pointer rounded-none font-mont font-semibold tracking-widest text-black-200 transition duration-200 hover:bg-white-300 hover:text-aqua dark:text-white-200 dark:hover:bg-black-400 dark:hover:text-orange',
            ]"
            :value="list"
            @click.left="scrollEmit(index, lastIndex)"
          >
            <NuxtLink
              v-if="index === lastIndex"
              class="redirect-button block h-full w-full rounded-t-none rounded-br-xl bg-aqua py-2.5 pl-4 font-bold text-white-400 transition-colors duration-300 ease-out hover:bg-dark-aqua hover:no-underline dark:bg-light-orange dark:text-black-300 dark:hover:bg-orange-red"
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
        v-once
        :key="`${list}-navbar`"
        class="navbar-text cursor-pointer transition-all duration-300 ease-out hover:underline hover:decoration-black-200 hover:decoration-2 hover:underline-offset-8 dark:hover:decoration-white-400"
        @click.left="scrollEmit(index, lastIndex)"
      >
        <Button
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
