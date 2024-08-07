<script setup lang="ts">
import type { AsyncDataRequestStatus } from "#app";
import UiIconifyIcon from "~/components/ui/UiIconifyIcon.vue";
import type { TElement } from "~/constants/typeInference";

const darkMode = useState<boolean>("darkMode");
const listRefs = useState<TElement[]>("listRefs", () => shallowRef([]));

const { aboutMeLink: animationLink, status } = withDefaults(
  defineProps<{ aboutMeLink: string; status: AsyncDataRequestStatus }>(),
  {
    aboutMeLink: "",
  }
);
</script>

<template>
  <section class="dark-blue-section">
    <div
      class="dark-blue-container dark-mode-container md:mb-40 md:grid-rows-5 md:gap-y-4 lg:mb-52 xl:mb-56 2xl:mb-72 3xl:mb-[17rem] dark:mb-12 dark:2xl:mb-24"
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
          class="mb-5 text-lg font-bold text-white-400 md:mb-0 md:text-3xl xl:text-4xl dark:text-white-300"
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
      <h3 class="about-me-text m-0 font-semibold text-white-300">
        Graduated B.Eng. with Honours in Aircraft Systems Engineering, from
        <NuxtLink
          aria-label="SIT ASE program external link"
          class="cursor-pointer text-light-blue no-underline hover:underline hover:underline-offset-4 dark:text-orange"
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
          <Lottie v-else :animation-link="animationLink" />
        </aside>
      </ClientOnly>
    </div>
    <div v-if="!darkMode" class="dark-blue-gradient" />
  </section>
</template>
