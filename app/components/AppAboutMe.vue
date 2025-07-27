<script setup lang="ts">
import type { AsyncDataRequestStatus } from "#app";
import UiIconifyIcon from "~/components/ui/UiIconifyIcon.vue";
import type { TElement } from "~/constants/type-inference";

const listRefs = useState<TElement[]>("listRefs", () => shallowRef([]));

const { aboutMeLink: animationLink = "", status } = defineProps<{
  aboutMeLink?: string;
  status: AsyncDataRequestStatus;
}>();
</script>

<template>
  <section class="dark-blue-section">
    <div class="dark-blue-container lg:flex lg:items-center lg:gap-x-30">
      <hgroup class="space-y-5">
        <h2
          :ref="(el) => listRefs.push(el)"
          class="section-heading text-xl font-bold md:text-3xl xl:text-4xl"
        >
          <UiIconifyIcon icon="fluent-emoji:boy" :width="36" :height="36" />
          <span class="span-heading">About Me</span>
        </h2>
        <h3
          class="text-white-400 dark:text-white-300 text-lg font-bold md:text-3xl xl:text-4xl"
        >
          Never too late to learn
        </h3>
        <p
          v-once
          class="dark:text-white-100 text-base font-normal transition-colors duration-300 ease-out md:text-lg xl:text-xl"
        >
          I always thought my dream was to be a licensed aircraft engineer, it
          seemed like an appropriate dream given my education path, but I always
          felt mundane.
        </p>
        <p
          v-once
          class="dark:text-white-100 text-base font-normal transition-colors duration-300 ease-out md:text-lg xl:text-xl"
        >
          It all changed when I had my first and only programming module in
          university, the fascination it produced when I wrote my 1st Hello
          World program on Python.
        </p>
        <p
          v-once
          class="dark:text-white-100 text-base font-normal transition-colors duration-300 ease-out md:text-lg xl:text-xl"
        >
          Since then, I have taken a liking in web development which comprises
          of problem-solving skills and creativity.
        </p>
        <p class="about-me-text text-white-300 m-0 font-semibold">
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
        </p>
      </hgroup>
      <ClientOnly>
        <aside class="absolute top-3 right-0 lg:static">
          <div
            v-if="status === 'pending'"
            class="animate-pulse rounded-2xl p-4"
          />
          <Lottie
            v-else
            class="size-24 lg:size-56 xl:size-72"
            autoplay
            loop
            :src="animationLink"
          />
        </aside>
      </ClientOnly>
    </div>
  </section>
</template>
