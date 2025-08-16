<script setup lang="ts">
import { TooltipProvider } from "radix-vue";
import UiIconifyIcon from "~/components/ui/UiIconifyIcon.vue";
import { externalLinks, iconAlias } from "~/constants/global-variables";
import { getGithubViewer } from "~~/app/graphql/data";

const gitHubIcon = iconAlias.get("github")!;
const profileIcon = iconAlias.get("profile")!;
const mailIcon = iconAlias.get("mail")!;
const locationIcon = iconAlias.get("location")!;

const { data, status } = await getGithubViewer({
  deep: false,
  getCachedData(key, nuxtApp, ctx) {
    if (ctx.cause === "refresh:manual") return undefined;
    return nuxtApp.payload.data[key] || nuxtApp.static.data[key];
  },
});
</script>

<template>
  <div
    v-once
    class="mx-auto flex w-full max-w-7xl grid-cols-1 flex-col gap-8 px-4 pt-32 pb-6 md:grid md:grid-cols-3 md:items-center md:justify-between md:pt-60 lg:pb-12 xl:grid-cols-4"
  >
    <figure
      class="group shadow-dropdown z-10 mx-auto aspect-2/3 overflow-hidden rounded-3xl md:order-last md:col-span-1 md:aspect-auto md:max-h-full md:w-fit md:justify-self-end xl:col-span-2 dark:shadow-none"
    >
      <NuxtImg
        alt="My profile picture"
        class="z-20 size-full bg-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
        format="avif,webp"
        placeholder
        preload
        quality="75"
        sizes="294px md:455px"
        src="/images/profile-picture.webp"
      />
    </figure>
    <section class="space-y-4 md:col-span-2 md:space-y-8">
      <h1 class="md:text-4xl xl:text-5xl">
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
      <h2 class="md:text-2xl xl:text-3xl">
        Nothing excites me more than learning something new and starting a new
        adventure.
      </h2>
      <section class="space-y-4 md:col-span-2 md:space-y-8">
        <hgroup class="space-y-2">
          <h2 class="md:text-2xl xl:text-3xl">
            Always looking out for opportunities.
          </h2>
          <p
            class="dark:text-white-100 transition-colors duration-300 ease-out"
          >
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
        <nav class="grid w-fit grid-cols-4 gap-x-4">
          <template v-for="[key, value] in externalLinks" :key="key">
            <UiHoverCard
              v-if="
                key === 'GitHub' && data?.data.viewer && status === 'success'
              "
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
        </nav>
      </section>
    </section>
  </div>
</template>

<style scoped></style>
