<script setup lang="ts">
import UiButton from "~/components/ui/UiButton.server.vue";

useServerSeoMeta({
  title: "Page not found",
  ogTitle: "Page not found",
  creator: "Nicholas Yong",
  description: "Looks like you're lost, please go back to homepage",
  ogDescription: "Looks like you're lost, please go back to homepage",
  contentSecurityPolicy: {
    manifestSrc: "/favicons/site.webmanifest",
  },
  themeColor: [
    { content: "#f8f8f8", media: "(prefers-color-scheme: light)" },
    { content: "#212529", media: "(prefers-color-scheme: dark)" },
  ],
});

const handleError = () => clearError();
</script>

<template>
  <div
    class="bg-black-300 grid h-screen w-screen place-items-center"
    aria-label="error-content"
  >
    <div
      class="text-card-foreground border-black-500 bg-black-400 w-full max-w-sm rounded-lg border-4 px-4 shadow-xs"
    >
      <div class="flex flex-col space-y-1.5 p-6">
        <h3
          class="text-white-300 text-xl font-semibold tracking-wider md:text-2xl"
        >
          Uh oh, looks like you're lost.
        </h3>
      </div>
      <div class="p-6 px-0 pt-0">
        <NuxtImg
          alt="Error 404"
          format="webp"
          fill="fill"
          preload
          placeholder
          quality="75"
          src="/image/error.webp"
        />
      </div>
      <div class="flex items-center p-6 pt-0">
        <UiButton
          aria-label="Click here to redirect back to homepage"
          button-class="text-black-300"
          link="/"
          link-class="bg-light-orange text-lg hover:bg-orange-red"
          target="_self"
          text="Send me back!"
          @click="handleError"
        />
      </div>
    </div>
  </div>
</template>
