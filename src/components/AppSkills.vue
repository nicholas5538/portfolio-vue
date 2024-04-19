<script setup lang="ts">
import { TooltipProvider } from "radix-vue";
import SkillsJSON from "assets/animations/skills.json";
import averageGoodIcons from "~/constants/skill-icons";
</script>

<template>
  <div
    class="relative mx-auto mb-12 flex w-11/12 max-w-7xl flex-col items-start justify-center gap-y-6 2xl:mb-24"
  >
    <div>
      <h2 class="white-bg-heading mb-5">
        <Icon name="💪" size="36" />
        <span class="span-heading from-black-200 to-black-200">Skills</span>
      </h2>
      <h2 class="text-lg font-bold md:text-3xl xl:text-4xl dark:text-white-300">
        Some technologies and tools I have used
      </h2>
    </div>
    <div>
      <div v-for="[type, { iconMap }] in averageGoodIcons" :key="type">
        <h3 class="white-sub-heading font-semibold dark:text-[#FFA54E]">
          {{
            type === "average"
              ? "I have played around with"
              : "I am not that bad with"
          }}:
        </h3>
        <div v-for="[key, { icons, text }] in iconMap" :key="key">
          <h3
            class="white-sub-heading font-medium opacity-80 dark:text-white-100 dark:opacity-100"
          >
            {{ text }}
          </h3>
          <div
            class="mb-2 flex flex-row flex-wrap gap-x-4 gap-y-4 ipad-mini:gap-y-0 lg:mb-4"
          >
            <TooltipProvider :delay-duration="300">
              <Tooltip
                v-for="[iconText, { name }] in icons"
                :key="iconText"
                :name="name"
                :text="iconText"
              />
            </TooltipProvider>
          </div>
        </div>
      </div>
    </div>
    <ClientOnly>
      <aside
        class="hidden h-56 w-56 md:absolute md:bottom-20 md:right-28 md:block lg:bottom-40 lg:right-5 lg:h-[22rem] lg:w-[22rem] xl:h-[28rem] xl:w-[28rem] dark:md:right-10 dark:lg:h-[17rem] dark:lg:w-[17rem] dark:xl:h-[23rem] dark:xl:w-[23rem]"
      >
        <Lottie
          :animation-data="SkillsJSON"
          :speed="0.75"
          data-testid="skillLottie"
        />
      </aside>
      <template #fallback>
        <p>Loading Lottie animation</p>
      </template>
    </ClientOnly>
  </div>
</template>
