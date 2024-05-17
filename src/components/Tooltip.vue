<script setup lang="ts">
import {
  TooltipArrow,
  TooltipContent,
  TooltipPortal,
  TooltipRoot,
  TooltipTrigger,
} from "radix-vue";
import IconButton from "~/components/IconButton.server.vue";

const props = withDefaults(
  defineProps<{
    icon: string;
    sideOffset?: number;
    text: string;
    url?: string;
  }>(),
  {
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
        :aria-label="`Click to see more on my ${props.text}`"
        class="focus:shadow-black inline-flex h-[40px] w-[40px] items-center justify-center rounded-full bg-aqua text-white-400 shadow-[0_2px_10px] hover:bg-dark-aqua focus:shadow-[0_0_0_2px] dark:bg-light-orange dark:text-black-300 dark:hover:bg-orange-red"
        external
        target="_blank"
        :to="props.url"
      >
        <slot name="link" />
      </NuxtLink>
      <IconButton v-else :label="props.text" :icon="props.icon" />
    </TooltipTrigger>
    <TooltipPortal>
      <TooltipContent
        avoid-collisions
        class="select-none rounded-md bg-white-200 p-3 text-sm font-bold leading-none text-black-400 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade dark:bg-black-100 dark:text-white-100"
        hide-when-detached
        :side-offset="props.sideOffset"
      >
        {{ text }}
        <TooltipArrow class="fill-aqua dark:fill-light-orange" />
      </TooltipContent>
    </TooltipPortal>
  </TooltipRoot>
</template>

<style scoped></style>
