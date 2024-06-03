<script setup lang="ts">
import AppHero from "~/components/AppHero.vue";
import AppAboutMe from "~/components/AppAboutMe.vue";
import useGetCloudflareR2Object from "~/composables/getCloudflareR2Object";
type DataT = {
  aboutMeLink: string;
  skillsLink: string;
  workExperienceLink: string;
};

definePageMeta({
  layout: "default",
});

const { data: animationLinks } = await useAsyncData<DataT>(
  "lottie-json",
  async () => {
    const [aboutMeLink, skillsLink, workExperienceLink] = await Promise.all([
      useGetCloudflareR2Object("animations/aboutme.json"),
      useGetCloudflareR2Object("animations/skills.json"),
      useGetCloudflareR2Object("animations/experience.json"),
    ]);

    return { aboutMeLink, skillsLink, workExperienceLink };
  },
  {
    deep: false,
    getCachedData(key, nuxtApp) {
      return nuxtApp.payload.data[key] || nuxtApp.static.data[key];
    },
  }
);
</script>

<template>
  <main>
    <AppHero />
    <AppAboutMe :about-me-link="animationLinks?.aboutMeLink" />
    <ClientOnly>
      <LazyScrollToTop />
    </ClientOnly>
    <LazyAppSkills :skills-link="animationLinks?.skillsLink" />
    <LazyAppWorkExperience
      :work-experience-link="animationLinks?.workExperienceLink"
    />
    <LazyAppProjects />
    <LazyAppContactMe />
  </main>
</template>
