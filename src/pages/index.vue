<script setup lang="ts">
import AppHero from "~/components/AppHero.vue";
import AppAboutMe from "~/components/AppAboutMe.vue";
import AppSkills from "~/components/AppSkills.vue";
import AppWorkExperience from "~/components/AppWorkExperience.vue";

definePageMeta({
  layout: "default",
});
</script>

<template>
  <main>
    <AppHero />
    <AppAboutMe />
    <AppSkills />
    <AppWorkExperience />
  </main>
</template>
