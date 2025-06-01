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
  <section class="mx-auto w-full max-w-7xl space-y-5 px-4 py-6 lg:py-12">
    <hgroup>
      <h2
        :ref="(el) => listRefs.push(el)"
        class="section-heading white-bg-heading mb-5 text-lg md:text-3xl xl:text-4xl"
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
    </hgroup>
    <article class="space-y-5 lg:space-y-20">
      <article
        v-for="[key, value] in projects"
        :key="key"
        class="relative z-10"
      >
        <div
          class="shadow-project dark:shadow-project-dark grid grid-rows-1 rounded-lg p-4 transition-transform duration-300 ease-out hover:-translate-y-2 md:grid-cols-12 md:items-center md:justify-items-center md:rounded-none md:p-0 md:shadow-none md:transition-none md:hover:translate-y-0 lg:gap-y-2 dark:md:shadow-none"
        >
          <div
            :class="[
              columnPlacement(value.id),
              'flex flex-col justify-center space-y-4 md:items-center',
            ]"
          >
            <h4
              :class="[
                'white-sub-heading dark:text-dark-orange font-bold tracking-wide select-none md:mb-0',
              ]"
            >
              {{ value.projectTitle }}
            </h4>
            <div
              :class="[
                'md:bg-white-400 md:shadow-project dark:md:bg-black-500 transition-colors duration-300 ease-out md:p-4 dark:bg-none dark:md:shadow-xl',
              ]"
            >
              <p :class="['dark:text-white-100 text-sm xl:text-xl']">
                {{ value.projectDescription }}
              </p>
              <UiSkillLabels
                :label="`Technologies used in ${value.projectTitle}`"
                :skills="value.techStack"
                class="mt-2 gap-x-4 gap-y-2"
              />
            </div>
            <div class="space-y-2">
              <p
                class="text-black-200 dark:text-white-500 font-semibold transition-colors duration-300 ease-out select-none md:text-center md:text-lg lg:text-xl xl:text-2xl"
              >
                Links
              </p>
              <div class="flex flex-wrap space-x-4 md:justify-center">
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
              { 'md:left-9/20': checkIndex(value.id) },
              'md:border-black-200 absolute top-0 left-0 -z-10 hidden aspect-276/175 h-auto w-fit max-w-11/20 overflow-y-clip md:top-1/10 md:block md:rounded-md md:border-2 md:opacity-100 lg:top-0 xl:top-0 dark:md:opacity-30',
            ]"
          >
            <NuxtImg
              class="size-full"
              fit="cover"
              format="avif,webp"
              loading="lazy"
              placeholder
              quality="75"
              :alt="value.projectTitle"
              :src="value.imageURL"
              sizes="0 md:50vw xl:552px"
            />
          </div>
        </div>
      </article>
    </article>
  </section>
</template>
