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
import IconifyIcon from "~/components/IconifyIcon.vue";
import type { gitUserSchema } from "~/constants/typeInference";

const props = defineProps<{
  application: string;
  applicationIcon: string;
  data: gitUserSchema;
  profileIcon: string;
  mailIcon: string;
  locationIcon: string;
  to: string;
}>();
const hoverState = ref(false);
</script>

<template>
  <HoverCardRoot v-model:open="hoverState" :open-delay="300">
    <HoverCardTrigger as-child>
      <NuxtLink
        :aria-label="`Click to see more on my ${props.application} Profile`"
        class="focus:shadow-black inline-flex h-[40px] w-[40px] items-center justify-center rounded-full bg-aqua text-white-400 shadow-[0_2px_10px] hover:bg-dark-aqua focus:shadow-[0_0_0_2px] dark:bg-light-orange dark:text-black-300 dark:hover:bg-orange-red"
        external
        target="_blank"
        :to="props.to"
      >
        <IconButton
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
        class="w-[300px] rounded-md border-dark-blue bg-white-200 p-5 shadow-2xl data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade data-[state=open]:transition-all dark:bg-black-100"
      >
        <div class="flex flex-col gap-[7px]">
          <AvatarRoot
            class="inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full bg-dark-blue align-middle dark:bg-orange-red"
          >
            <AvatarImage as-child :src="data.avatar_url">
              <NuxtImg
                class="h-full w-full rounded-[inherit] object-cover"
                alt="GitHub profile picture"
                :placeholder="[45, 45, 75, 5]"
                format="webp"
                loading="lazy"
                :src="data.avatar_url"
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
          <div class="flex flex-col gap-4 text-black-100 dark:text-white-100">
            <div class="flex flex-col gap-y-1">
              <div class="m-0 text-[15px] font-bold leading-[1.5]">
                {{ data.name }}
              </div>
              <div class="flex gap-1 font-semibold">
                <IconifyIcon :icon="profileIcon" />
                <div class="m-0 text-[15px] leading-[1.5]">
                  {{ data.login }}
                </div>
              </div>
              <div class="flex gap-1 font-semibold">
                <IconifyIcon :icon="mailIcon" />
                <div class="m-0 text-[15px] leading-[1.5]">
                  {{ data.email }}
                </div>
              </div>
              <div class="flex gap-1 font-semibold">
                <IconifyIcon :icon="locationIcon" />
                <div class="m-0 text-[15px] leading-[1.5]">
                  {{ data.location }}
                </div>
              </div>
            </div>
            <div class="m-0 text-[15px] leading-[1.5]">
              {{ data.bio }}
            </div>
            <div class="flex gap-4">
              <div class="flex gap-1">
                <div class="m-0 text-[15px] font-medium leading-[1.5]">
                  {{ data.following }}
                </div>
                <div class="m-0 text-[15px] leading-[1.5]">Following</div>
              </div>
              <div class="flex gap-1">
                <div class="m-0 text-[15px] font-medium leading-[1.5]">
                  {{ data.followers }}
                </div>
                <div class="text-mauve10 m-0 text-[15px] leading-[1.5]">
                  Follower(s)
                </div>
              </div>
            </div>
          </div>
        </div>
        <HoverCardArrow class="fill-aqua dark:fill-light-orange" />
      </HoverCardContent>
    </HoverCardPortal>
  </HoverCardRoot>
</template>
