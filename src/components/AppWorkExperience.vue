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
      class="dark-blue-container mb-[13rem] md:mb-72 md:mt-20 md:items-center md:gap-x-5 md:gap-y-12 md:pt-0 lg:mb-[22rem] xl:mb-80 2xl:mb-[26rem] 3xl:mb-[22rem] dark:mb-12 dark:xl:mb-24"
    >
      <div class="md:col-span-2 md:row-start-1 md:row-end-1 md:mb-0 md:mt-5">
        <h2
          :ref="(el) => listRefs.push(el)"
          class="sectionHeading mb-5 text-xl font-bold text-blue md:text-3xl xl:text-4xl"
        >
          <UiIconifyIcon
            icon="fluent-emoji:office-worker"
            :width="36"
            :height="36"
          />
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
        <UiSkillLabels
          v-if="workExperience.skills"
          :label="`Technologies used in ${workExperience.company}`"
          :skills="workExperience.skills"
        />
      </div>
      <ClientOnly>
        <aside
          class="hidden h-44 w-44 lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-5 lg:block lg:h-[14rem] lg:w-[14rem] lg:place-self-center xl:h-[18rem] xl:w-[18rem]"
        >
          <div
            v-if="status === 'pending'"
            class="animate-pulse rounded-2xl p-4"
          />
          <Lottie
            v-else
            :animation-link="animationLink"
            data-testid="experienceLottie"
          />
        </aside>
      </ClientOnly>
    </div>
    <div
      v-if="!darkMode"
      class="dark-blue-gradient -left-[6rem] xl:h-[130%] 2xl:-left-40 2xl:h-[140%]"
    />
  </section>
</template>
