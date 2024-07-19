<script setup lang="ts">
import "iconify-icon";
import type { TIcon } from "~/constants/typeInference";

const { icon, width, height } = withDefaults(defineProps<TIcon>(), {
  width: 24,
  height: 24,
});
</script>

<template>
  <iconify-icon :icon="icon" :width="width" :height="height" />
</template>
