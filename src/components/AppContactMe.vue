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
      class="relative mx-auto mb-20 flex h-full w-11/12 max-w-[28.125rem] flex-col items-center justify-center gap-y-4 p-0 text-center ipad-mini:mb-28 md:mb-32 lg:mb-48 lg:gap-y-8 xl:mb-56 xl:max-w-[37.5rem] 3xl:mb-72 dark:mb-12 dark:2xl:mb-24"
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
        class="text-lg font-bold text-white-400 transition-colors duration-300 ease-out md:text-3xl xl:text-4xl dark:text-white-300"
      >
        Get in touch
      </h2>
      <h3
        class="text-base font-normal text-white-400 transition-colors duration-300 ease-out md:text-lg xl:text-xl dark:text-white-100"
      >
        I'm always on the lookout for new opportunities. Whether you have a
        question or just want to say hi, I'll try my best to get back to you!
      </h3>
      <UiButton v-bind="buttonProps" />
    </div>
    <div
      v-if="!darkMode"
      data-testid="contact-me-dark-blue-gradient"
      class="dark-blue-gradient h-[145%] ipad-mini:h-[160%] lg:h-[170%] xl:h-[180%] 3xl:h-[200%]"
    />
  </section>
</template>
