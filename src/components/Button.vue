<script setup lang="ts">
import { twMerge } from "tailwind-merge";

type Props = {
  ariaLabel: string;
  buttonClass: string;
  link: string;
  linkClass: string;
  target: string;
  text: string;
};

const props = withDefaults(defineProps<Props>(), {
  ariaLabel: "",
  buttonClass: "",
  linkClass: "",
  target: "_blank",
});

const computedLinkClass = computed(() =>
  twMerge(
    "h-full w-full text-lg tracking-widest text-white-400 no-underline hover:no-underline dark:text-black-300",
    props.linkClass
  )
);

const computedButtonClass = computed(() =>
  twMerge(
    "rounded-2xl bg-aqua px-4 py-2 font-bold transition-colors duration-300 ease-out hover:bg-dark-aqua dark:bg-light-orange dark:hover:bg-orange-red",
    props.buttonClass
  )
);
</script>

<template>
  <button
    :aria-label="props.ariaLabel"
    :class="computedButtonClass"
    type="button"
  >
    <NuxtLink
      :class="computedLinkClass"
      :target="props.target"
      :to="props.link"
    >
      {{ text }}
    </NuxtLink>
  </button>
</template>
