<script setup lang="ts">
import "iconify-icon";
import type { TIcon } from "~/constants/typeInference";

const props = withDefaults(defineProps<TIcon>(), {
  width: 24,
  height: 24,
});
</script>

<template>
  <iconify-icon
    :icon="props.icon"
    :width="props.width"
    :height="props.height"
  />
</template>
