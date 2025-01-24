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
      class="mx-auto flex size-full max-w-7xl flex-col flex-nowrap items-start justify-between space-y-2 p-4 md:flex-row md:items-center md:space-y-0 lg:py-8"
    >
      <h4
        class="text-black-200 dark:text-white-300 text-base font-medium md:order-first md:text-lg xl:text-xl"
      >
        Designed & Built by Nicholas Yong
      </h4>
      <h4
        class="text-black-200 dark:text-white-300 text-base font-medium md:order-2 md:text-lg xl:text-xl"
      >
        Thanks for visiting!
      </h4>
      <div class="flex space-x-4 md:order-last">
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
