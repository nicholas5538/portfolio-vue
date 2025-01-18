<script setup lang="ts">
import { TooltipProvider } from "radix-vue";
import type { AsyncDataRequestStatus } from "#app";
import UiIconifyIcon from "~/components/ui/UiIconifyIcon.vue";
import UiTooltip from "~/components/ui/UiTooltip.vue";
import skillsIcons from "~/constants/skill-icons";
import type { TElement } from "~/constants/typeInference";

const listRefs = useState<TElement[]>("listRefs");
const { skillsLink: animationLink = "", status } = defineProps<{
  skillsLink?: string;
  status: AsyncDataRequestStatus;
}>();
</script>

<template>
  <section
    class="dark-mode-container relative mx-auto mb-12 flex w-full max-w-7xl flex-col items-start justify-center gap-y-6 px-4 2xl:mb-24"
  >
    <div>
      <h2
        :ref="(el) => listRefs.push(el)"
        class="sectionHeading white-bg-heading mb-5"
      >
        <UiIconifyIcon icon="fluent-emoji:wrench" :width="36" :height="36" />
        <span class="span-heading from-black-200 to-black-200">Skills</span>
      </h2>
      <h2 class="text-lg font-bold md:text-3xl xl:text-4xl dark:text-white-300">
        Some technologies and tools I have used
      </h2>
    </div>
    <div>
      <template v-for="[type, { iconMap }] in skillsIcons" :key="type">
        <h3 class="white-sub-heading font-semibold dark:text-[#FFA54E]">
          {{
            type === "average"
              ? "I have played around with"
              : "I am not that bad with"
          }}:
        </h3>
        <template v-for="[key, { icons, text }] in iconMap" :key="key">
          <h3
            class="white-sub-heading font-medium opacity-80 dark:text-white-100 dark:opacity-100"
          >
            {{ text }}
          </h3>
          <div
            class="mb-2 flex flex-row flex-wrap gap-x-4 gap-y-4 ipad-mini:gap-y-0 lg:mb-4"
          >
            <TooltipProvider :delay-duration="300">
              <UiTooltip
                v-for="[iconText, { icon }] in icons"
                :key="iconText"
                :icon="icon"
                :text="iconText"
              />
            </TooltipProvider>
          </div>
        </template>
      </template>
    </div>
    <ClientOnly>
      <aside
        class="hidden size-56 lg:absolute lg:bottom-40 lg:right-5 lg:block lg:h-[18rem] lg:w-[18rem] xl:h-[24rem] xl:w-[24rem]"
      >
        <div
          v-if="status === 'pending'"
          class="animate-pulse rounded-2xl p-4"
        />
        <Lottie
          class="h-full w-auto"
          autoplay
          loop
          :src="animationLink"
          data-testid="skillLottie"
        />
      </aside>
    </ClientOnly>
  </section>
</template>
