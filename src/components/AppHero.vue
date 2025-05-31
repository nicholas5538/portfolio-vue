<script setup lang="ts">
import { TooltipProvider } from "radix-vue";
import UiIconifyIcon from "~/components/ui/UiIconifyIcon.vue";
import { externalLinks, iconAlias } from "~/constants/globalVariables";
import { getGithubViewer } from "~/data/data";

const gitHubIcon = iconAlias.get("github")!;
const profileIcon = iconAlias.get("profile")!;
const mailIcon = iconAlias.get("mail")!;
const locationIcon = iconAlias.get("location")!;

const { data, status } = await getGithubViewer({
  deep: false,
  getCachedData(key, nuxtApp) {
    return nuxtApp.payload.data[key] || nuxtApp.static.data[key];
  },
});
</script>

<template>
  <div
    v-once
    class="mx-auto mb-28 grid w-full max-w-7xl grid-cols-1 px-4 pt-32 md:grid-cols-3 md:grid-rows-3 md:items-center md:justify-between md:gap-x-8 md:pt-60 lg:mb-60 xl:grid-cols-4 dark:mb-12 dark:2xl:mb-24"
  >
    <div
      class="group shadow-dropdown z-10 mx-auto mb-8 aspect-2/3 max-h-110 min-h-110 overflow-hidden rounded-3xl md:order-last md:col-span-1 md:row-start-1 md:row-end-4 md:m-0 md:aspect-auto md:max-h-full md:min-h-84 md:w-fit md:justify-self-end lg:min-h-112 xl:col-span-2 xl:min-h-[42.65625rem] dark:shadow-none"
    >
      <div
        class="z-20 size-full bg-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
      >
        <NuxtImg
          alt="My profile picture"
          format="avif,webp"
          :placeholder="[455, 683, 75, 5]"
          preload
          quality="75"
          sizes="294px md:455px"
          src="/images/profile.webp"
        />
      </div>
    </div>
    <h1
      class="mb-4 md:col-span-2 md:row-start-1 md:row-end-2 md:mb-0 md:text-4xl xl:text-5xl"
    >
      <span
        class="origin-wave animate-wave inline-block align-middle text-4xl xl:text-5xl"
      >
        <UiIconifyIcon
          icon="fluent-emoji:waving-hand"
          :width="44"
          :height="44"
        />
      </span>
      Hi there! I&apos;m
      <span
        class="from-aqua to-aqua transition-bgi md:text-black-200 dark:bg-orange-gradient bg-transparent bg-linear-to-b bg-clip-text font-bold text-transparent duration-300 ease-out dark:text-transparent"
      >
        Nicholas</span
      >, I love to design and code beautifully simple things.
    </h1>
    <h2
      class="mb-4 md:col-span-2 md:row-start-2 md:row-end-2 md:mb-0 md:text-2xl xl:text-3xl"
    >
      Nothing excites me more than learning something new and starting a new
      adventure.
    </h2>
    <section
      class="space-y-4 md:col-span-2 md:row-start-3 md:row-end-4 md:space-y-8 xl:gap-y-10"
    >
      <hgroup class="space-y-2">
        <h2 class="md:text-2xl xl:text-3xl">
          Always looking out for opportunities.
        </h2>
        <p class="dark:text-white-100 transition-colors duration-300 ease-out">
          Currently working at
          <span>
            <NuxtLink
              external
              to="https://bandlabtechnologies.com"
              rel="noopener noreferrer"
              target="_blank"
              >BandLab Technologies</NuxtLink
            ></span
          >.
        </p>
      </hgroup>
      <div class="flex items-center justify-start space-x-6">
        <template v-for="[key, value] in externalLinks" :key="key">
          <UiHoverCard
            v-if="key === 'GitHub' && data?.data.viewer && status === 'success'"
            :application="key"
            :application-icon="gitHubIcon"
            :data="data.data.viewer"
            :profile-icon="profileIcon"
            :mail-icon="mailIcon"
            :location-icon="locationIcon"
          />
          <TooltipProvider v-else :delay-duration="300">
            <UiTooltip
              :icon="value.icon ?? ''"
              :text="value.text"
              :url="value.url"
            >
              <template #link>
                <UiIconButton :label="value.text" :icon="value.icon ?? ''" />
              </template>
            </UiTooltip>
          </TooltipProvider>
        </template>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
