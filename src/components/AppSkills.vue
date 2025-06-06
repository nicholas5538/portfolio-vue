<script setup lang="ts">
import { TooltipProvider } from "radix-vue";
import type { AsyncDataRequestStatus } from "#app";
import UiIconifyIcon from "~/components/ui/UiIconifyIcon.vue";
import UiTooltip from "~/components/ui/UiTooltip.vue";
import skillsIcons from "~/constants/skill-icons";
import type { TElement } from "~/constants/type-inference";

const listRefs = useState<TElement[]>("listRefs");
const { skillsLink: animationLink = "", status } = defineProps<{
  skillsLink?: string;
  status: AsyncDataRequestStatus;
}>();
</script>

<template>
  <section class="relative mx-auto w-full max-w-7xl px-4 py-6 lg:py-12">
    <div class="ml-0 max-w-200 space-y-5">
      <hgroup class="space-y-5">
        <h2
          :ref="(el) => listRefs.push(el)"
          class="section-heading white-bg-heading"
        >
          <UiIconifyIcon icon="fluent-emoji:wrench" :width="36" :height="36" />
          <span class="span-heading from-black-200 to-black-200">Skills</span>
        </h2>
        <p
          class="dark:text-white-300 text-lg font-bold md:text-3xl xl:text-4xl"
        >
          Some technologies and tools I have used
        </p>
      </hgroup>
      <div>
        <template v-for="[type, { iconMap }] in skillsIcons" :key="type">
          <h4 class="white-sub-heading dark:text-dark-orange font-semibold">
            {{
              type === "average"
                ? "I have played around with"
                : "I am not that bad with"
            }}:
          </h4>
          <template v-for="[key, { icons, text }] in iconMap" :key="key">
            <h5
              class="white-sub-heading dark:text-white-100 font-medium opacity-80 dark:opacity-100"
            >
              {{ text }}
            </h5>
            <aside class="mb-5 flex flex-wrap gap-4">
              <TooltipProvider :delay-duration="300">
                <UiTooltip
                  v-for="[iconText, { icon }] in icons"
                  :key="iconText"
                  :icon="icon"
                  :text="iconText"
                />
              </TooltipProvider>
            </aside>
          </template>
        </template>
      </div>
    </div>
    <ClientOnly>
      <aside
        class="hidden size-56 lg:absolute lg:right-15 lg:bottom-40 lg:block lg:size-64 xl:size-90"
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
