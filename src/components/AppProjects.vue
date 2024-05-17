<script setup lang="ts">
import { TooltipProvider } from "radix-vue";
import { computed } from "vue";
import IconifyIcon from "~/components/IconifyIcon.vue";
import SkillLabels from "~/components/SkillLabels.server.vue";
import { projects } from "~/constants/globalVariables";
import type { TElement } from "~/constants/typeInference";

function checkIndex(index: number) {
  return index % 2 === 0;
}

const listRefs = useState<TElement[]>("listRefs");

const columnPlacement = computed(() => {
  return (index: number) => ({
    "md:col-start-1 md:col-end-7": checkIndex(index),
    "md:col-start-6 md:col-end-13": !checkIndex(index),
  });
});
</script>

<template>
  <div>
    <div class="mx-auto mb-20 w-11/12 max-w-7xl sm:mb-28 2xl:mb-44">
      <h2
        :ref="(el) => listRefs.push(el)"
        class="sectionHeading white-bg-heading mb-5 text-lg md:text-3xl xl:text-4xl"
      >
        <IconifyIcon
          icon="fluent-emoji:backhand-index-pointing-down"
          :width="36"
          :height="36"
        />
        <span class="span-heading from-black-400 to-black-400">Projects</span>
      </h2>
      <h3 class="white-sub-heading text-lg font-bold md:text-3xl xl:text-4xl">
        Coding projects that I enjoyed working on
      </h3>
      <ul
        v-for="[key, value] in projects"
        :key="key"
        class="relative z-0 mb-5 list-none"
      >
        <li
          class="grid grid-rows-1 rounded-lg px-5 py-4 shadow-project transition-transform duration-300 ease-out hover:-translate-y-2 md:grid-cols-12 md:grid-rows-4 md:items-center md:justify-items-center md:rounded-none md:shadow-none md:transition-none md:hover:translate-y-0 lg:gap-y-2 dark:shadow-project-dark dark:md:shadow-none"
        >
          <h3
            :class="[
              columnPlacement(value.id),
              'white-sub-heading select-none font-bold tracking-wide md:row-start-1 md:row-end-2 md:mb-0 dark:text-[#FFA54E]',
            ]"
          >
            {{ value.projectTitle }}
          </h3>
          <div
            :class="[
              columnPlacement(value.id),
              'mb-2 transition-colors duration-300 ease-out md:row-start-2 md:row-end-4 md:bg-white-400 md:p-4 md:shadow-project dark:bg-none dark:md:bg-black-500 dark:md:shadow-xl',
            ]"
          >
            <p
              :class="[
                columnPlacement(value.id),
                'text-sm xl:text-xl dark:text-white-100',
              ]"
            >
              {{ value.projectDescription }}
            </p>
            <SkillLabels
              :label="`Technologies used in ${value.projectTitle}`"
              :skills="value.techStack"
              class="gap-x-4 gap-y-2"
            />
          </div>
          <div
            :class="[
              columnPlacement(value.id),
              'row-span-1 mb-2 md:row-start-4 md:row-end-5',
            ]"
          >
            <div>
              <h4
                class="mb-2 select-none font-semibold text-black-200 transition-colors duration-300 ease-out md:text-center md:text-lg lg:text-xl xl:text-2xl dark:text-white-500"
              >
                Links
              </h4>
              <div class="flex flex-row flex-wrap gap-x-4 md:justify-center">
                <TooltipProvider :delay-duration="300">
                  <Tooltip
                    v-for="{ icon, text, url } in value.links"
                    :key="`${value.projectTitle}-${text}-link`"
                    :icon="icon!"
                    :text="text"
                    :url="url"
                  >
                    <template #link>
                      <IconButton :icon="icon!" />
                    </template>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
            <aside
              :class="[
                { 'md:left-[45%]': checkIndex(value.id) },
                'absolute left-0 top-0 -z-10 h-full max-h-[350px] w-full opacity-[8%] md:top-1/4 md:h-1/2 md:w-1/2 md:max-w-[600px] md:opacity-60 lg:top-[12.5%] lg:h-3/4 lg:w-1/2 dark:md:opacity-30',
              ]"
            >
              <NuxtPicture
                class="hidden md:inline-block md:rounded-md md:border-2 md:border-black-200"
                fit="cover"
                format="webp"
                loading="lazy"
                placeholder
                quality="75"
                :alt="`An image of ${value.projectTitle}`"
                :src="value.imageURL"
              />
            </aside>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
