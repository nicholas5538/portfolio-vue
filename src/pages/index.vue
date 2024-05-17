<script setup lang="ts">
import AppHero from "~/components/AppHero.vue";
import AppAboutMe from "~/components/AppAboutMe.vue";

definePageMeta({
  layout: "default",
});
</script>

<template>
  <main>
    <AppHero />
    <AppAboutMe />
    <ClientOnly>
      <LazyScrollToTop />
    </ClientOnly>
    <LazyAppSkills />
    <LazyAppWorkExperience />
    <LazyAppProjects />
    <LazyAppContactMe />
  </main>
</template>
