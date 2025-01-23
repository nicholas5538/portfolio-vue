<script setup lang="ts">
import type { TElement } from "~/constants/typeInference";
import UiButton from "~/components/ui/UiButton.server.vue";
import UiIconifyIcon from "~/components/ui/UiIconifyIcon.vue";

const listRefs = useState<TElement[]>("listRefs");
const darkMode = useState<boolean>("darkMode");

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
    <div
      class="ipad-mini:mb-28 3xl:mb-72 relative mx-auto mb-20 flex size-full max-w-[28.125rem] flex-col items-center justify-center gap-y-4 p-0 px-4 text-center md:mb-32 lg:mb-48 lg:gap-y-8 xl:mb-56 xl:max-w-[37.5rem] dark:mb-12 dark:2xl:mb-24"
    >
      <h2
        :ref="(el) => listRefs.push(el)"
        class="sectionHeading text-xl font-bold md:text-3xl xl:text-4xl"
      >
        <UiIconifyIcon
          icon="fluent-emoji:man-tipping-hand"
          :width="36"
          :height="36"
        />
        <span class="span-heading">What's next?</span>
      </h2>
      <h2
        class="text-white-400 dark:text-white-300 text-lg font-bold transition-colors duration-300 ease-out md:text-3xl xl:text-4xl"
      >
        Get in touch
      </h2>
      <h3
        class="text-white-400 dark:text-white-100 text-base font-normal transition-colors duration-300 ease-out md:text-lg xl:text-xl"
      >
        I'm always on the lookout for new opportunities. Whether you have a
        question or just want to say hi, I'll try my best to get back to you!
      </h3>
      <UiButton v-bind="buttonProps" />
    </div>
    <div
      v-if="!darkMode"
      data-testid="contact-me-dark-blue-gradient"
      class="dark-blue-gradient ipad-mini:h-[160%] 3xl:h-[200%] h-[145%] lg:h-[170%] xl:h-[180%]"
    />
  </section>
</template>
