<script setup lang="ts">
import { ConfigProvider } from "radix-vue";

const useIdFunction = () => useId();
</script>

<template>
  <ConfigProvider :use-id="useIdFunction">
    <NuxtLoadingIndicator />
    <NuxtLayout name="default">
      <NuxtPage :page-key="(route) => route.fullPath" />
    </NuxtLayout>
  </ConfigProvider>
</template>
