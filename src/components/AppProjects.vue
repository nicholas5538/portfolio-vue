<script setup lang="ts">
import { TooltipProvider } from "radix-vue";
import { computed } from "vue";
import UiIconButton from "~/components/ui/UiIconButton.server.vue";
import UiIconifyIcon from "~/components/ui/UiIconifyIcon.vue";
import UiSkillLabels from "~/components/ui/UiSkillLabels.server.vue";
import UiTooltip from "~/components/ui/UiTooltip.vue";
import { projects } from "~/constants/globalVariables";
import type { TElement } from "~/constants/typeInference";

function checkIndex(index: number) {
  return index % 2 === 0;
}

const listRefs = useState<TElement[]>("listRefs");

const columnPlacement = computed(() => {
  return (index: number) => [
    checkIndex(index)
      ? "md:col-start-1 md:col-end-7"
      : "md:col-start-6 md:col-end-13",
  ];
});
</script>

<template>
  <section class="mx-auto mb-20 w-11/12 max-w-7xl sm:mb-28 2xl:mb-44">
    <h2
      :ref="(el) => listRefs.push(el)"
      class="sectionHeading white-bg-heading mb-5 text-lg md:text-3xl xl:text-4xl"
    >
      <UiIconifyIcon
        icon="fluent-emoji:backhand-index-pointing-down"
        :width="36"
        :height="36"
      />
      <span class="span-heading from-black-400 to-black-400">Projects</span>
    </h2>
    <h3 class="white-sub-heading text-lg font-bold md:text-3xl xl:text-4xl">
      Coding projects that I enjoyed working on
    </h3>
    <article class="space-y-5 lg:space-y-20">
      <article v-for="[key, value] in projects" :key="key" class="relative">
        <div
          class="grid grid-rows-1 rounded-lg px-4 py-4 shadow-project transition-transform duration-300 ease-out hover:-translate-y-2 md:grid-cols-12 md:items-center md:justify-items-center md:rounded-none md:px-0 md:shadow-none md:transition-none md:hover:translate-y-0 lg:gap-y-2 dark:shadow-project-dark dark:md:shadow-none"
        >
          <div
            :class="[
              columnPlacement(value.id),
              'flex flex-col justify-center space-y-4 md:items-center',
            ]"
          >
            <h3
              :class="[
                'white-sub-heading select-none font-bold tracking-wide md:mb-0 dark:text-[#FFA54E]',
              ]"
            >
              {{ value.projectTitle }}
            </h3>
            <div
              :class="[
                'mb-2 transition-colors duration-300 ease-out md:bg-white-400 md:p-4 md:shadow-project dark:bg-none dark:md:bg-black-500 dark:md:shadow-xl',
              ]"
            >
              <p :class="['text-sm xl:text-xl dark:text-white-100']">
                {{ value.projectDescription }}
              </p>
              <UiSkillLabels
                :label="`Technologies used in ${value.projectTitle}`"
                :skills="value.techStack"
                class="gap-x-4 gap-y-2"
              />
            </div>
            <div>
              <h4
                class="mb-2 select-none font-semibold text-black-200 transition-colors duration-300 ease-out md:text-center md:text-lg lg:text-xl xl:text-2xl dark:text-white-500"
              >
                Links
              </h4>
              <div class="flex flex-row flex-wrap gap-x-4 md:justify-center">
                <TooltipProvider :delay-duration="300">
                  <UiTooltip
                    v-for="{ icon, text, url } in value.links"
                    :key="`${value.projectTitle}-${text}-link`"
                    :icon="icon!"
                    :text="text"
                    :url="url"
                  >
                    <template #link>
                      <UiIconButton :label="text" :icon="icon!" />
                    </template>
                  </UiTooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
          <div
            :class="[
              { 'md:left-[45%]': checkIndex(value.id) },
              'absolute left-0 top-0 -z-10 hidden aspect-[276/175] h-auto w-fit max-w-[55%] overflow-y-clip opacity-[8%] md:top-[10%] md:block md:rounded-md md:border-2 md:border-black-200 md:opacity-60 xl:top-0 dark:md:opacity-30',
            ]"
          >
            <NuxtPicture
              class="size-full"
              fit="cover"
              format="avif,webp"
              loading="lazy"
              placeholder
              quality="75"
              :alt="`An image of ${value.projectTitle}`"
              :src="value.imageURL"
              sizes="0 md:50vw xl:552px"
            />
          </div>
        </div>
      </article>
    </article>
  </section>
</template>
