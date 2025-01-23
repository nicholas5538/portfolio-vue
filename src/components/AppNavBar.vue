<script setup lang="ts">
import UiDropdownMenu from "~/components/ui/UiDropdownMenu.vue";
import UiIconifyIcon from "~/components/ui/UiIconifyIcon.vue";
import UiThemeSwitch from "~/components/ui/UiThemeSwitch.vue";
import type { TElement } from "~/constants/typeInference";
import useScrollElementIntoView from "~/composables/scrollElementIntoView";

const listRefs = useState<TElement[]>("listRefs");

function scrollToElement(index: number) {
  return useScrollElementIntoView(listRefs.value[index]);
}
</script>

<template>
  <header class="z-0">
    <div class="relative w-full">
      <div class="navbar-gradient" />
    </div>
    <div
      class="bg-white-400 transition-top dark:bg-midnight-city fixed z-50 grid h-16 w-screen place-items-center shadow-xl duration-300"
    >
      <nav
        class="relative mx-auto my-auto flex w-full max-w-7xl items-center justify-between px-4"
      >
        <div class="flex items-center gap-x-2 lg:order-first">
          <h1 class="navbar-text">NICHOLAS</h1>
          <UiIconifyIcon
            icon="arcticons:easy-coder"
            class="text-black-200 dark:text-white-400 hidden sm:block"
          />
        </div>
        <div class="order-first lg:order-2">
          <UiDropdownMenu @execute-scroll="scrollToElement" />
        </div>
        <div class="order-last flex items-center gap-2">
          <label
            class="text-black-200 dark:text-white-200 hidden cursor-pointer pr-2 text-[0.9375rem] leading-none select-none xl:inline-block"
            for="appearance"
          >
            Appearance
          </label>
          <ClientOnly fallback-tag="div">
            <UiThemeSwitch />
            <template #fallback>
              <button
                class="dark:outline-light-orange relative flex h-[1.5625rem] w-fit rounded-full bg-black/50 shadow-xs outline data-[state=checked]:bg-black"
                type="button"
                disabled
              >
                <svg
                  class="dark:text-light-orange mx-auto animate-spin text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  />
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              </button>
            </template>
          </ClientOnly>
        </div>
      </nav>
    </div>
  </header>
</template>
