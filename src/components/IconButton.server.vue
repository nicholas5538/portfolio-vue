<script setup lang="ts">
import IconifyIcon from "~/components/IconifyIcon.vue";

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

// const buttonLabel = computed(() => props.ariaLabel || undefined);
</script>

<template>
  <button
    :aria-label="label"
    aria-describedby="button-icon"
    :class="css"
    type="button"
  >
    <IconifyIcon :icon="icon" />
  </button>
</template>
