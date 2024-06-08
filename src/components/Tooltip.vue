<script setup lang="ts">
import {
  TooltipArrow,
  TooltipContent,
  TooltipPortal,
  TooltipRoot,
  TooltipTrigger,
} from "radix-vue";
import IconButton from "~/components/IconButton.server.vue";

type ToolTipProps = {
  css?: string;
  icon: string;
  sideOffset?: number;
  text: string;
  url?: string;
};

const { css, icon, sideOffset, text, url } = withDefaults(
  defineProps<ToolTipProps>(),
  {
    css: "tooltip",
    sideOffset: 6,
    url: "#",
  }
);
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
      <IconButton v-else :css="css" :label="text" :icon="icon" />
    </TooltipTrigger>
    <TooltipPortal>
      <TooltipContent
        avoid-collisions
        class="select-none rounded-md bg-white-200 p-3 text-sm font-bold leading-none text-black-400 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade dark:bg-black-100 dark:text-white-100"
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
