<script setup lang="ts">
import AboutMeJSON from "assets/animations/aboutme.json";
</script>

<template>
  <div class="dark-blue-section">
    <div
      class="dark-blue-container md:mb-40 md:grid-rows-5 md:gap-y-4 lg:mb-52 2xl:mb-[15.5rem] 3xl:mb-[17rem]"
    >
      <div class="md:col-span-2 md:justify-self-start">
        <h2 class="mb-5 text-xl font-bold md:mb-0 md:text-3xl xl:text-4xl">
          <Icon name="👨" size="36" />
          <span class="span-heading">About Me</span>
        </h2>
        <h2
          class="mb-5 text-lg font-bold text-white-400 md:mb-0 md:text-3xl xl:text-4xl dark:text-white-300"
        >
          Never too late to learn
        </h2>
      </div>
      <h3 class="about-me-text">
        I always thought my dream was to be a licensed aircraft engineer, it
        seemed like an appropriate dream given my education path, but I always
        felt mundane.
      </h3>
      <h3 class="about-me-text">
        It all changed when I had my first and only programming module in
        university, the fascination it produced when I wrote my 1st Hello World
        program on Python.
      </h3>
      <h3 class="about-me-text">
        Since then, I have taken a liking in web development which comprises of
        problem-solving skills and creativity.
      </h3>
      <h3 class="about-me-text m-0 font-semibold text-white-300">
        Graduated B.Eng. with Honours in Aircraft Systems Engineering, from
        <NuxtLink
          aria-label="SIT"
          class="cursor-pointer text-light-blue no-underline hover:underline hover:underline-offset-4 dark:text-orange"
          external
          target="_blank"
          to="https://www.singaporetech.edu.sg/undergraduate-programmes/aircraft-systems-engineering"
        >
          SIT</NuxtLink
        >.
      </h3>
      <ClientOnly fallback-tag="span">
        <aside class="about-me-animation">
          <Lottie :animation-data="AboutMeJSON" />
        </aside>
        <template #fallback>
          <p>Loading Lottie animation</p>
        </template>
      </ClientOnly>
    </div>
    <div class="dark-blue-gradient" />
  </div>
</template>
