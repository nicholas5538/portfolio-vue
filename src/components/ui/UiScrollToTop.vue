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
        css="tooltip fixed top-[90%] z-50 ml-[85%] cursor-pointer md:ml-[94%] h-[40px] w-[40px]"
        icon="mdi:arrow-up"
        text="Click to scroll to the top"
      />
    </TooltipProvider>
  </div>
</template>
