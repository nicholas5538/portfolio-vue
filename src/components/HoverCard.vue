<script setup lang="ts">
import {
  HoverCardArrow,
  HoverCardContent,
  HoverCardPortal,
  HoverCardRoot,
  HoverCardTrigger,
} from "radix-vue";

const hoverState = ref(false);
</script>

<template>
  <HoverCardRoot v-model:open="hoverState" :open-delay="300">
    <HoverCardTrigger as-child>
      <slot name="cardTrigger" />
    </HoverCardTrigger>
    <HoverCardPortal :side-offset="5">
      <HoverCardContent
        align="center"
        avoid-collisions
        :side-offset="6"
        update-position-strategy="optimized"
        class="w-[300px] rounded-md border-dark-blue bg-white-200 p-5 shadow-2xl data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade data-[state=open]:transition-all dark:bg-black-100"
      >
        <slot name="cardContent" />
        <HoverCardArrow class="fill-aqua dark:fill-light-orange" />
      </HoverCardContent>
    </HoverCardPortal>
  </HoverCardRoot>
</template>
