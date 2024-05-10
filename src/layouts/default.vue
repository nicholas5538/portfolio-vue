<script setup lang="ts">
import useScrollElementIntoView from "~/composables/scrollElementIntoView";
import ThemeSwitch from "~/components/ThemeSwitch.vue";
import type { TElement } from "~/constants/typeInference";

const listRefs = useState<TElement[]>("listRefs");

function scrollToElement(index: number) {
  return useScrollElementIntoView(listRefs.value[index]);
}

useSeoMeta({
  title: "Nicholas Yong's Portfolio",
  ogTitle: "Nicholas Yong's Portfolio",
  creator: "Nicholas Yong",
  description:
    "Hello, I'm Nicholas Yong and I love to build simple and beautiful things",
  ogDescription:
    "Hello, I'm Nicholas Yong and I love to build simple and beautiful things",
  contentSecurityPolicy: {
    manifestSrc: "/site.webmanifest",
  },
  themeColor: [
    { content: "#f8f8f8", media: "(prefers-color-scheme: light)" },
    { content: "#212529", media: "(prefers-color-scheme: dark)" },
  ],
});
</script>

<template>
  <div>
    <div class="z-0">
      <div class="navbar-gradient" />
      <header
        class="fixed z-50 grid h-16 w-screen place-items-center bg-white-400 shadow-xl transition-top duration-300 dark:bg-midnight-city"
      >
        <nav
          class="relative mx-auto my-auto flex w-11/12 max-w-7xl flex-row items-center justify-between"
        >
          <div
            class="order-2 flex flex-row items-center gap-x-2 lg:order-first"
          >
            <h1 class="navbar-text">NICHOLAS</h1>
            <IconifyIcon
              icon="arcticons:easy-coder"
              class="hidden text-black-200 sm:block dark:text-white-400"
            />
          </div>
          <div class="order-first lg:order-2">
            <DropdownMenu @execute-scroll="scrollToElement" />
          </div>
          <div class="order-last flex items-center gap-2">
            <label
              class="hidden cursor-pointer select-none pr-2 text-[15px] leading-none text-black-200 xl:inline-block dark:text-white-200"
              for="appearance"
            >
              Appearance
            </label>
            <ClientOnly fallback-tag="div">
              <ThemeSwitch />
              <template #fallback>
                <button
                  class="bg-black/50 data-[state=checked]:bg-black relative flex h-[25px] w-[42px] cursor-pointer rounded-full shadow-sm outline dark:outline-light-orange"
                  type="button"
                  disabled
                >
                  <svg
                    class="text-white mx-auto animate-spin dark:text-light-orange"
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
                    ></circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                </button>
              </template>
            </ClientOnly>
          </div>
        </nav>
      </header>
    </div>
    <slot />
  </div>
</template>
