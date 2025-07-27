<script setup lang="ts">
import { TooltipProvider } from "radix-vue";
import UiTooltip from "~/components/ui/UiTooltip.vue";
import useSetButtonState from "~/composables/setButtonState";

useSetButtonState();
const visible = useState("visible");

function goToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
</script>

<template>
  <div v-if="visible" class="relative" @click="goToTop">
    <TooltipProvider :delay-duration="300">
      <UiTooltip
        css="tooltip fixed top-9/10 z-50 max-w-7xl xl:right-0 right-1/80 cursor-pointer xl:right-1/20 size-10"
        icon="mdi:arrow-up"
        text="Click to scroll to the top"
      />
    </TooltipProvider>
  </div>
</template>
