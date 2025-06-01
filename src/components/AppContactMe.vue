<script setup lang="ts">
import type { TElement } from "~/constants/type-inference";
import UiButton from "~/components/ui/UiButton.server.vue";
import UiIconifyIcon from "~/components/ui/UiIconifyIcon.vue";

const listRefs = useState<TElement[]>("listRefs");

const buttonProps = {
  ariaLabel: "Click here to send an email to me",
  buttonClass: "text-base md:text-lg xl:text-xl",
  link: "mailto:nicholas8399@gmail.com",
  linkClass: "w-1/2 max-w-40",
  text: "Say Hello!",
};
</script>

<template>
  <section class="dark-blue-section">
    <hgroup
      class="relative mx-auto flex size-full max-w-200 flex-col items-center justify-center gap-y-5 px-4 py-6 text-center lg:py-12"
    >
      <h2
        :ref="(el) => listRefs.push(el)"
        class="section-heading text-xl font-bold md:text-3xl xl:text-4xl"
      >
        <UiIconifyIcon
          icon="fluent-emoji:man-tipping-hand"
          :width="36"
          :height="36"
        />
        <span class="span-heading">What's next?</span>
      </h2>
      <h3
        class="text-white-400 dark:text-white-300 text-lg font-bold transition-colors duration-300 ease-out md:text-3xl xl:text-4xl"
      >
        Get in touch
      </h3>
      <p
        class="text-white-400 dark:text-white-100 text-base font-normal transition-colors duration-300 ease-out md:text-lg xl:text-xl"
      >
        I'm always on the lookout for new opportunities. Whether you have a
        question or just want to say hi, I'll try my best to get back to you!
      </p>
      <UiButton v-bind="buttonProps" />
    </hgroup>
  </section>
</template>
