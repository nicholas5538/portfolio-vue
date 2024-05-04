<script setup lang="ts">
const props = defineProps<{
  label: string;
  skills: string[];
}>();
</script>

<template>
  <ul :aria-label="props.label" class="mt-2 flex flex-wrap">
    <li
      v-for="skill of props.skills"
      :key="`${skill}'s label`"
      class="mr-1.5 mt-2"
    >
      <div
        class="leading-1.5 flex items-center rounded-full bg-aqua/50 px-3 py-1 text-sm transition-colors duration-300 ease-out dark:bg-light-orange/50"
      >
        {{ skill }}
      </div>
    </li>
  </ul>
</template>
