<script setup lang="ts">
const { label, skills } = defineProps<{
  label: string;
  skills: string[];
}>();
</script>

<template>
  <ul :aria-label="label" class="flex flex-wrap gap-x-1.5 gap-y-2">
    <li v-for="skill of skills" :key="`${skill}'s label`">
      <div
        class="bg-aqua/50 dark:bg-light-orange/30 dark:text-white-300 flex items-center rounded-full p-3 text-sm leading-1.5 font-semibold transition-colors duration-300 ease-out"
      >
        {{ skill }}
      </div>
    </li>
  </ul>
</template>
