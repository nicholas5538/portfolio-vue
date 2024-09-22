<script setup lang="ts">
import "iconify-icon";
import type { TIcon } from "~/constants/typeInference";

const { icon, width = 24, height = 24 } = defineProps<TIcon>();
</script>

<template>
  <iconify-icon :icon="icon" :width="width" :height="height" />
</template>
