<script setup lang="ts">
import AppHero from "~/components/AppHero.vue";
import AppAboutMe from "~/components/AppAboutMe.vue";
import AppContactMe from "~/components/AppContactMe.vue";
import AppSkills from "~/components/AppSkills.vue";
import AppWorkExperience from "~/components/AppWorkExperience.vue";
import AppProjects from "~/components/AppProjects.vue";
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
    <AppProjects />
    <AppContactMe />
  </main>
</template>
