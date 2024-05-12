<script setup lang="ts">
import IconifyIcon from "~/components/IconifyIcon.vue";

const props = withDefaults(
  defineProps<{
    ariaLabel?: string;
    icon: string;
  }>(),
  {
    ariaLabel: "",
  }
);

const buttonLabel = computed(() => props.ariaLabel || undefined);
</script>

<template>
  <button
    :aria-label="buttonLabel"
    aria-describedby="button-icon"
    class="focus:shadow-black inline-flex h-[40px] w-[40px] items-center justify-center rounded-full bg-aqua text-white-400 shadow-[0_2px_10px] hover:bg-dark-aqua focus:shadow-[0_0_0_2px] dark:bg-light-orange dark:text-black-300 dark:hover:bg-orange-red"
    type="button"
  >
    <IconifyIcon :icon="icon" />
  </button>
</template>
