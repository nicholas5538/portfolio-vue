<script setup lang="ts">
const { label, skills } = defineProps<{
  label: string;
  skills: string[];
}>();
</script>

<template>
  <ul :aria-label="label" class="mt-2 flex flex-wrap">
    <li v-for="skill of skills" :key="`${skill}'s label`" class="mr-1.5 mt-2">
      <div
        class="leading-1.5 flex items-center rounded-full bg-aqua/50 px-3 py-1 text-sm font-semibold transition-colors duration-300 ease-out dark:bg-light-orange/30 dark:text-white-300"
      >
        {{ skill }}
      </div>
    </li>
  </ul>
</template>
