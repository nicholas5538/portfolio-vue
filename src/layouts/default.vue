<script setup lang="ts">
import AppFooter from "~/components/AppFooter.vue";
import AppNavBar from "~/components/AppNavBar.vue";

useSeoMeta({
  title: "Nicholas Yong's Portfolio",
  ogTitle: "Nicholas Yong's Portfolio",
  creator: "Nicholas Yong",
  description:
    "Hello, I'm Nicholas Yong and I love to build simple and beautiful things",
  ogDescription:
    "Hello, I'm Nicholas Yong and I love to build simple and beautiful things",
  contentSecurityPolicy: {
    manifestSrc: "public/site.webmanifest",
  },
  themeColor: [
    { content: "#f8f8f8", media: "(prefers-color-scheme: light)" },
    { content: "#212529", media: "(prefers-color-scheme: dark)" },
  ],
});
</script>

<template>
  <div>
    <AppNavBar />
    <slot />
    <AppFooter />
  </div>
</template>
