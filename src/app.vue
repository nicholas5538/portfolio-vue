<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faFaceLaughBeam } from "@fortawesome/free-solid-svg-icons/faFaceLaughBeam";
import { faMoon } from "@fortawesome/free-solid-svg-icons/faMoon";
import { faSun } from "@fortawesome/free-regular-svg-icons/faSun";
import { Toggle } from "radix-vue";

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
      <div class="order-last">
        <Toggle
          v-model:pressed="darkMode"
          aria-label="Toggle theme"
          class="text-2xl text-aqua hover:text-dark-aqua dark:text-light-orange dark:hover:text-orange-red flex h-[35px] w-[35px] items-center justify-center rounded leading-4 transition-colors duration-300 ease-out"
        >
          <FontAwesomeIcon v-show="darkMode" :icon="faMoon" />
          <FontAwesomeIcon v-show="!darkMode" :icon="faSun" />
        </Toggle>
      </div>
    </nav>
  </header>
  <!--  <NuxtPage page-key="static" />-->
</template>
