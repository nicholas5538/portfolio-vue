<script setup lang="ts">
import type { AsyncDataRequestStatus } from "#app";
import UiIconifyIcon from "~/components/ui/UiIconifyIcon.vue";
import UiSkillLabels from "~/components/ui/UiSkillLabels.server.vue";
import { workExperiences } from "~/constants/global-variables";
import type { TElement } from "~/constants/type-inference";

const listRefs = useState<TElement[]>("listRefs");
const { workExperienceLink: animationLink = "", status } = defineProps<{
  workExperienceLink?: string;
  status: AsyncDataRequestStatus;
}>();
</script>

<template>
  <section class="dark-blue-section">
    <div class="dark-blue-container lg:flex lg:items-center lg:gap-x-30">
      <section class="flex flex-col space-y-5">
        <hgroup class="space-y-5">
          <h2
            :ref="(el) => listRefs.push(el)"
            class="section-heading text-blue text-xl font-bold md:text-3xl xl:text-4xl"
          >
            <UiIconifyIcon
              icon="fluent-emoji:office-worker"
              :width="36"
              :height="36"
            />
            <span class="span-heading">Experience</span>
          </h2>
          <h3
            class="text-white-400 dark:text-white-300 text-lg font-bold md:text-3xl xl:text-4xl"
          >
            A peek at my early career
          </h3>
        </hgroup>
        <div
          v-for="[key, workExperience] in workExperiences"
          :key="key"
          class="ml-0 max-w-200 not-last:mb-10"
        >
          <header>
            <hgroup>
              <p
                class="border-l-blue text-white-400 dark:border-l-orange-red dark:text-white-300 mb-2 border-l-2 pl-4 font-semibold transition-colors duration-300 ease-out md:text-xl lg:text-2xl xl:text-3xl"
              >
                {{ `${workExperience.startDate} - ${workExperience.endDate}` }}
              </p>
              <h4
                class="text-white-400 dark:text-white-300 font-semibold transition-colors duration-300 ease-out md:text-lg lg:text-xl xl:text-2xl"
              >
                {{ workExperience.title }}
              </h4>
            </hgroup>
            <span
              class="text-white-400 dark:text-white-300 font-semibold transition-colors duration-300 ease-out md:text-lg lg:text-xl xl:text-2xl"
            >
              @
              <NuxtLink
                :aria-label="`Click here to redirect to ${workExperience.company} website`"
                :to="workExperience.url"
                class="text-blue dark:text-orange"
                external
                rel="noopener noreferrer"
                target="_blank"
                >{{ workExperience.company }}
              </NuxtLink>
            </span>
          </header>
          <ul
            class="text-white-300 dark:text-white-100 list-inside list-disc py-5 text-sm opacity-80 transition-colors duration-300 ease-out md:text-lg"
          >
            <li
              v-for="(pointer, jobPointerIndex) in workExperience.jobPointers"
              :key="`${workExperience.company} job pointer ${jobPointerIndex + 1}`"
              :class="{
                'mb-0':
                  jobPointerIndex === workExperience.jobPointers.length - 1,
                'mb-2':
                  jobPointerIndex !== workExperience.jobPointers.length - 1,
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
      </section>
      <ClientOnly>
        <aside class="hidden size-44 lg:block lg:size-56 xl:size-72">
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
  </section>
</template>
