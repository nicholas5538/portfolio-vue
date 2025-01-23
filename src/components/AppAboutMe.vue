<script setup lang="ts">
import type { AsyncDataRequestStatus } from "#app";
import UiIconifyIcon from "~/components/ui/UiIconifyIcon.vue";
import type { TElement } from "~/constants/typeInference";

const darkMode = useState<boolean>("darkMode");
const listRefs = useState<TElement[]>("listRefs", () => shallowRef([]));

const { aboutMeLink: animationLink = "", status } = defineProps<{
  aboutMeLink?: string;
  status: AsyncDataRequestStatus;
}>();
</script>

<template>
  <section class="dark-blue-section">
    <div
      class="dark-blue-container dark-mode-container 3xl:mb-[17rem] md:mb-40 md:grid-rows-5 md:gap-y-4 lg:mb-52 xl:mb-56 2xl:mb-72 dark:mb-12 dark:2xl:mb-24"
    >
      <div class="md:col-span-2 md:justify-self-start">
        <h2
          :ref="(el) => listRefs.push(el)"
          class="sectionHeading mb-5 text-xl font-bold md:text-3xl xl:text-4xl"
        >
          <UiIconifyIcon icon="fluent-emoji:boy" :width="36" :height="36" />
          <span class="span-heading">About Me</span>
        </h2>
        <h2
          class="text-white-400 dark:text-white-300 mb-5 text-lg font-bold md:mb-0 md:text-3xl xl:text-4xl"
        >
          Never too late to learn
        </h2>
      </div>
      <h3 v-once class="about-me-text">
        I always thought my dream was to be a licensed aircraft engineer, it
        seemed like an appropriate dream given my education path, but I always
        felt mundane.
      </h3>
      <h3 v-once class="about-me-text">
        It all changed when I had my first and only programming module in
        university, the fascination it produced when I wrote my 1st Hello World
        program on Python.
      </h3>
      <h3 v-once class="about-me-text">
        Since then, I have taken a liking in web development which comprises of
        problem-solving skills and creativity.
      </h3>
      <h3 class="about-me-text text-white-300 m-0 font-semibold">
        Graduated B.Eng. with Honours in Aircraft Systems Engineering, from
        <NuxtLink
          aria-label="SIT ASE program external link"
          class="text-blue dark:text-orange cursor-pointer no-underline hover:underline hover:underline-offset-4"
          external
          target="_blank"
          to="https://www.singaporetech.edu.sg/undergraduate-programmes/aircraft-systems-engineering"
        >
          SIT</NuxtLink
        >.
      </h3>
      <ClientOnly>
        <aside class="about-me-animation">
          <div
            v-if="status === 'pending'"
            class="animate-pulse rounded-2xl p-4"
          />
          <Lottie
            v-else
            class="h-full w-auto"
            autoplay
            loop
            :src="animationLink"
          />
        </aside>
      </ClientOnly>
    </div>
    <div v-if="!darkMode" class="dark-blue-gradient" />
  </section>
</template>
