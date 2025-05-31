<script setup lang="ts">
import type { AsyncDataRequestStatus } from "#app";
import UiIconifyIcon from "~/components/ui/UiIconifyIcon.vue";
import UiSkillLabels from "~/components/ui/UiSkillLabels.server.vue";
import { workExperiences } from "~/constants/globalVariables";
import type { TElement } from "~/constants/typeInference";

const darkMode = useState<boolean>("darkMode");
const listRefs = useState<TElement[]>("listRefs");
const { workExperienceLink: animationLink = "", status } = defineProps<{
  workExperienceLink?: string;
  status: AsyncDataRequestStatus;
}>();
</script>

<template>
  <section class="dark-blue-section">
    <div
      class="dark-blue-container 3xl:mb-68 md:mt-20 md:mb-40 md:items-center md:gap-x-5 md:gap-y-12 md:pt-0 lg:mb-52 xl:mb-56 2xl:mb-72 dark:mb-12 dark:xl:mb-24"
    >
      <div class="md:col-span-2 md:row-start-1 md:row-end-1 md:mt-5 md:mb-0">
        <h2
          :ref="(el) => listRefs.push(el)"
          class="sectionHeading text-blue mb-5 text-xl font-bold md:text-3xl xl:text-4xl"
        >
          <UiIconifyIcon
            icon="fluent-emoji:office-worker"
            :width="36"
            :height="36"
          />
          <span class="span-heading">Experience</span>
        </h2>
        <h2
          class="text-white-400 dark:text-white-300 mb-5 text-lg font-bold md:mb-0 md:text-3xl xl:text-4xl"
        >
          A peek at my early career
        </h2>
      </div>
      <div
        v-for="([key, workExperience], index) in workExperiences"
        :key="key"
        :class="{
          'md:row-start-2 md:row-end-4': index === 0,
          'md:row-start-4 md:row-end-6': index !== 0,
        }"
        class="mb-10 md:col-span-2 md:mb-5"
      >
        <h3
          class="border-l-blue text-white-400 dark:border-l-orange-red dark:text-white-300 mb-2 border-l-2 pl-4 font-semibold transition-colors duration-300 ease-out md:text-xl lg:text-2xl xl:text-3xl"
        >
          {{ `${workExperience.startDate} - ${workExperience.endDate}` }}
        </h3>
        <h4
          class="text-white-400 dark:text-white-300 font-semibold transition-colors duration-300 ease-out md:text-lg lg:text-xl xl:text-2xl"
        >
          {{ workExperience.title }}
        </h4>
        <h5
          class="text-white-400 dark:text-white-300 mb-2 font-semibold transition-colors duration-300 ease-out md:text-lg lg:text-xl xl:text-2xl"
        >
          @
          <NuxtLink
            :aria-label="`Click here to redirect to ${workExperience.company} website`"
            :to="workExperience.url"
            class="text-blue dark:text-orange"
            external
            rel="noopener noreferrer"
            target="_blank"
          >
            {{ workExperience.company }}
          </NuxtLink>
        </h5>
        <ul
          class="text-white-300 dark:text-white-100 list-inside list-disc text-sm opacity-80 transition-colors duration-300 ease-out md:text-lg xl:text-xl"
        >
          <li
            v-for="(pointer, jobPointerIndex) in workExperience.jobPointers"
            :key="`${workExperience.company} job pointer ${jobPointerIndex + 1}`"
            :class="{
              'mb-0': jobPointerIndex === workExperience.jobPointers.length - 1,
              'mb-2': jobPointerIndex !== workExperience.jobPointers.length - 1,
            }"
          >
            {{ pointer }}
          </li>
        </ul>
        <UiSkillLabels
          :label="`Technologies used in ${workExperience.company}`"
          :skills="workExperience.skills"
        />
      </div>
      <ClientOnly>
        <aside
          class="hidden size-44 lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-5 lg:block lg:size-56 lg:place-self-center xl:size-72"
        >
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
            data-testid="experienceLottie"
          />
        </aside>
      </ClientOnly>
    </div>
    <div
      v-if="!darkMode"
      class="dark-blue-gradient -left-24 h-11/10 xl:h-6/5"
    />
  </section>
</template>
