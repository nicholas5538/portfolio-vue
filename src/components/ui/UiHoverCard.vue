<script setup lang="ts">
import {
  AvatarFallback,
  AvatarImage,
  AvatarRoot,
  HoverCardArrow,
  HoverCardContent,
  HoverCardPortal,
  HoverCardRoot,
  HoverCardTrigger,
} from "radix-vue";
import UiIconButton from "~/components/ui/UiIconButton.server.vue";
import UiIconifyIcon from "~/components/ui/UiIconifyIcon.vue";
import type { ResultOf } from "gql.tada";
import type { GithubViewerQuery } from "~/data/query";

const props = defineProps<{
  application: string;
  applicationIcon: string;
  data: ResultOf<typeof GithubViewerQuery>["viewer"];
  profileIcon: string;
  mailIcon: string;
  locationIcon: string;
}>();
const hoverState = ref(false);
</script>

<template>
  <HoverCardRoot v-model:open="hoverState" :open-delay="300">
    <HoverCardTrigger as-child>
      <NuxtLink
        :aria-label="`Click to see more on my ${props.application} Profile`"
        class="bg-aqua text-white-400 hover:bg-dark-aqua dark:bg-light-orange dark:text-black-300 dark:hover:bg-orange-red inline-flex size-10 items-center justify-center rounded-full shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black"
        external
        target="_blank"
        :href="data.url as string"
      >
        <UiIconButton
          :label="`Click to see more on my ${props.application} Profile`"
          :icon="props.applicationIcon"
        />
      </NuxtLink>
    </HoverCardTrigger>
    <HoverCardPortal>
      <HoverCardContent
        align="center"
        avoid-collisions
        :side-offset="6"
        update-position-strategy="optimized"
        class="border-dark-blue bg-white-200 data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade dark:bg-black-100 w-[300px] rounded-md p-5 shadow-2xl data-[state=open]:transition-all"
      >
        <div class="flex flex-col gap-[0.4375rem]">
          <AvatarRoot
            class="bg-dark-blue dark:bg-orange-red inline-flex size-[2.8125rem] items-center justify-center overflow-hidden rounded-full align-middle select-none"
          >
            <AvatarImage as-child :src="data.avatarUrl as string">
              <NuxtImg
                class="h-full w-full rounded-[inherit] object-cover"
                alt="GitHub profile picture"
                :placeholder="[45, 45, 75, 5]"
                format="webp"
                loading="lazy"
                :src="data.avatarUrl as string"
                width="45"
                height="45"
              />
            </AvatarImage>
            <AvatarFallback as-child :delay-ms="600">
              <NuxtImg
                class="h-full w-full rounded-[inherit] object-cover"
                alt="Alternative profile picture"
                :placeholder="[45, 45, 75, 5]"
                format="webp"
                loading="lazy"
                src="/images/avatarphoto.jpg"
                width="45"
                height="45"
              />
            </AvatarFallback>
          </AvatarRoot>
          <div class="text-black-100 dark:text-white-100 flex flex-col gap-4">
            <div class="flex flex-col gap-y-1 text-[0.9375rem]">
              <div class="m-0 leading-[1.5] font-bold">
                {{ data.name }}
              </div>
              <div class="flex gap-1 font-semibold">
                <UiIconifyIcon :icon="profileIcon" />
                <div class="m-0 leading-[1.5]">
                  {{ data.login }}
                </div>
              </div>
              <div class="flex gap-1 font-semibold">
                <UiIconifyIcon :icon="mailIcon" />
                <div class="m-0 leading-[1.5]">
                  {{ data.email }}
                </div>
              </div>
              <div class="flex gap-1 font-semibold">
                <UiIconifyIcon :icon="locationIcon" />
                <div class="m-0 leading-[1.5]">
                  {{ data.location }}
                </div>
              </div>
            </div>
            <div class="m-0 leading-[1.5]">
              {{ data.bio }}
            </div>
            <div class="flex gap-4">
              <div class="flex gap-1">
                <div class="m-0 leading-[1.5] font-medium">
                  {{ data.following.totalCount }}
                </div>
                <div class="m-0 leading-[1.5]">Following</div>
              </div>
              <div class="flex gap-1">
                <div class="m-0 leading-[1.5] font-medium">
                  {{ data.followers.totalCount }}
                </div>
                <div class="text-mauve10 m-0 leading-[1.5]">Follower(s)</div>
              </div>
            </div>
          </div>
        </div>
        <HoverCardArrow class="fill-aqua dark:fill-light-orange" />
      </HoverCardContent>
    </HoverCardPortal>
  </HoverCardRoot>
</template>
