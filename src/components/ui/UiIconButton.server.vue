<script setup lang="ts">
import UiIconifyIcon from "~/components/ui/UiIconifyIcon.vue";

const {
  css = "tooltip",
  label,
  icon,
} = defineProps<{
  css?: string;
  label: string;
  icon: string;
}>();
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
