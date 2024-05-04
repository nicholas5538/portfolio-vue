<script setup lang="ts"></script>

<template>
  <NuxtLoadingIndicator />
  <NuxtLayout name="default">
    <NuxtPage :page-key="(route) => route.fullPath" />
  </NuxtLayout>
</template>
