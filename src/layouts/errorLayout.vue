<script setup lang="ts">
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
    class="grid h-screen w-screen place-items-center bg-black-300"
    aria-label="error-content"
  >
    <div
      class="text-card-foreground w-11/12 max-w-sm rounded-lg border-4 border-black-500 bg-black-400 shadow-sm"
    >
      <div class="flex flex-col space-y-1.5 p-6">
        <h3
          class="text-xl font-semibold tracking-wider text-white-300 md:text-2xl"
        >
          Uh oh, looks like you're lost.
        </h3>
      </div>
      <div class="p-6 px-0 pt-0">
        <NuxtPicture
          alt="Error page picture"
          format="webp"
          fill="fill"
          loading="lazy"
          placeholder
          quality="75"
          src="/images/error.webp"
        />
      </div>
      <div class="flex items-center p-6 pt-0">
        <Button
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
