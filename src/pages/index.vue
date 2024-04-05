<script setup lang="ts">
import {
  AvatarFallback,
  AvatarImage,
  AvatarRoot,
  TooltipProvider,
} from "radix-vue";
import { externalLinks } from "~/constants/globalVariables";
import type { gitUserSchema } from "~/constants/typeInference";

const config = useRuntimeConfig();
const { data } = await useFetch<gitUserSchema>("/user", {
  baseURL: config.public.githubBaseUrl ?? "https://api.github.com",
  getCachedData(key, nuxtApp) {
    return nuxtApp.payload.data[key] || nuxtApp.static.data[key];
  },
  headers: {
    Accept: "application/vnd.github+json",
    Authorization: `Bearer ${config.githubSecret}`,
    "X-GitHub-Api-Version": "2022-11-28",
  },
  key: "user",
  method: "get",
  timeout: 5000,
  pick: [
    "avatar_url",
    "bio",
    "email",
    "following",
    "followers",
    "location",
    "login",
    "name",
  ],
  watch: false,
});
</script>

<template>
  <main>
    <div
      class="mx-auto mb-28 grid w-11/12 max-w-7xl grid-cols-1 pt-32 md:grid-cols-3 md:grid-rows-3 md:items-center md:justify-evenly md:gap-x-8 md:pt-60 lg:mb-60 xl:grid-cols-4"
    >
      <aside
        class="z-10 mx-auto mb-8 h-72 w-48 overflow-hidden rounded-3xl shadow-dropdown md:order-last md:col-span-1 md:row-start-1 md:row-end-4 md:mb-0 md:mr-0 md:h-min md:w-full xl:col-span-2 xl:w-9/12 dark:shadow-none"
      >
        <div
          class="z-20 scale-110 bg-contain transition-transform duration-300 ease-in-out hover:scale-125"
        >
          <NuxtPicture
            format="webp"
            fill="fill"
            placeholder
            quality="100"
            src="/images/profile.webp"
          />
        </div>
      </aside>
      <h1
        class="mb-4 md:col-span-2 md:row-start-1 md:row-end-2 md:mb-0 md:text-4xl xl:text-5xl"
      >
        <span
          class="inline-block origin-wave animate-wave text-4xl xl:text-5xl"
        >
          <Icon name="👋" />
        </span>
        &nbsp;&nbsp;Hi there! I&apos;m
        <span
          class="bg-transparent bg-gradient-to-b from-aqua to-aqua bg-clip-text font-bold text-transparent transition-bgi duration-300 ease-out md:text-black-200 dark:bg-orange-gradient dark:text-transparent"
        >
          Nicholas
        </span>
        , I love to design and code beautifully simple things.
      </h1>
      <h2
        class="mb-4 md:col-span-2 md:row-start-2 md:row-end-2 md:mb-0 md:text-2xl xl:text-3xl"
      >
        Nothing excites me more than learning something new and starting a new
        adventure.
      </h2>
      <section class="md:col-span-2 md:row-start-3 md:row-end-4 xl:gap-y-10">
        <h2 class="mb-4 md:mb-8 md:text-2xl xl:text-3xl">
          Always looking out for opportunities.
        </h2>
        <div class="flex flex-row items-center justify-start gap-x-6">
          <div v-for="[key, value] in externalLinks">
            <HoverCard v-if="key === 'GitHub'" :key="key">
              <template #cardTrigger>
                <NuxtLink
                  :aria-label="`Click to see more on my ${key} Profile`"
                  class="focus:shadow-black inline-flex h-[40px] w-[40px] items-center justify-center rounded-full bg-aqua text-white-400 shadow-[0_2px_10px] hover:bg-dark-aqua focus:shadow-[0_0_0_2px] dark:bg-light-orange dark:text-black-300 dark:hover:bg-orange-red"
                  external
                  target="_blank"
                  :to="value.url"
                >
                  <IconButton name="github" />
                </NuxtLink>
              </template>
              <template #cardContent>
                <div class="flex flex-col gap-[7px]">
                  <AvatarRoot
                    class="inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full bg-dark-blue align-middle dark:bg-orange-red"
                  >
                    <AvatarImage as-child :src="data!.avatar_url">
                      <NuxtImg
                        class="h-full w-full rounded-[inherit] object-cover"
                        alt="GitHub Avatar image"
                        placeholder
                        format="webp"
                        loading="lazy"
                        :src="data?.avatar_url"
                      />
                    </AvatarImage>
                    <AvatarFallback as-child :delay-ms="600">
                      <NuxtImg
                        class="h-full w-full rounded-[inherit] object-cover"
                        alt="Avatar photo"
                        placeholder
                        format="webp"
                        loading="lazy"
                        src="/images/avatarphoto.jpg"
                      />
                    </AvatarFallback>
                  </AvatarRoot>
                  <div
                    class="flex flex-col gap-4 text-black-100 dark:text-white-100"
                  >
                    <div class="flex flex-col gap-y-1">
                      <div class="m-0 text-[15px] font-bold leading-[1.5]">
                        {{ data?.name }}
                      </div>
                      <div class="flex gap-1 font-semibold">
                        <IconCSS name="iconamoon:profile" />
                        <div class="m-0 text-[15px] leading-[1.5]">
                          {{ data?.login }}
                        </div>
                      </div>
                      <div class="flex gap-1 font-semibold">
                        <IconCSS name="material-symbols:mail-outline" />
                        <div class="m-0 text-[15px] leading-[1.5]">
                          {{ data?.email }}
                        </div>
                      </div>
                      <div class="flex gap-1 font-semibold">
                        <IconCSS name="mdi:location" />
                        <div class="m-0 text-[15px] leading-[1.5]">
                          {{ data?.location }}
                        </div>
                      </div>
                    </div>
                    <div class="m-0 text-[15px] leading-[1.5]">
                      {{ data?.bio }}
                    </div>
                    <div class="flex gap-4">
                      <div class="flex gap-1">
                        <div class="m-0 text-[15px] font-medium leading-[1.5]">
                          {{ data?.following }}
                        </div>
                        <div class="m-0 text-[15px] leading-[1.5]">
                          Following
                        </div>
                      </div>
                      <div class="flex gap-1">
                        <div class="m-0 text-[15px] font-medium leading-[1.5]">
                          {{ data?.followers }}
                        </div>
                        <div class="text-mauve10 m-0 text-[15px] leading-[1.5]">
                          Follower(s)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </HoverCard>
            <TooltipProvider v-else :delay-duration="300">
              <Tooltip
                :key="key"
                :name="value.name"
                :text="value.text"
                :url="value.url"
              >
                <template #link>
                  <IconButton :name="value.name" />
                </template>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>
