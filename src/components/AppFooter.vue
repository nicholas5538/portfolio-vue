<script setup lang="ts">
import UiIconButton from "~/components/ui/UiIconButton.server.vue";
import UiTooltip from "~/components/ui/UiTooltip.vue";
import { externalLinks } from "~/constants/globalVariables";
import { TooltipProvider } from "radix-vue";

const footerLinks = new Map(externalLinks);
footerLinks.delete("Resume");
</script>

<template>
  <footer>
    <div
      class="mx-auto flex h-full w-11/12 max-w-7xl flex-col flex-nowrap items-start justify-between gap-y-2 py-4 md:flex-row md:items-center md:gap-y-0 lg:py-8"
    >
      <h4
        class="text-base font-medium text-black-200 md:order-first md:text-lg xl:text-xl dark:text-white-300"
      >
        Designed & Built by Nicholas Yong
      </h4>
      <h4
        class="text-base font-medium text-black-200 md:order-2 md:text-lg xl:text-xl dark:text-white-300"
      >
        Thanks for visiting!
      </h4>
      <div class="flex gap-x-4 md:order-last">
        <TooltipProvider :delay-duration="300">
          <UiTooltip
            v-for="[key, { icon, text, url }] in footerLinks"
            :key="`Footer-${key}`"
            :icon="icon!"
            :text="text"
            :url="url"
          >
            <template #link>
              <UiIconButton :label="text" :icon="icon!" />
            </template>
          </UiTooltip>
        </TooltipProvider>
      </div>
    </div>
  </footer>
</template>
