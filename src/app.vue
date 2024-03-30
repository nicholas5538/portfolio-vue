<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faFaceLaughBeam } from "@fortawesome/free-solid-svg-icons/faFaceLaughBeam";
import { faMoon } from "@fortawesome/free-solid-svg-icons/faMoon";
import { faSun } from "@fortawesome/free-regular-svg-icons/faSun";
import { SwitchRoot, SwitchThumb } from "radix-vue";

useServerSeoMeta({
  title: "Nicholas Yong's Portfolio",
  ogTitle: "Nicholas Yong's Portfolio",
  creator: "Nicholas Yong",
  description:
    "Hello, I'm Nicholas Yong and I love to build simple and beautiful things",
  ogDescription:
    "Hello, I'm Nicholas Yong and I love to build simple and beautiful things",
  contentSecurityPolicy: {
    manifestSrc: "/favicons/site.webmanifest",
  },
  themeColor: [
    { content: "#f8f8f8", media: "(prefers-color-scheme: light)" },
    { content: "#212529", media: "(prefers-color-scheme: dark)" },
  ],
});

const darkMode = ref(false);
const toggleIconClass =
  "dark:text-light-orange transition-colors duration-300 ease-out";
</script>

<template>
  <header
    class="fixed z-50 grid h-16 w-screen place-items-center bg-white-400 shadow-xl transition-top duration-300 dark:bg-midnight-city"
  >
    <nav
      class="relative mx-auto my-auto flex w-11/12 max-w-7xl flex-row items-center justify-between"
    >
      <div class="order-2 flex flex-row items-center gap-x-2 lg:order-first">
        <h1 class="navbar-text">NICHOLAS</h1>
        <FontAwesomeIcon
          class="hidden h-6 w-6 text-black-200 dark:text-white-400 sm:block"
          :icon="faFaceLaughBeam"
        />
      </div>
      <div class="order-first lg:order-2">
        <DropdownMenu />
      </div>
      <div class="order-last flex gap-2 items-center">
        <label
          class="hidden text-white text-[15px] leading-none pr-2 select-none xl:inline-block"
          for="appearance"
        >
          Appearance
        </label>
        <SwitchRoot
          id="appearance"
          v-model:checked="darkMode"
          class="w-[42px] h-[25px] outline flex bg-black/50 shadow-sm rounded-full relative data-[state=checked]:bg-black cursor-pointer dark:outline-light-orange"
        >
          <SwitchThumb asChild>
            <span
              class="block w-[21px] h-[21px] my-auto bg-transparent shadow-sm rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]"
            >
              <FontAwesomeIcon
                v-show="darkMode"
                :class="toggleIconClass"
                :icon="faMoon"
              />
              <FontAwesomeIcon
                v-show="!darkMode"
                :class="toggleIconClass"
                :icon="faSun"
              />
            </span>
          </SwitchThumb>
        </SwitchRoot>
      </div>
    </nav>
  </header>
  <!--  <NuxtPage page-key="static" />-->
</template>
