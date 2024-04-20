<script setup lang="ts">
import { workExperiences } from "~/constants/globalVariables";
import ExperienceJSON from "assets/animations/experience.json";

const darkMode = useState<boolean>("darkMode");
</script>

<template>
  <div class="dark-blue-section">
    <div
      class="dark-blue-container mb-40 md:mb-72 md:mt-20 md:items-center md:gap-x-5 md:gap-y-12 md:pt-0 lg:mb-[22rem] xl:mb-80 2xl:mb-[26rem] 3xl:mb-[22rem]"
    >
      <div class="md:col-span-2 md:row-start-1 md:row-end-1 md:mb-0 md:mt-5">
        <h2 class="mb-5 text-xl font-bold text-blue md:text-3xl xl:text-4xl">
          <Icon name="🧑‍💻" size="36" />
          <span class="span-heading">Experience</span>
        </h2>
        <h2
          class="mb-5 text-lg font-bold text-white-400 md:mb-0 md:text-3xl xl:text-4xl dark:text-white-300"
        >
          A peek at my early career
        </h2>
      </div>
      <div
        v-for="[key, workExperience] in workExperiences"
        :key="key"
        :class="{
          'md:row-start-2 md:row-end-4': workExperience.index === 0,
          'md:row-start-4 md:row-end-6': workExperience.index !== 0,
        }"
        class="mb-10 md:col-span-2 md:mb-5"
      >
        <h3
          class="mb-2 border-l-2 border-l-blue pl-4 font-semibold text-white-400 transition-colors duration-300 ease-out md:text-xl lg:text-2xl xl:text-3xl dark:border-l-orange-red dark:text-white-300"
        >
          {{ `${workExperience.startDate} - ${workExperience.endDate}` }}
        </h3>
        <h4
          class="font-semibold text-white-400 transition-colors duration-300 ease-out md:text-lg lg:text-xl xl:text-2xl dark:text-white-300"
        >
          {{ workExperience.title }}
        </h4>
        <h5
          class="mb-2 font-semibold text-white-400 transition-colors duration-300 ease-out md:text-lg lg:text-xl xl:text-2xl dark:text-white-300"
        >
          @
          <NuxtLink
            :aria-label="`Click here to redirect to ${workExperience.company} website`"
            :to="workExperience.url"
            class="text-blue dark:text-orange"
            external
            target="_blank"
          >
            {{ workExperience.company }}
          </NuxtLink>
        </h5>
        <ul
          class="list-inside list-disc text-sm text-white-300 opacity-80 transition-colors duration-300 ease-out md:text-lg xl:text-xl dark:text-white-100"
        >
          <li
            v-for="(pointer, index) in workExperience.jobPointers"
            :key="`${workExperience.company} job pointer ${index + 1}`"
            :class="{
              'mb-0': index === workExperience.jobPointers.length - 1,
              'mb-2': index !== workExperience.jobPointers.length - 1,
            }"
          >
            {{ pointer }}
          </li>
        </ul>
        <ul
          v-if="workExperience.skills"
          :aria-label="`Technologies used in ${workExperience.company}`"
          class="mt-2 flex flex-wrap"
        >
          <li
            v-for="skill of workExperience.skills"
            :key="`${workExperience.company} skill - ${skill}`"
            class="mr-1.5 mt-2"
          >
            <div
              class="leading-1.5 flex items-center rounded-full bg-aqua/50 px-3 py-1 text-sm transition-colors duration-300 ease-out dark:bg-light-orange/50"
            >
              {{ skill }}
            </div>
          </li>
        </ul>
      </div>
      <ClientOnly fallback-tag="span">
        <aside
          class="hidden h-44 w-44 lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-5 lg:block lg:h-[14rem] lg:w-[14rem] lg:place-self-center xl:h-[18rem] xl:w-[18rem]"
        >
          <Lottie
            :animation-data="ExperienceJSON"
            data-testid="experienceLottie"
          />
        </aside>
        <template #fallback>
          <p>Loading Lottie animation</p>
        </template>
      </ClientOnly>
    </div>
    <div
      v-if="!darkMode"
      class="dark-blue-gradient -left-[6rem] xl:h-[130%] 2xl:-left-40 2xl:h-[140%]"
    />
  </div>
</template>
