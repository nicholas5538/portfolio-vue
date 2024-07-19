<script setup lang="ts">
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  ariaLabel?: string;
  buttonClass?: string;
  link: string;
  linkClass?: string;
  target?: string;
  text: string;
};

const props = withDefaults(defineProps<ButtonProps>(), {
  ariaLabel: "",
  buttonClass: "",
  linkClass: "",
  target: "_blank",
});

const computedButtonClass = computed(() =>
  twMerge(
    "text-lg tracking-widest text-white-400 no-underline hover:no-underline dark:text-black-300",
    props.buttonClass
  )
);

const computedLinkClass = computed(() =>
  twMerge(
    "rounded-2xl bg-aqua px-4 py-2 font-bold transition-colors duration-300 ease-out hover:bg-dark-aqua dark:bg-light-orange dark:hover:bg-orange-red",
    props.linkClass
  )
);
</script>

<template>
  <NuxtLink
    :aria-label="ariaLabel"
    :class="computedLinkClass"
    :target="target"
    :to="link"
  >
    <button :class="computedButtonClass" type="button">
      {{ text }}
    </button>
  </NuxtLink>
</template>
