<script setup lang="ts">
import {
  TooltipArrow,
  TooltipContent,
  TooltipPortal,
  TooltipRoot,
  TooltipTrigger,
} from "radix-vue";
import UiIconButton from "~/components/ui/UiIconButton.server.vue";

type ToolTipProps = {
  css?: string;
  icon: string;
  sideOffset?: number;
  text: string;
  url?: string;
};

const {
  css = "tooltip",
  icon,
  sideOffset = 6,
  text,
  url = "#",
} = defineProps<ToolTipProps>();
</script>

<template>
  <TooltipRoot>
    <TooltipTrigger as-child>
      <NuxtLink
        v-if="$slots.link"
        :aria-label="`Click to see more on my ${text}`"
        :class="css"
        external
        target="_blank"
        :to="url"
      >
        <slot name="link" />
      </NuxtLink>
      <UiIconButton v-else :css="css" :label="text" :icon="icon" />
    </TooltipTrigger>
    <TooltipPortal>
      <TooltipContent
        avoid-collisions
        class="bg-white-400 text-black-400 data-[state=delayed-open]:data-[side=bottom]:animate-slide-up-and-fade data-[state=delayed-open]:data-[side=left]:animate-slide-right-and-fade data-[state=delayed-open]:data-[side=right]:animate-slide-left-and-fade data-[state=delayed-open]:data-[side=top]:animate-slide-down-and-fade dark:bg-black-100 dark:text-white-100 border-aqua dark:border-light-orange z-20 rounded-md border-2 p-3 text-sm leading-none font-bold shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] select-none"
        hide-when-detached
        :side-offset="sideOffset"
      >
        {{ text }}
        <TooltipArrow class="fill-aqua dark:fill-light-orange" />
      </TooltipContent>
    </TooltipPortal>
  </TooltipRoot>
</template>

<style scoped></style>
