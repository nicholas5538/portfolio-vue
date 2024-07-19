<script setup lang="ts">
import UiIconifyIcon from "~/components/ui/UiIconifyIcon.vue";

const { label, icon } = withDefaults(
  defineProps<{
    css?: string;
    label: string;
    icon: string;
  }>(),
  {
    css: "tooltip",
  }
);
</script>

<template>
  <button
    :aria-label="label"
    aria-describedby="button-icon"
    :class="css"
    type="button"
  >
    <UiIconifyIcon :icon="icon" />
  </button>
</template>
